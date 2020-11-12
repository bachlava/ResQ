var scanner = new Instascan.Scanner({ video: document.getElementById('preview') });

scanner.addListener('scan', function (content) {
	console.log(content);
	window.location.href = content;
});

Instascan.Camera.getCameras().then(function (cameras) {
	if (cameras.length > 0) {
		let backCam = false;
		if (cameras.length > 1 && cameras[1] != "") {
			scanner.start(cameras[1]);
			backCam = true;
		} else {
			scanner.start(cameras[0]);
			backCam = false;
		}
		
		$('[name="switch"]').click(function() {
			if (backCam == true) {
				if (cameras[0] != ""){
					scanner.start(cameras[0]);
					backCam = false;
				} else {
					alert('No Front camera found!');
				}
			} else if (backCam == false) {
				if (cameras[1] != ""){
					scanner.start(cameras[1]);
					backCam = true;
				}else{
					alert('No Back camera found!');
				}
			}
		});
	} else {
		console.error('No cameras found.');
		alert('No cameras found.');
		window.location.href = window.location.href.substr(0, window.location.href.indexOf("/")) + "resqmainpage.html";
	}
}).catch(function (e) {
	console.error(e);
	alert('Camera failed to launch.');
	window.location.href = window.location.href.substr(0, window.location.href.indexOf("/")) + "resqmainpage.html";
});