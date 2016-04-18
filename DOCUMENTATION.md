# Official Canteen App Documentation

If you want the nitty gritty about the Canteen App, you've come to the right place. We'll cover the ins and outs of the code and how it's all put together.

## Table of Contents
1. [Setup](#setup)
1. [Testing](#testing)
1. [Front-End](#front-end)
1. [Back-End](#back-end)
1. [Deployment](#deployment)


## Setup

We use Grunt for a variety of tasks such as:

* linting
* concating
* minification
* running tests
* starting the application locally

After installing Grunt, launch the app locally by running

```
grunt start-dev
```

The Grunt config code is stored in the [Gruntfile.js](Gruntfile.js) file. There is very little customization in this file and most of it can be understood using the official [Grunt](http://gruntjs.com) documentation and [this guide](https://scotch.io/tutorials/a-simple-guide-to-getting-started-with-grunt).

## Testing

Testing is achieved using Supertest, Chai, and Mocha. The tests check the server routes and trips controller methods.

To run the tests locally use the command:

```
grunt test
```


## Front-End

The client facing front-end files can be found under the `public/client` folder.

The app is split into 3 main pages:

- `landingPage.html`  This is the page a user sees after navigating to the Canteen URL. It allows users to login
- `tripForm.html`  Displays the trip form to allow users to create a trip
- `tripView.html`  Displays trips that are already created. Allows users to create and view tasks.

The navbar has it's own controller and html view.

Factories for these controllers are found in the `services` folder.

The `canteen.js` contains the ui routes.

Styling is achieved using Bootstrap and the `style.css` file.


## Back-End


## Deployment

Once a pull request has been merged, [Heroku](http://canteenapp.herokuapp.com) will be automatically updated and the server restarted. Changes should take affect within one minute. This makes continuous deployment a breeze, but be careful what you merge to the master branch since Heroku will immediately merge those changes into the live server that deploys the app online.
