[![Build Status](https://travis-ci.org/LuffyKing/BuzzFeedChallenge.svg?branch=develop)](https://travis-ci.org/LuffyKing/BuzzFeedChallenge)
[![Coverage Status](https://coveralls.io/repos/github/LuffyKing/BuzzFeedChallenge/badge.svg?branch=develop)](https://coveralls.io/github/LuffyKing/BuzzFeedChallenge?branch=develop)
# Table Of Contents
  - [BuzzFeed-Challenge-App](#BuzzFeedChallenge)
  - [Prerequisites](#prerequisites)
  - [Dependencies](#dependencies)
  - [Development Dependencies](#development-dependencies)
  - [Installing](#installing)
  - [Running the tests](#running-the-tests)
  - [APIs](#apis)
  - [Deployment](#deployment)
  - [Built With](#built-with)
  - [Authors](#authors)
  - [License](#license)

## BuzzFeedChallenge
This exciting new project aims to create a new web API called BuzzFeedChallenge. BuzzFeedChallenge API provides an api for users to easily browse and explore
 BuzzFeed's interesting articles to keep them abreast of what is going on in the world.

## Prerequisites
```
node v10.2.1
npm 6.8.0
PostgreSQL 10.5
```

## Dependencies
```
body-parser - NodeJS library for parsing the  body of incoming http requests.

express - NodeJS web application framework for organizing the application into MVC architecture. It manages routing, handles requests and responses,and can render UI pages to respond to requests.

pg - Asynchronous Postgresql client for NodeJS, this allows the project to interface with Postgresql database.

validator - NodeJs library used to validate and sanitize strings. It was used in this project to check for valid emails and uuids.
```

## Development Dependencies
```
babel-cli - Command line interface for running babel

babel-polyfill- NodeJS library that emulates a full ES2015+ environment, this allows for the support of bultin-ins
like Promises and WeakMap, static methods like Array.from or Object.assign, instance methods like Array.prototype.includes.
The polyfill adds to the global scope as well as native prototypes like String in order to do this.

chai - NodeJS is a BDD / TDD assertion library

dotenv -  A zero-dependency module that loads environment variables from a .env file into process.env

eslint - ESLint is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code.

mocha  - Mocha is a feature-rich JavaScript test framework running on Node.js and in the browser, making asynchronous testing simple and fun.

nyc - Istanbul's state of the art command line interface
```

## Installing
```
mkdir BuzzFeedChallenge
cd BuzzFeedChallenge
git init
git clone https://github.com/LuffyKing/BuzzFeedChallenge.git
cd BuzzFeedChallenge
npm install
npm setupDB
npm start
```
## Running the tests

```
npm run test
```
## APIs

APIs are hosted at [BuzzFeedChallenge APIs](https://buzzfeedchallenge.herokuapp.com/api/v1)

API docs live at [BuzzFeedChallenge Docs](https://buzzfeedchallenge.herokuapp.com/api/v1/api-docs)

## Deployment

Deplying to [heroku](https://devcenter.heroku.com/articles/getting-started-with-nodejs#deploy-the-app)

## Built With

* [Postgresql](https://www.postgresql.org/) - The database used
* [node](https://nodejs.org/en/) - a JavaScript runtime built on Chrome's V8 JavaScricpt
* [express](https://expressjs.com/) - Fast, unopinionated, minimalist web framework for Node.js

## Authors

[Oyindamola Aderinwale](https://github.com/LuffyKing)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
