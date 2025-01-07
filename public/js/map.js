mapboxgl.accessToken = mapToken;

const map = new mapboxgl.Map({
	container: "map",
	style: "mapbox://styles/mapbox/satellite-streets-v11",
	center: [-122.4194, 37.7749], // Replace with known coordinates
	zoom: 15,
});

map.on("load", () => {
	map.loadImage(
		"https://cdn-icons-png.flaticon.com/512/1946/1946429.png",
		(error, image) => {
			if (error) throw error;

			map.addImage("cat", image);

			map.addSource("point", {
				type: "geojson",
				data: {
					type: "FeatureCollection",
					features: [
						{
							type: "Feature",
							geometry: {
								type: "Point",
								coordinates: [-122.4194, 37.7749], // Replace with known coordinates
							},
						},
					],
				},
			});

			map.addLayer({
				id: "points",
				type: "symbol",
				source: "point",
				layout: {
					"icon-image": "cat",
					"icon-size": 0.25,
				},
			});
		}
	);
});
