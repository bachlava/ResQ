if (document.location.search.substring(1)) {
	const urlParams = new URLSearchParams(document.location.search.substring(1));
	const restaurantID = urlParams.get('restaurantID');
	if (restaurantID != "") {
		let restaurant = db.collection("restaurants").doc(restaurantID);
		restaurant.get().then(function(doc) {
			if (doc.exists) {
				$("#restaurant-name").html(doc.data().name);
				$("#restaurant-img-cropper img").attr("src", doc.data().img);
			} else {
				console.log("No matching restaurant ID.");
				alert("No matching restaurant ID.");
			}
		}).catch(function(error) {
			console.log("Error getting restaurant document:", error);
		});
	} else {
		failRetrieval()
	}	
} else {
	failRetrieval()
}

function failRetrieval() {
	$("#restaurant-name").hide();
	$("#yes-no").hide();
	$("#confirm-prompt h3").html("No restaurant defined, please try again.");
	$("#restaurant-img-cropper img").attr("src", "https://dummyimage.com/300x300/999999/ffffff&text=Not+Found");
}