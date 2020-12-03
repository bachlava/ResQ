/* Retrieves the restaurant ID parameter from the URL search string. */
if (document.location.search.substring(1)) {
	const urlParams = new URLSearchParams(document.location.search.substring(1).toLowerCase());
	const restaurantID = urlParams.get('restaurantid');
	if (restaurantID != "") {

		/* Reads the restaurant's info from Firestore. */
		let restaurant = db.collection("restaurants").doc(restaurantID);
		restaurant.onSnapshot(function(doc) {
			if (doc.exists) {
				$("#success-restaurant-name").text(doc.data().name);
			} else {
				console.log("No matching restaurant ID.");
				failRetrieval();
			}
		});
	} else {
		failRetrieval();
	}	
} else {
	failRetrieval();
}

/* Automatically redirects to the Main page after 5 seconds. */
$(document).ready(() => {
	setTimeout(() => {
		window.location.assign("main.html");
	}, 5000);
});

/*
	Hides page elements when there is no restaurant specified or 
	Firestore failed to return restaurant information.
*/
function failRetrieval() {
	$("#success-restaurant-name").text("N/A");	
}