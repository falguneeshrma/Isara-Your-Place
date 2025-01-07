const sampleListings = [
	{
		title: "Cozy Beachfront Cottage",
		description:
			"Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
		image: {
			filename: "listingimage",
			url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
		},
		price: 1500,
		location: "Malibu",
		country: "United States",
		category: "Iconic City", // You can assign an appropriate category like "Trending" or "Adventure"
		owner: "676b0b3ef924247dc903d869", // Reference to the owner User ObjectId (replace ownerId with actual user)
		geometry: {
			type: "Point",
			coordinates: [-118.7798, 34.0259], // Example coordinates for Malibu
		},
	},

	{
		title: "Modern Loft in Downtown",
		description:
			"Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
		image: {
			filename: "listingimage",
			url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
		},
		price: 1200,
		location: "New York City",
		country: "United States",
		category: "Iconic City", // Appropriate category for an urban loft
		owner: "676b0b3ef924247dc903d869", // Reference to the owner User ObjectId (replace ownerId with actual user)
		geometry: {
			type: "Point",
			coordinates: [-74.006, 40.7128], // Coordinates for New York City
		},
	},

	{
		title: "Luxury Mountain Retreat",
		description: "A beautiful mountain retreat with breathtaking views.",
		image: {
			url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
			filename: "mountain.jpg",
		},
		price: 250,
		category: "Trending",
		location: "Alps, Switzerland",
		country: "Switzerland",
		owner: "676b0b3ef924247dc903d869", // Example User ID (use actual User ID)
		geometry: {
			type: "Point",
			coordinates: [46.8182, 8.2275], // Coordinates for the location
		},
	},
	{
		title: "Historic Villa in Tuscany",
		description:
			"Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
		image: {
			filename: "listingimage",
			url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
		},
		price: 2500,
		location: "Florence",
		country: "Italy",
		category: "Pool", // "Iconic City" could apply here given Tuscany's historical significance
		owner: "676b0b3ef924247dc903d869", // Replace with actual user ObjectId
		geometry: {
			type: "Point",
			coordinates: [11.2558, 43.7696], // Coordinates for Florence, Italy
		},
	},
	{
		title: "Secluded Treehouse Getaway",
		description:
			"Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
		image: {
			filename: "listingimage",
			url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
		},
		price: 800,
		location: "Portland",
		country: "United States",
		category: "Spa", // Suitable category for a treehouse getaway
		owner: "676b0b3ef924247dc903d869", // Replace with actual user ObjectId
		geometry: {
			type: "Point",
			coordinates: [-122.6765, 45.5234], // Coordinates for Portland, OR
		},
	},
	{
		title: "Beachfront Paradise",
		description:
			"Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
		image: {
			filename: "listingimage",
			url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
		},
		price: 2000,
		location: "Cancun",
		country: "Mexico",
		category: "Trending", // Category suitable for a beachfront condo
		owner: "676b0b3ef924247dc903d869", // Replace with actual user ObjectId
		geometry: {
			type: "Point",
			coordinates: [-87.1469, 21.1743], // Coordinates for Cancun, Mexico
		},
	},
	{
		title: "Rustic Cabin by the Lake",
		description:
			"Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.",
		image: {
			filename: "listingimage",
			url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
		},
		price: 900,
		location: "Lake Tahoe",
		country: "United States",
		category: "Adventure", // Suitable for a rustic cabin by the lake
		owner: "676b0b3ef924247dc903d869", // Replace with actual user ObjectId
		geometry: {
			type: "Point",
			coordinates: [-120.0324, 38.9397], // Coordinates for Lake Tahoe
		},
	},
	{
		title: "Luxury Penthouse with City Views",
		description:
			"Indulge in luxury living with panoramic city views from this stunning penthouse apartment.",
		image: {
			filename: "listingimage",
			url: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
		},
		price: 3500,
		location: "Los Angeles",
		country: "United States",
		category: "Camping", // Appropriate category for a luxury penthouse in a major city
		owner: "676b0b3ef924247dc903d869", // Replace with actual user ObjectId
		geometry: {
			type: "Point",
			coordinates: [-118.2437, 34.0522], // Coordinates for Los Angeles
		},
	},
	{
		title: "Ski-In/Ski-Out Chalet",
		description:
			"Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.",
		image: {
			filename: "listingimage",
			url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
		},
		price: 3000,
		location: "Verbier",
		country: "Switzerland",
		category: "Iconic City", // Suitable category for a ski-in/ski-out chalet
		owner: "676b0b3ef924247dc903d869", // Replace with actual user ObjectId
		geometry: {
			type: "Point",
			coordinates: [7.23, 46.0926], // Coordinates for Verbier, Switzerland
		},
	},
	{
		title: "Safari Lodge in the Serengeti",
		description:
			"Experience the thrill of the wild in a comfortable safari lodge. Witness the Great Migration up close.",
		image: {
			filename: "listingimage",
			url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
		},
		price: 4000,
		location: "Serengeti National Park",
		country: "Tanzania",
		category: "Trending", // Suitable category for a safari lodge
		owner: "676b0b3ef924247dc903d869", // Replace with actual user ObjectId
		geometry: {
			type: "Point",
			coordinates: [34.8888, -2.3333], // Coordinates for Serengeti National Park, Tanzania
		},
	},
	{
		title: "Historic Canal House",
		description:
			"Stay in a piece of history in this beautifully preserved canal house in Amsterdam's iconic district.",
		image: {
			filename: "listingimage",
			url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FtcGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
		},
		price: 1800,
		location: "Amsterdam",
		country: "Netherlands",
		category: "Adventure", // Suitable category for a historic house in an iconic city like Amsterdam
		owner: "676b0b3ef924247dc903d869", // Replace with actual user ObjectId
		geometry: {
			type: "Point",
			coordinates: [4.8952, 52.3676], // Coordinates for Amsterdam, Netherlands
		},
	},
	{
		title: "Private Island Retreat",
		description:
			"Have an entire island to yourself for a truly exclusive and unforgettable vacation experience.",
		image: {
			filename: "listingimage",
			url: "https://images.unsplash.com/photo-1618140052121-39fc6db33972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bG9kZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
		},
		price: 10000,
		location: "Fiji",
		country: "Fiji",
		category: "Trending", // Appropriate category for a private island retreat
		owner: "676b0b3ef924247dc903d869", // Replace with actual user ObjectId
		geometry: {
			type: "Point",
			coordinates: [178.065, -17.7134], // Coordinates for Fiji
		},
	},
	{
		title: "Charming Cottage in the Cotswolds",
		description:
			"Escape to the picturesque Cotswolds in this quaint and charming cottage with a thatched roof.",
		image: {
			filename: "listingimage",
			url: "https://images.unsplash.com/photo-1602088113235-229c19758e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmVhY2glMjB2YWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
		},
		price: 1200,
		location: "Cotswolds",
		country: "United Kingdom",
		category: "Iconic City", // Suitable category for a charming cottage in a countryside setting
		owner: "676b0b3ef924247dc903d869", // Replace with actual user ObjectId
		geometry: {
			type: "Point",
			coordinates: [-1.7627, 51.828], // Coordinates for the Cotswolds, United Kingdom
		},
	},
	{
		title: "Historic Brownstone in Boston",
		description:
			"Step back in time in this elegant historic brownstone located in the heart of Boston.",
		image: {
			filename: "listingimage",
			url: "https://images.unsplash.com/photo-1533619239233-6280475a633a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
		},
		price: 2200,
		location: "Boston",
		country: "United States",
		category: "Iconic City", // Suitable category for a historic brownstone in an iconic city like Boston
		owner: "676b0b3ef924247dc903d869", // Replace with actual user ObjectId
		geometry: {
			type: "Point",
			coordinates: [-71.0589, 42.3601], // Coordinates for Boston, United States
		},
	},
	{
		title: "Beachfront Bungalow in Bali",
		description:
			"Relax on the sandy shores of Bali in this beautiful beachfront bungalow with a private pool.",
		image: {
			filename: "listingimage",
			url: "https://images.unsplash.com/photo-1602391833977-358a52198938?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
		},
		price: 1800,
		location: "Bali",
		country: "Indonesia",
		category: "Camping", // Suitable category for a beachfront bungalow in a tropical island location
		owner: "676b0b3ef924247dc903d869", // Replace with actual user ObjectId
		geometry: {
			type: "Point",
			coordinates: [115.1889, -8.4095], // Coordinates for Bali, Indonesia
		},
	},
	{
		title: "Mountain View Cabin in Banff",
		description:
			"Enjoy breathtaking mountain views from this cozy cabin in the Canadian Rockies.",
		image: {
			filename: "listingimage",
			url: "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
		},
		price: 1500,
		location: "Banff",
		country: "Canada",
		category: "Mountain", // Suitable category for a cabin with mountain views
		owner: "676b0b3ef924247dc903d869", // Replace with actual user ObjectId
		geometry: {
			type: "Point",
			coordinates: [-115.5708, 51.1784], // Coordinates for Banff, Canada
		},
	},
	{
		title: "Art Deco Apartment in Miami",
		description:
			"Step into the glamour of the 1920s in this stylish Art Deco apartment in South Beach.",
		image: {
			filename: "listingimage",
			url: "https://plus.unsplash.com/premium_photo-1670963964797-942df1804579?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
		},
		price: 1600,
		location: "Miami",
		country: "United States",
		category: "Arctic", // Suitable category for an Art Deco apartment in a trendy city like Miami
		owner: "676b0b3ef924247dc903d869", // Replace with actual user ObjectId
		geometry: {
			type: "Point",
			coordinates: [-80.1918, 25.7617], // Coordinates for Miami, United States
		},
	},
	{
		title: "Tropical Villa in Phuket",
		description:
			"Escape to a tropical paradise in this luxurious villa with a private infinity pool in Phuket.",
		image: {
			filename: "listingimage",
			url: "https://images.unsplash.com/photo-1470165301023-58dab8118cc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
		},
		price: 3000,
		location: "Phuket",
		country: "Thailand",
		category: "Mountain", // Suitable category for a tropical villa with a private pool in Phuket
		owner: "676b0b3ef924247dc903d869", // Replace with actual user ObjectId
		geometry: {
			type: "Point",
			coordinates: [98.2964, 7.8804], // Coordinates for Phuket, Thailand
		},
	},
	{
		title: "Historic Castle in Scotland",
		description:
			"Live like royalty in this historic castle in the Scottish Highlands. Explore the rugged beauty of the area.",
		image: {
			filename: "listingimage",
			url: "https://images.unsplash.com/photo-1585543805890-6051f7829f98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJlYWNoJTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
		},
		price: 4000,
		location: "Scottish Highlands",
		country: "United Kingdom",
		category: "Castle", // Suitable category for a historic castle
		owner: "676b0b3ef924247dc903d869", // Replace with actual user ObjectId
		geometry: {
			type: "Point",
			coordinates: [-4.2026, 56.4907], // Coordinates for the Scottish Highlands
		},
	},
	{
		title: "Desert Oasis in Dubai",
		description:
			"Experience luxury in the middle of the desert in this opulent oasis in Dubai with a private pool.",
		image: {
			filename: "listingimage",
			url: "https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHViYWl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
		},
		price: 5000,
		location: "Dubai",
		country: "United Arab Emirates",
		category: "Trending", // Suitable category for an opulent desert oasis
		owner: "676b0b3ef924247dc903d869", // Replace with actual user ObjectId
		geometry: {
			type: "Point",
			coordinates: [55.2708, 25.2048], // Coordinates for Dubai, UAE
		},
	},
	{
		title: "Rustic Log Cabin in Montana",
		description:
			"Unplug and unwind in this cozy log cabin surrounded by the natural beauty of Montana.",
		image: {
			filename: "listingimage",
			url: "https://images.unsplash.com/photo-1586375300773-8384e3e4916f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
		},
		price: 1100,
		location: "Montana",
		country: "United States",
		category: "Mountain", // Suitable category for a rustic log cabin
		owner: "676b0b3ef924247dc903d869", // Replace with actual user ObjectId
		geometry: {
			type: "Point",
			coordinates: [-110.3626, 46.8797], // Coordinates for Montana, United States
		},
	},
	{
		title: "Beachfront Villa in Greece",
		description:
			"Enjoy the crystal-clear waters of the Mediterranean in this beautiful beachfront villa on a Greek island.",
		image: {
			filename: "listingimage",
			url: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dmlsbGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
		},
		price: 2500,
		location: "Mykonos",
		country: "Greece",
		category: "Pool", // A beachfront villa in Greece can fit well under Iconic City
		owner: "676b0b3ef924247dc903d869", // Replace with actual user ObjectId
		geometry: {
			type: "Point",
			coordinates: [25.3289, 37.4467], // Coordinates for Mykonos, Greece
		},
	},
	{
		title: "Eco-Friendly Treehouse Retreat",
		description:
			"Stay in an eco-friendly treehouse nestled in the forest. It's the perfect escape for nature lovers.",
		image: {
			filename: "listingimage",
			url: "https://images.unsplash.com/photo-1488462237308-ecaa28b729d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
		},
		price: 750,
		location: "Costa Rica",
		country: "Costa Rica",
		category: "Camping", // Eco-friendly treehouse in Costa Rica fits the "Nature Escape" category
		owner: "676b0b3ef924247dc903d869", // Replace with actual user ObjectId
		geometry: {
			type: "Point",
			coordinates: [-84.1137, 9.7489], // Coordinates for Costa Rica
		},
	},
	{
		title: "Historic Cottage in Charleston",
		description:
			"Experience the charm of historic Charleston in this beautifully restored cottage with a private garden.",
		image: {
			filename: "listingimage",
			url: "https://images.unsplash.com/photo-1587381420270-3e1a5b9e6904?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
		},
		price: 1600,
		location: "Charleston",
		country: "United States",
		category: "Farm", // This fits as a historic stay category
		owner: "676b0b3ef924247dc903d869", // Replace with actual user ObjectId
		geometry: {
			type: "Point",
			coordinates: [-79.9311, 32.7765], // Coordinates for Charleston, SC
		},
	},
	{
		title: "Modern Apartment in Tokyo",
		description:
			"Explore the vibrant city of Tokyo from this modern and centrally located apartment.",
		image: {
			filename: "listingimage",
			url: "https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRva3lvfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
		},
		price: 2000,
		location: "Tokyo",
		country: "Japan",
		category: "Meeting", // This fits as an urban stay category
		owner: "676b0b3ef924247dc903d869", // Replace with actual user ObjectId
		geometry: {
			type: "Point",
			coordinates: [139.6917, 35.6895], // Coordinates for Tokyo, Japan
		},
	},
	{
		title: "Lakefront Cabin in New Hampshire",
		description:
			"Spend your days by the lake in this cozy cabin in the scenic White Mountains of New Hampshire.",
		image: {
			filename: "listingimage",
			url: "https://images.unsplash.com/photo-1578645510447-e20b4311e3ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
		},
		price: 1200,
		location: "New Hampshire",
		country: "United States",
		category: "Camping", // Category based on its location by the lake and in the mountains
		owner: "676b0b3ef924247dc903d869", // Replace with actual user ObjectId
		geometry: {
			type: "Point",
			coordinates: [-71.303, 43.7935], // Coordinates for New Hampshire (near the White Mountains)
		},
	},
	{
		title: "Luxury Villa in the Maldives",
		description:
			"Indulge in luxury in this overwater villa in the Maldives with stunning views of the Indian Ocean.",
		image: {
			filename: "listingimage",
			url: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFrZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
		},
		price: 6000,
		location: "Maldives",
		country: "Maldives",
		category: "Spa", // Category based on its high-end location
		owner: "676b0b3ef924247dc903d869", // Replace with actual user ObjectId
		geometry: {
			type: "Point",
			coordinates: [73.5154, 3.2028], // Coordinates for the Maldives (near its islands)
		},
	},
	{
		title: "Ski Chalet in Aspen",
		description:
			"Hit the slopes in style with this luxurious ski chalet in the world-famous Aspen ski resort.",
		image: {
			filename: "listingimage",
			url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGxha2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
		},
		price: 4000,
		location: "Aspen",
		country: "United States",
		category: "Adventure", // Category for its location and use
		owner: "676b0b3ef924247dc903d869", // Replace with actual user ObjectId
		geometry: {
			type: "Point",
			coordinates: [-106.823, 39.1911], // Coordinates for Aspen, Colorado
		},
	},
	{
		title: "Secluded Beach House in Costa Rica",
		description:
			"Escape to a secluded beach house on the Pacific coast of Costa Rica. Surf, relax, and unwind.",
		image: {
			filename: "listingimage",
			url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
		},
		price: 1800,
		location: "Costa Rica",
		country: "Costa Rica",
		category: "Spa", // Category for its location and use
		owner: "676b0b3ef924247dc903d869", // Replace with actual user ObjectId
		geometry: {
			type: "Point",
			coordinates: [-84.8341, 9.9262], // Coordinates for a location in Costa Rica's Pacific coast region
		},
	},
];

module.exports = { data: sampleListings };

//updated data.js
//in terminal => cd init
// => node index.js
//update successful
