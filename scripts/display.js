var navigation;
var user = firebase.auth().currentUser;

if (user) {
	// User is signed in.
	navigation = '<nav class="navbar navbar-expand-lg navbar-dark nav-bg">'
	+ '<a class="navbar-brand" href="index.html">ResQ</a>'
	+ '<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02">'
	+ '<span class="navbar-toggler-icon"></span></button>'
	+ '<div class="collapse navbar-collapse" id="navbarTogglerDemo02">'
	+ '<ul class="navbar-nav ml-auto">'
	+ '<li class="nav-item"><a class="nav-link" href="login.html">You signed in!</a></li>'
	+ '<li class="nav-item"><a class="nav-link" href="ResQMainPage.html">QR Scanner</a></li>'
	+ '<li class="nav-item"><a class="nav-link" href="#">Settings</a></li>'
	+ '</ul></div></nav>';
} else {
	// No user is signed in.
	navigation = '<nav class="navbar navbar-expand-lg navbar-dark nav-bg">'
	+ '<a class="navbar-brand" href="index.html">ResQ</a>'
	+ '<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02">'
	+ '<span class="navbar-toggler-icon"></span></button>'
	+ '<div class="collapse navbar-collapse" id="navbarTogglerDemo02">'
	+ '<ul class="navbar-nav ml-auto">'
	+ '<li class="nav-item"><a class="nav-link" href="main.html">QR Scanner</a></li>'
	+ '<li class="nav-item"><a class="nav-link" href="login.html">Login/Signup</a></li>'
	+ '<li class="nav-item"><a class="nav-link" href="#">Settings</a></li>'
	+ '</ul></div></nav>';
}

$(document.body).prepend(navigation);