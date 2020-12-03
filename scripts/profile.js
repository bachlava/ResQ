firebase.auth().onAuthStateChanged(function(user) {
	if (user) {
		setProfilePic();
		/* User is signed in. */
		let docRef = db.collection("users").doc(user.uid);
		docRef.onSnapshot(function(doc) {
			if (doc.exists) {
				let displayName = doc.data().displayName;
				$("#profile-name").text(displayName);
				$("#updateprofile").click(function() {
					window.location.assign('updateprofile.html');
				});
			} else {
				console.log("User does not exist.");
			}
		});
	} else {
		/* User is signed out. */
		setProfilePic();
	}
});

/* Sets the user profile picture. */
function setProfilePic() {
    $("#profile-img-cropper img").attr("src", "https://dummyimage.com/300x300/999999/ffffff&text=Profile+Picture");
}

