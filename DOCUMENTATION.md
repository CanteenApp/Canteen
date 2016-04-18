# Official Canteen App Documentation

If you want the nitty gritty about the Canteen App, you've come to the right place. We'll cover the ins and outs of the code and how it's all put together.

## Table of Contents
1. [Setup](#setup)
1. [Testing](#testing)
1. [Front-End](#front-end)
1. [Back-End](#back-end)
	1. [Database](#database)
	1. [Middleware](#middleware)
	1. [Authentication](#authentication)
	1. [Server Routes](#server routes)
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


### Database

MongoDB is used as the database for this app. The Mongoose ODM is also used periodically to interface with Mongo.

The configuration can be found in the `server/db/config.js` file.

Two schemas are used: `Trip` and `User`. Both are found in their respective folders.

#### - Important Note -

The Trip schema contains the entire task object. Tasks do **NOT** have their own schema, rather Tasks are a nested array of objects on the Trip object. Tasks do, however, have their own folders for the form and view on the client side.

The trip and user Controllers are used to interact/query the database.

### Authentication

Authentication is achieved using OAuth. The configuration files are stored in a hidden folder `/server/.config` that is ignored by github. You will want to **make sure this folder contains the first . (dot), otherwise the API keys will be exposed!**

The folder contains three files: (Jak, please fill out this section)


### Middleware

[Grant](https://github.com/simov/grant) is middleware module for Express that allows us to easily integrate OAuth into the app. For more information, [this article](https://scotch.io/tutorials/implement-oauth-into-your-express-koa-or-hapi-applications-using-grant)  can be of use.

### Server Routes

The `routes.js` file contains all the methods for routing traffic to/from the server.

## Deployment

Once a pull request has been merged, [Heroku](http://canteenapp.herokuapp.com) will be automatically updated and the server restarted. Changes should take affect within one minute. This makes continuous deployment a breeze, but be careful what you merge to the master branch since Heroku will immediately merge those changes into the live server that deploys the app online.
