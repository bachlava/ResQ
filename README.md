## ResQ Web Application

* [Authors](#authors)
* [General info](#general-info)
* [Technologies](#technologies)
* [Contents](#content)

## Authors
* Bach Le
* Dan Yoo
* Garsha Iravani

## General Info
This is a web application using QR scanner to let users quickly check-in at restaurants for contact tracing.

## Technologies
Technologies used for this project:
* HTML, CSS, Sass
* JavaScript, JQuery
* Bootstrap
* Firebase (Auth, Firestore, Hosting)
* HTML5 QR Scanner API

## Content
Content of the project folder:

```
 Top level of project folder: 
├── .gitignore               # Git ignore file
├── index.html               # Landing page
├── login.html               # Login page
├── register.html            # Registration step 2 page
├── main.html                # Main page after logging in (launches QR Scanner)
├── scan.html                # QR scanner page
├── infoform.html            # Contact Tracing form for not logged in users
├── confirm.html             # Restaurant confirmation page
├── success.html             # Confirmation success message page
├── profile.html             # User profile page
├── updateprofile.html       # User profile settings page
├── 404.html                 # Default "Not found" page
└── README.md

It has the following subfolders and files:
├── .firebase                # Folder for git Firebase Hosting
├── .git                     # Folder for git repo
├── images                   # Folder for images
  /daeji.jpg                   # Restaurant image
  /nadri.jpg                   # Restaurant image
├── qr                       # Folder for QR code images
  /daeji.jpg                   # Restaurant QR code image
  /nadri.jpg                   # Restaurant QR code image	
├── scripts                  # Folder for scripts
  /confirm.js                  # JavaScript for confirmation page
  /display.js                  # JavaScript for navigation bar
	/infoform.js                 # JavaScript for Contact Tracing form
	/login.js                    # Firebase Auth login
	/profile.js                  # Javascript for user profile page
	/updateprofile.js            # Javascript for updating user profile
	/register.js                 # Javascript for user registration
	/scan.js                     # Javascript for displaying QR scanner
	/firebase_api.js             # Firebase API access configuration
	/html5-qrcode.min.js         # HTML5 QR Scanner API
├── styles                   # Folder for styles
  /style.css                   # CSS stylesheet
	/bluepurple.css              # Main colour scheme
	/blackblue.css               # Dark mode colour scheme
	/greenbrownred.css           # Secondary colour scheme
	/rippleanimation.css         # Ripple animation on Main page
	/rippleanimation.css.map     # Mapping Sass to CSS for ripple animation
	/rippleanimation.scss        # Sass for ripple animation

Firebase hosting files: 
├── .firebaserc
├── firebase.json
├── firebase.indexes.json
└── firebase.rules

```

Tips for file naming files and folders:
* use lowercase with no spaces
* use dashes (not underscore) for word separation
