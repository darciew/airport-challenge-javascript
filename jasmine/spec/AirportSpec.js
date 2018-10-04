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

});
