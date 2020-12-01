/* 
	Periodically executes a given function when the DOM is ready. 
	Param: fn - the function to run when the DOM is ready.
*/
function docReady(fn) {
	/* See if DOM is already available. */
	if (document.readyState === "complete" || document.readyState === "interactive") {
			/* Call on next available tick. */
			setTimeout(fn, 1);
	} else {
			document.addEventListener("DOMContentLoaded", fn);
	}
}

docReady(function() {
	var lastMessage;
	function onScanSuccess(qrCodeMessage) {
		if (lastMessage !== qrCodeMessage) {
			lastMessage = qrCodeMessage;
			window.location.replace(qrCodeMessage);
		}
	}
	var html5QrcodeScanner = new Html5QrcodeScanner(
		"reader", { fps: 10, qrbox: 250 }, /* verbose= */ true);
	html5QrcodeScanner.render(onScanSuccess);
});