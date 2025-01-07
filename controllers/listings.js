const mongoose = require("mongoose");

const Listing = require("../models/listing");

const mbxGeocoding = require("@mapbox/mapbox-sdk/services/geocoding");
const mapToken = process.env.MAP_TOKEN;
const geoCodingClient = mbxGeocoding({ accessToken: mapToken });

module.exports.index = async (req, res) => {
	const categories = [
		"Trending",
		"Iconic City",
		"Mountain",
		"Castle",
		"Pool",
		"Camping",
		"Farm",
		"Arctic",
		"Spa",
		"Adventure",
		"Dining",
		"Meeting",
	];
	const allListings = await Listing.find({});
	res.render("listings/index.ejs", { allListings, categories });
};

module.exports.newListing = (req, res) => {
	res.render("listings/new.ejs");
};

module.exports.showListing = async (req, res) => {
	let { id } = req.params;
	if (!mongoose.Types.ObjectId.isValid(id)) {
		req.flash("error", "Invalid Listing ID.");
		return res.redirect("/listings"); // Redirect to listings page if the ID is invalid
	}
	const listing = await Listing.findById(id)
		.populate({ path: "reviews", populate: { path: "author" } })
		.populate("owner");

	console.log(listing);
	res.render("listings/show.ejs", { listing });
};

module.exports.createListing = async (req, res, next) => {
	let response = await geoCodingClient
		.forwardGeocode({
			query: req.body.listing.location,
			limit: 1,
		})
		.send();

	let url = req.file.path;
	let filename = req.file.filename;
	console.log(url, "..", filename);
	const newListing = new Listing(req.body.listing);
	newListing.owner = req.user._id;
	newListing.image = { url, filename };
	newListing.geometry = response.body.features[0].geometry;

	let savedListing = await newListing.save().catch((err) => {
		console.error("Save Error:", err);
		throw new Error("Failed to save listing");
	});
	console.log(savedListing);
	req.flash("success", "New Listing Created!");
	console.log(newListing);
	res.redirect("/listings");
};

module.exports.editListing = async (req, res) => {
	let { id } = req.params;
	if (!mongoose.Types.ObjectId.isValid(id)) {
		req.flash("error", "Invalid Listing ID.");
		return res.redirect("/listings"); // Redirect to listings page if the ID is invalid
	}
	1;
	const listing = await Listing.findById(id);
	if (!listing) {
		req.flash("error", "The listing does not exist anymore...");
		res.redirect("/listings");
	}
	let originalImageUrl = listing.image.url;
	originalImageUrl = originalImageUrl.replace("/upload", "/upload/h_300,w_250");
	res.render("listings/edit.ejs", { listing, originalImageUrl });
};

module.exports.updateListing = async (req, res) => {
	// if (!req.body.listing) {
	// 	throw new ExpressError(404, "Send valid data for Listing...");
	// }
	let { id } = req.params;
	if (!mongoose.Types.ObjectId.isValid(id)) {
		req.flash("error", "Invalid Listing ID.");
		return res.redirect("/listings"); // Redirect to listings page if the ID is invalid
	}
	let listing = await Listing.findByIdAndUpdate(id, { ...req.body.listing });
	if (typeof req.file !== "undefined") {
		let url = req.file.path;
		let filename = req.file.filename;
		listing.image = { url, filename };
		await listing.save();
	}

	req.flash("success", "Listing Updated!");
	res.redirect(`/listings/${id}`);
};

module.exports.destroyListing = async (req, res) => {
	let { id } = req.params;
	if (!mongoose.Types.ObjectId.isValid(id)) {
		req.flash("error", "Invalid Listing ID.");
		return res.redirect("/listings"); // Redirect to listings page if the ID is invalid
	}
	let deletedListing = await Listing.findByIdAndDelete(id, {
		...req.body.listing,
	});
	console.log(deletedListing);
	req.flash("success", "Listing Deleted!");
	res.redirect("/listings");
};
