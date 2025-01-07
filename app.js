//phone size adaptation
if (process.env.NODE_ENV != "production") {
	require("dotenv").config();
}

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const ExpressError = require("./utils/ExpressError.js");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user.js");

const Listing = require("./models/listing.js");
//../models/listing.js

const listingRouter = require("./routes/listing.js");
const reviewRouter = require("./routes/review.js");
const userRouter = require("./routes/user.js");
const { isloggedIn } = require("./middleware.js");

// const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";
const dbUrl = process.env.ATLASDB_URL;

main()
	.then(() => {
		console.log("connected to DB");
	})
	.catch((err) => {
		console.log(err);
	});

async function main() {
	await mongoose.connect(dbUrl);
}

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate);
// app.use(express.static(path.join(__dirname, "/public")))
app.use(express.static("public"));

const store = MongoStore.create({
	mongoUrl: dbUrl,
	crypto: {
		secret: process.env.SECRET,
	},
	touchAfter: 24 * 3600,
});

store.on("error", () => {
	console.log("ERROR in MONGO SESSION STORE", err);
});

const sessionOptions = {
	store,
	secret: process.env.SECRET,
	resave: false,
	saveUninitialized: true,
	cookie: {
		expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
		maxAge: 7 * 24 * 60 * 60 * 1000,
		httpOnly: true,
	},
};

// app.get("/", (req, res) => {
// 	res.send("Hi, I am root");
// });

app.use(session(sessionOptions));
//use flash before declaring routes
app.use(flash());

//passport

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//
app.use((req, res, next) => {
	res.locals.success = req.flash("success");
	res.locals.error = req.flash("error");
	res.locals.currUser = req.user;
	next();
});

// app.get("/demouser", async (req, res) => {
// 	let fakeUser = new User({
// 		email: "student@gmail.com",
// 		username: "delta-student",
// 	});

// 	let registeredUser = await User.register(fakeUser, "helloworld");
// 	res.send(registeredUser);
// });

app.post("/signup", async (req, res) => {
	const { username, email, password } = req.body;
	const newUser = new User({ username, email });

	// try {
	//   await User.register(newUser, password);
	//   res.send('User signed up!');
	// } catch (error) {
	//   console.log("Signup error:", error);
	//   res.send("Error during signup");
	// }
	try {
		let { username, email, password } = req.body;
		const newUser = new User({ email, username });
		const registeredUser = await User.register(newUser, password);
		console.log(registeredUser);
		req.login(registeredUser, (err) => {
			if (err) {
				return next(err);
			}
			req.flash("success", "Welcome to Wanderlust");
			res.redirect("/listings");
		});
	} catch (e) {
		req.flash("error", e.message);
		res.redirect("/signup");
	}
});

//CATEGORY ICONS
//working

app.get("/listings/category/:category", isloggedIn, async (req, res) => {
	const { category } = req.params; // Get the category from the URL

	try {
		// Find listings that belong to the selected category
		const listings = await Listing.find({ category: category });

		if (listings.length === 0) {
			req.flash(
				"error",
				`No locations currently available in ${category}. Be the first to add a new location in this category!`
			);
			return res.redirect("/listings/new");
		}

		// Render the listings for the selected category
		res.render("listings/category", { category, listings });
	} catch (err) {
		console.error(err);
		res.status(500).send("Server Error");
	}
});

//Search
app.get("/listings/search", async (req, res) => {
	const { query } = req.query; // Get the search query from the URL parameter

	try {
		let filter = {};
		if (query) {
			filter.title = { $regex: query, $options: "i" }; // Case-insensitive search
		}

		const listings = await Listing.find(filter);

		res.render("listings/search.ejs", { listings, query });
	} catch (err) {
		console.error(err);
		req.flash("error", "Something went wrong. Please try again.");
		res.redirect("/");
	}
});

app.use("/listings", listingRouter);
app.use("/listings/:id/reviews", reviewRouter);
app.use("/", userRouter);

//Reviews

// app.get("/testListing", async(req, res) => {
//     let sampleListing = new Listing({
//         title: "My New Villa",
//         description: "By the beach",
//         price: 1200,
//         location: "Calangute, Goa",
//         country: "India"
//     });

//     await sampleListing.save();
//     console.log("sample was saved");
//     res.send("successful testing");
// })

app.all("*", (req, res, next) => {
	next(new ExpressError(404, "Page Not Found"));
});

app.use((err, req, res, next) => {
	let { statusCode = 500, message = "Something went wrong..." } = err;
	res.status(statusCode).render("error.ejs", { message });
	// res.status(statusCode).send(message)
});

app.listen(8080, () => {
	console.log("server is listening to port 8080");
});
