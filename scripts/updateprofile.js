$(document).ready(function () {

    var user = firebase.auth().currentUser;

    $('button[type="submit"]').click(function () {
        var newName = document.getElementById('updatedUserName').value;
        user.updateProfile({
            displayName: newName
        })
            .then(function () {
                console.log("Profile Updated Successfully!");
                console.log(newName);
            })
            .catch(function (error) {
                console.error("Error writing document: ", error);
            });
        db.collection("users").doc(user.uid).set({
            displayName: newName

        }); 
    })
});