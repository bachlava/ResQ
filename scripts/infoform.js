/* Retrieves the restaurant ID parameter from the URL search string. */
if (document.location.search.substring(1)) {
	const urlParams = new URLSearchParams(document.location.search.substring(1).toLowerCase());
	const restaurantID = urlParams.get('restaurantid');
	
	if (restaurantID != '') {
		$('#submit-btn').click((e) => {
			e.preventDefault();
			let today = new Date();
			let dd = today.getDate();
			let mm = today.getMonth() + 1; 
			mm = (mm < 10) ? '0' + mm : mm;
			let yyyy = today.getFullYear();
			let hour = today.getHours();
			let min = today.getMinutes();
			let sec = today.getSeconds();

			let logID = '' + yyyy + mm + dd + hour + min + sec + restaurantID;
			let formattedDateTime = yyyy + '-' + mm + '-' + dd + ' ' + hour + ':' + min + ':' + sec;

			let name = $('#full-name').val();
			let phoneNo = $('#phone').val().replaceAll('-', '');
			let emailAdd = $('#email').val();

			/* Writes a new Log to Firestore. */
			db.collection('logs').doc(logID).set({
				user: {
					fullName: name,
					phone: phoneNo,
					email: emailAdd
				},
				dateTime: formattedDateTime,
				restID: restaurantID,
				userID: db.doc('/users/anonymous')
			}).then(function () {
				console.log('New log added to firestore');
				window.location.assign('main.html');
			}).catch(function (error) {
				console.log('Error adding new log: ' + error);
			});							
		});
	} else {
		failRetrieval();
	}	
} else {
	failRetrieval();
}

/* Hides page elements when there is no restaurant specified. */
function failRetrieval() {
	$('form').hide();
	$('.form-container h3').html('No restaurant defined, please try again.');
}