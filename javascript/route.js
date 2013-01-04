function Route(map, directionsService, source, target) {
	this.map = map;
	this.directionsService = directionsService;
	this.source = source; 
	this.target = target;
	this.wayPoints = [];
}

Route.prototype.add = function(address) {
	var wayPoint = buildWayPoint(address);
	var request = buildRequest(this.source, this.target, wayPoint);
	var directionsDisplay = new google.maps.DirectionsRenderer();
  directionsDisplay.setMap(this.map);
  this.directionsService.route(request, function(result, status) {
		if (status == google.maps.DirectionsStatus.OK) {
		  directionsDisplay.setDirections(result);
		}
  });
}

function buildWayPoint(address) {
	var wayPoint = [];
	wayPoint.push({
	  location: address,
	  stopover: true
	});
	return wayPoint;
}

function buildRequest(start, end, wayPoints) {
	var request = {
		origin: start,
		destination: end,
		waypoints: wayPoints,
		optimizeWaypoints: true,
		travelMode: google.maps.TravelMode.DRIVING
  };
  return request;
}
