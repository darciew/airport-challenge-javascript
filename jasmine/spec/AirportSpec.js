'use strict';

describe('Airport', function() {

  var airport;
  var plane;

  beforeEach(function() {
    airport = new Airport();
    plane = jasmine.createSpy('plane',['land']);
  });

  it('has no planes to begin with', function() {
    expect(airport.planes()).toEqual([]);
  });

  it('can clear planes for landing', function() {
    airport.clearForLanding(plane);
    expect(airport.planes()).toEqual([plane]);
  });

  it('instructs a plane to take off', function() {
    airport.clearForTakeoff(plane);
    expect(airport.planes()).not.toEqual([plane]);
  });

});
