describe("As a user", function(){
	var service;

	beforeEach(function() {
		service = new Service();
	});

	describe("When i inform two points", function() {
		var lines = service.findBus(origin, destination);
		
		it("should return the bus lines options", function(){
			//test lines
		});
	});

	describe("When i select one line", function() {
		var route = service.findRoute(busLine);
		it ("should return the correct route", function() {
			//assert route
		});
	});	 
});