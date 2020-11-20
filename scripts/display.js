let navStart = '<nav class="navbar navbar-expand-lg navbar-dark nav-bg">'
	+ '<a class="navbar-brand" href="index.html">ResQ</a>'
	+ '<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02">'
	+ '<span class="navbar-toggler-icon"></span></button>'
	+ '<div class="collapse navbar-collapse" id="navbarTogglerDemo02">'
	+ '<ul class="navbar-nav ml-auto">';

let navEnd = '</ul></div></nav>';

let noLoginNav = navStart
	+ '<li class="nav-item"><a class="nav-link" href="login.html"><img id="image-login" src="https://cdn4.iconfinder.com/data/icons/barcode-linear-outline/300/184532475Untitled-3-512.png" alt="scanner image"></span></a></li>'
	+ '<li class="nav-item"><a class="nav-link" href="main.html"><span><img id="image-scan" src="https://static.thenounproject.com/png/736543-200.png" alt="scanner image"></span></a></li>'
	+ navEnd;
	

firebase.auth().onAuthStateChanged(function(user) {
	if (user) {
		// User is signed in.
		let docRef = db.collection("users").doc(user.uid);
		docRef.onSnapshot(function(doc) {
			if (doc.exists) {
				let displayName = doc.data().displayName;

				let loginNav = navStart
					+ '<li class="nav-item"><a class="nav-link" href="#.html">Signed in as ' + displayName + '</a></li>'
					+ '<li class="nav-item"><a class="nav-link" href="main.html">QR Scanner</a></li>'
					+ '<li class="nav-item"><a class="nav-link" href="#" id="logout">Logout</a></li>'
					+ navEnd;

				$("nav").remove();
				$(document.body).prepend(loginNav);
				
				$("#logout").click(function() {
					firebase.auth().signOut().then(function() {
						// Sign-out successful.
						console.log("Logout successful.");
					}).catch(function(error) {
						// An error happened.
						console.log(error);
					});
				});
			} else {
				console.log("Document does not exist.");
			}
		});
	} else {
		// User is signed out.
		$("nav").remove();
		$(document.body).prepend(noLoginNav);
	}
});
