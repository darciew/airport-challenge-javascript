'use strict';

function Airport(){
  this._groundedPlanes = [];
}

Airport.prototype.planes = function () {
  return this._groundedPlanes;
};

Airport.prototype.clearForLanding = function (plane) {
  this._groundedPlanes.push(plane);
};

Airport.prototype.clearForTakeoff = function (plane) {
  this._groundedPlanes.pop(plane);
};
