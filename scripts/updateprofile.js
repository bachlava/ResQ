/*
	Still missing logic for processing the profile update form (not MVP).
 */
$(document).ready(function () {
	var user = firebase.auth().currentUser;

	$('button[type="submit"]').click(function () {
		var newName = document.getElementById('updatedUserName').value;
		
		user.updateProfile({
			displayName: newName
		}).then(function () {
			console.log("Profile Updated Successfully!");
			console.log(newName);
		}).catch(function (error) {
			console.error("Error writing document: ", error);
		});
		
		/* Updates the users name in Firestore. */
		db.collection("users").doc(user.uid).set({
			displayName: newName
		}); 
	});
});