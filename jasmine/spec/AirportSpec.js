'use strict';

describe('Airport', function() {

  var airport;
  var plane;

  beforeEach(function() {
    airport = new Airport();
    plane = jasmine.createSpy('plane',['land', 'takeoff']);
  });

  describe('Initialization', function() {

    it('has no planes to begin with', function() {
      expect(airport.planes()).toEqual([]);
    });

  });

  describe('Landing', function() {

    it('can clear planes for landing', function() {
      airport.clearForLanding(plane);
      expect(airport.planes()).toEqual([plane]);
    });

  });

  describe('Takeoff', function() {

    it('instructs a plane to take off', function() {
      airport.clearForTakeoff(plane);
      expect(airport.planes()).not.toEqual([plane]);
    });

    it('confirms a plane has taken off with a message', function() {
      expect(airport.clearForTakeoff(plane)).toContain('Plane has taken off');
    });

  });

  describe('Weather is stormy', function() {

    it('prevents landing if weather is stormy', function() {
      spyOn(airport, 'weatherIsStormy').and.returnValue(true);
      expect(function(){ airport.clearForLanding(plane); }).toThrowError("Unable to land: bad weather")
    });

    it('prevents takeoff if weather is stormy', function() {
      spyOn(airport, 'weatherIsStormy').and.returnValue(true);
      expect(function(){ airport.clearForTakeoff(plane); }).toThrowError("Unable to takeoff: bad weather")
    });

  });

});
