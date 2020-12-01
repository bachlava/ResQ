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

	var fullNameInfo = document.getElementById("inputPassword3").value;
	var restaurantDigits = document.getElementById("inputRestaurant3").value;
	var phoneInfo = document.getElementById("inputEmail3").value;
	var user = firebase.auth().currentUser;
	var uid = user.uid; 
	$('#submitID').click(function () {
		db.collection("users").doc(uid).set({
				displayName: fullNameInfo,
				ownRestaurantID: restaurantDigits,
				phone: phoneInfo
			})
			.then(function () {
				console.log("Document successfully written!");
			})
			.catch(function (error) {
				console.error("Error writing document: ", error);
			});
	})
});
