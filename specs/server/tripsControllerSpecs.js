var expect = require('chai').expect;

var Trips = require('../../server/trips/tripsController');


describe('Trips', function () {
  describe('createTrip()', function () {
    it('should be a function', function () {
      expect(Trips.createTrip).to.exist;
      expect(Trips.createTrip).to.be.a('function');
    });
  });

  describe('updateTrip()', function () {
    it('should be a function', function () {
      expect(Trips.updateTrip).to.exist;
      expect(Trips.updateTrip).to.be.a('function');
    });
  });

  describe('getTrip()', function () {
    it('should be a function', function () {
      expect(Trips.getTrip).to.exist;
      expect(Trips.getTrip).to.be.a('function');
    });
  });

  describe('addTask()', function () {
    it('shoud be a function', function () {
      expect(Trips.addTask).to.exist;
      expect(Trips.addTask).to.be.a('function');
    });
  });

  describe('updateTrip()', function () {
    it('should be a function', function () {
      expect(Trips.updateTrip).to.exist;
      expect(Trips.updateTrip).to.be.a('function');
    });
  });

  describe('searchTripsForUser()', function () {
    it('should be a function', function () {
      expect(Trips.searchTripsForUser).to.exist;
      expect(Trips.searchTripsForUser).to.be.a('function');
    });
  });
});
