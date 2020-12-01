$(document).ready(() => {
	if (document.location.search.substring(1)) {
		const urlParams = new URLSearchParams(document.location.search.substring(1));
		const restaurantID = urlParams.get('restaurantID');
		if (restaurantID != "") {

		} else {
			failRetrieval();
		}	
	} else {
		failRetrieval();
	}
	
	function failRetrieval() {
		$("form").hide();
		$(".form-container h3").html("No restaurant defined, please try again.");
	}



	$("#submit-btn").click(() => {
		db.collection("logs").doc().set({
			
		}).then(function () {
				console.log("New user added to firestore");
				window.location.assign("register.html");
		})
		.catch(function (error) {
				console.log("Error adding new user: " + error);
		});
	});
});