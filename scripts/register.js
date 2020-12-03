$(document).ready(function () {
	$('input[type="checkbox"]').prop('checked', false);

	$('input[type="checkbox"]').click(function () {
		if ($(this).is(":checked")) {
			$('#inputRestaurant2').show();
			$('#inputRestaurant3').show();
		} else if ($(this).is(":not(:checked)")) {
			$('#inputRestaurant3').val("");
			$('#inputRestaurant3').hide();
			$('#inputRestaurant2').hide();
		}
	});

	firebase.auth().onAuthStateChanged(function(user) {
		if (user) {
			/* User is signed in. */
			let docRef = db.collection("users").doc(user.uid);

			docRef.onSnapshot(function(doc) {
				if (doc.exists) {
					let uid = user.uid; 

					$('#submitID').click(function (e) {
						e.preventDefault();
						let fullNameInfo = document.getElementById("inputPassword3").value;
						let restaurantDigits = document.getElementById("inputRestaurant3").value;
						let phoneInfo = document.getElementById("inputEmail3").value;

						/* Updates a user in Firestore. */
						return docRef.update({
							fullName: fullNameInfo,
							ownRestaurantID: restaurantDigits,
							phone: phoneInfo
						}).then(function () {
							console.log("User successfully updated.");
							window.location.assign("main.html");
						}).catch(function (error) {
							console.error("Error updating user: ", error);
						});
					});
				} else {
					console.log("User does not exist.");
					failRetrieval();
				}
			});
		} else {
			/* User is signed out. */
			failRetrieval();
		}
	});
});

/*
	Hides page elements when there is no logged in user or 
	Firestore failed to retrieve logged in user.
*/
function failRetrieval() {
	$('form').hide();
	$('.form-container h3').html('No user currently logged in, please log in and try again.');
}