var request = require('supertest');
var express = require('express');
var expect = require('chai').expect;
var app = require('../../server.js');

var db = require('../../server/db/config');
var Trip = require('../../server/trips/tripsController');

describe('Trip Routes', function () {

  describe('Invalid Routes', function () {
    // test that proper error code is recieved for invalid url
    it('Should return error', function (done) {
      request(app)
        .get('/abc')
        .expect(404)
        .end(done);
    });
  });

  describe('New trip should create a database entry', function (done) {

  });

  // test createTrip
  // expect a POST request with invalid ID api/trips/:id to return a error
  // expect a POST request with valid trip ID to return status code 200


  // test getAll trips
  // expect a GET request to api/trips to return all trips
  // first create a trip or two

  // test updateTrip
  // expect a POST request with invalid ID api/trips/:id to return a error
  // expect a POST request with valid trip ID to return status code 200
  // and we expect the object

  // test getTrip
  // expect a GET request with invalid ID api/trips/:id to return a error
  // with valid ID, expect trip to be returned
});
