'use strict';

function Airport(){
  this._groundedPlanes = [];
}

Airport.prototype.planes = function () {
  return this._groundedPlanes;
};

Airport.prototype.clearForLanding = function (plane) {
  if(this.weatherIsStormy()) {
    throw new Error('Unable to land: bad weather');
  }
  this._groundedPlanes.push(plane);
};

Airport.prototype.clearForTakeoff = function (plane) {
  if(this.weatherIsStormy()) {
    throw new Error('Unable to takeoff: bad weather')
  }
  this._groundedPlanes.pop(plane);
  return 'Plane has taken off';
};

Airport.prototype.weatherIsStormy = function () {
  return false;
};
