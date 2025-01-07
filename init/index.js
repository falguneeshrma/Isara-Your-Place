const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main()
	.then(() => {
		console.log("connected to DB");
	})
	.catch((err) => {
		console.log(err);
	});

async function main() {
	await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
	await Listing.deleteMany({});
	initData.data = initData.data.map((obj) => ({
		...obj,
		owner: "673d8f65ac29fee421275b71",
		//67575679517218af6898a37d demo
		//673d8f65ac29fee421275b71 falguneeshrma
	}));
	await Listing.insertMany(initData.data);
	console.log("data was initialized");
};

initDB();

//cd init
//node index.js
//data inititlized
//check using mongosh>>db.listings.find()
//cd..
