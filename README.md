# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Installation of CRACO

Create React App Configuration Override is an easy and comprehensible configuration layer for create-react-app.

Get all the benefits of create-react-app and customization without using 'eject' by adding a single configuration (e.g. craco.config.js) file at the root of your application and customize your eslint, babel, postcss configurations and many more.

All you have to do is create your app using create-react-app and customize the configuration file.

### Install the latest version of the package from npm:**

**$ npm i @craco/craco**

Alternatively, you can install the latest alpha build:

**$ npm i @craco/craco@alpha**

However, you should be aware that these versions are experimental.

### Create a craco.config.js file in the root directory and configure CRACO:

my-app
├── node_modules
├── craco.config.js
└── package.json

### Update the existing calls to react-scripts in the scripts section of your package.json file to use the craco CLI:

/* package.json */

"scripts": {
    "starto": "craco start",
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
}

## Available Scripts

Start your app for development:

**$ npm run starto**

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.


