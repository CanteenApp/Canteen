var request = require('supertest');
var express = require('express');
var expect = require('chai').expect;
var chai = require('chai');
var app = require('../../server');
var mongoose = require('mongoose');

var db = require('../../server/db/config');
var Trips = require('../../server/trips/tripsController');
var Trip = require('../../server/trips/tripModel');

describe('Invalid Routes', function () {
  // test that proper error code is recieved for invalid url
  it('Should return error', function (done) {
    request(app)
    .get('/abc')
    .expect(404)
    .end(done);
  });
});

// chai.use(require('chai-things'));

var testTrips =
  {
    tripName: 'Testing1',
    members: [],
    location: 'San Francisco',
    date: {},
    lists: [],
  };

describe('API Routes', function () {
  beforeEach(function () {
    Trip.create(testTrips);
  });

  describe('/api/trips', function () {

    describe('GET', function () {
      it('responds with a 200 (OK)', function (done) {
        request(app)
          .get('/api/trips')
          .expect(200, done);
      });
    });

    // test createTrip
    describe('POST', function () {
      // expect a POST request with valid trip ID to return status code 200
      var newTrip = {
        tripName: 'Testing',
        members: ['testUser'],
        location: 'San Francisco',
        date: {
          start: new Date(),
          end: new Date(),
        },
      };

      var stringTrip = JSON.stringify(newTrip);
      console.log('specs', stringTrip);

      it('Responds with 201 (CREATED)', function (done) {
        request(app)
        .post('/api/trips')
        .send(newTrip)
        .expect(201)
        .end(function (err, res) {
          expect(res.body.tripName).to.equal('Testing');
          done();
        });
      });
    });
  });

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
