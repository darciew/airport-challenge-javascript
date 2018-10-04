'use strict';

describe('Feature Test:', function(){
  var plane;
  var airport;

  beforeEach(function(){
    plane = new Plane();
    airport = new Airport();
  });

  it('planes can be instructed to land at an airport', function(){
    plane.land(airport);
    expect(airport.planes()).toContain(plane);
  });

  it('planes can be instructed to takeoff at an airport', function(){
    plane.land(airport);
    plane.takeoff(airport);
    expect(airport.planes()).not.toContain(plane);
  });

  it('prevents landing if weather is stormy', function() {
    spyOn(airport, 'weatherIsStormy').and.returnValue(true);
    expect(function(){ plane.land(airport); }).toThrowError("Unable to land: bad weather")
    expect(airport.planes()).not.toContain(plane);
  });

  it('prevents takeoff if weather is stormy', function() {
    plane.land(airport);
    spyOn(airport, 'weatherIsStormy').and.returnValue(true);
    expect(function(){ plane.takeoff(airport); }).toThrowError("Unable to takeoff: bad weather")
    expect(airport.planes()).toContain(plane);
  });

});
