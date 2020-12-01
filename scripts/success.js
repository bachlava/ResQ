/* Automatically redirects to the Main page after 5 seconds. */
$(document).ready(() => {
	setTimeout(() => {
		window.location.assign("main.html");
	}, 5000);
});