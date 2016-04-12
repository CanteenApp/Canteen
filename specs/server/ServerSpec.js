var request = require('supertest');
var express = require('express');
var expect = require('chai').expect;
var chai = require('chai');
var app = require('../../server');
var mongoose = require('mongoose');

var db = require('../../server/db/config');
var Trips = require('../../server/trips/tripsController');
var Trip = require('../../server/trips/tripModel');
var clearDB = function (done) {
  mongoose.connection.collections.trips.remove(done);
};

describe('Invalid Routes', function () {
  // test that proper error code is recieved for invalid url
  it('Should return error', function (done) {
    request(app)
    .get('/abc')
    .expect(404)
    .end(done);
  });
});

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

  var newTrip = {
    tripName: 'Testing',
    members: ['testUser'],
    location: 'San Francisco',
    date: {
      start: new Date(),
      end: new Date(),
    },
  };

  describe('/api/trips', function () {
    // test getAll trips
    describe('GET', function () {
      // expect a GET request to api/trips to return all trips
      it('responds with a 200 (OK)', function (done) {
        request(app)
          .get('/api/trips')
          .expect(200, done);
      });

      before(function (done) {
        request(app)
        .post('/api/trips')
        .send(newTrip)
        .end(function (err, res) {
          tripId = res.body._id;
          done();
        });
      });

      // test getTrip
      it('responds with trip for given ID', function (done) {
        // expect a GET request with valid ID, expect trip to be returned
        request(app)
        .get('/api/trips/' + tripId)
        .expect(200)
        .end(function (err, res) {
          expect(res.body.tripName).to.equal('Testing');
          done();
        });
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

      it('Sould respond with 201 (CREATED) and return the tripname', function (done) {
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

    // test updateTrip
    describe('PUT', function () {
      var tripId;

      // TODO: Clear DB before running specs
      // beforeEach(function (done) {
      //   clearDB(function () {});
      //   done();
      // });

      // expect a PUT request with invalid ID api/trips/:id to return a error

      before(function (done) {
        request(app)
        .post('/api/trips')
        .send(newTrip)
        .end(function (err, res) {
          tripId = res.body._id;
          done();
        });
      });

      // expect a PUT request with valid trip ID to return status code 200 and the updated object
      it('Responds with 200 (OK)', function (done) {

        var tripUpdate = {
          tripName: 'Updated',
        };

        request(app)
        .put('/api/trips/' + tripId)
        .send(tripUpdate)
        .expect(200)
        .end(function (err, res) {
          expect(res.body.tripName).to.equal('Updated');
          done();
        });
      });

      it('Responds with 400 (BAD REQUEST)', function (done) {
        var tripUpdate = {
          tripName: 'Updated',
        };

        request(app)
        .put('/api/trips/5')
        .send(tripUpdate)
        .expect(400, done);
      });
    });
  });
});
