## ResQ Web Application

* [Authors](#authors)
* [General info](#general-info)
* [Technologies](#technologies)
* [Contents](#content)

## Authors
* The Bach Le
* Dan Yoo
* Garsha Iravani

## General Info
This is a web application using QR scanner to let users quickly check-in at restaurants for contact tracing.
	
## Technologies
Technologies used for this project:
* HTML, CSS
* JavaScript
* Bootstrap
* Firebase (Auth, Firestore, Hosting)
	
## Content
Content of the project folder:

```
 Top level of project folder: 
├── .gitignore               # Git ignore file
├── index.html               # Landing page
├── login.html               # Login page
├── ResQMainPage.html        # Main page after logging in, QR launcher
├── confirm.html             # Restaurant confirmation page
├── 404.html                 # Default "Not found" page
└── README.md

It has the following subfolders and files:
├── .git                     # Folder for git repo
├── images                   # Folder for images
  ├──  /daeji.jpg               # Restaurant image
	└──  /nadri.jpg               # Restaurant image
├── scripts                  # Folder for scripts
  └──  /confirm.js              # JavaScript for confirmation page
	└──  /display.js              # JavaScript for navigation bar
	└──  /firebase_api.js         # Firebase API access configuration
	└──  /login.js                # Firebase auth login
├── styles                   # Folder for styles
  └──  /style.css               # CSS stylesheet

Firebase hosting files: 
├── .firebaserc
├── firebase.json
├── firebase.indexes.json
└── firebase.rules

```

Tips for file naming files and folders:
* use lowercase with no spaces
* use dashes (not underscore) for word separation

