function onScanSuccess(qrMessage) {
	// handle the scanned code as you like
	console.log(`QR matched = ${qrMessage}`);
	window.location.href = qrMessage;
}

function onScanFailure(error) {
	// handle scan failure, usually better to ignore and keep scanning
	console.warn(`QR error = ${error}`);
	console.log("pls work");
}

let html5QrcodeScanner = new Html5QrcodeScanner(
	"reader", { fps: 10, qrbox: 250 }, /* verbose= */ true);
html5QrcodeScanner.render(onScanSuccess, onScanFailure);

// var scanner = new Instascan.Scanner({ video: document.getElementById('preview') });

// scanner.addListener('scan', function (content) {
// 	console.log(content);
// 	window.location.href = content;
// });

// Instascan.Camera.getCameras().then(function (cameras) {
// 	if (cameras.length > 0) {
// 		alert(cameras);
// 		var backCam;
// 		if (cameras.length > 1 && cameras[1] != "") {
// 			scanner.start(cameras[1]);
// 			backCam = 1;
// 		} else {
// 			scanner.start(cameras[0]);
// 			backCam = 0;
// 		}
		
// 		$('[name="switch"]').click(function() {
// 			if (backCam == 1) {
// 				if (cameras[0] != ""){
// 					scanner.stop().then(function() {
// 						scanner.start(cameras[0]);
// 					});
// 					backCam = 0;
// 				} else {
// 					alert('No Front camera found!');
// 				}
// 			} else if (backCam == 0) {
// 				if (cameras[1] != ""){
// 					scanner.stop().then(function() {
// 						scanner.start(cameras[1]);
// 					});
// 					backCam = 1;
// 				}else{
// 					alert('No Back camera found!');
// 				}
// 			}
// 		});
// 	} else {
// 		console.error('No cameras found.');
// 		alert('No cameras found.');
// 		window.location.href = window.location.href.substr(0, window.location.href.indexOf("/")) + "resqmainpage.html";
// 	}
// }).catch(function (e) {
// 	console.error(e);
// 	alert('Camera failed to launch.');
// 	window.location.href = window.location.href.substr(0, window.location.href.indexOf("/")) + "resqmainpage.html";
// });