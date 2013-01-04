var map;

function initialize() {
  var chicago = new google.maps.LatLng(41.850033, -87.6500523);
  var mapOptions = {
	zoom:30,
	mapTypeId: google.maps.MapTypeId.ROADMAP,
	center: chicago
  }
  map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
}

function calcRoute() {
  var source = "Rua Copacabana, Recife, PE";
  var target = "Ponte Governador Agamenon Magalhães, Recife, PE";

  var route = new Route(map, new google.maps.DirectionsService(), source, target);
  
  // going
  //route.add("Rua Copacabana, Recife, PE");
  
  route.add("Avenida Vinte de Janeiro, Recife, PE");
  route.add("Rua João Cardoso Ayres, Recife, PE");
  route.add("Rua Sá e Souza, Recife, PE");
  route.add("Rua Capitão Zuzinha, Recife, PE");
  route.add("Rua Doutor Vicente Gomes, Recife, PE");
  route.add("Rua Setúbal, Recife, PE");
  route.add("Avenida Conselheiro Aguiar, Recife, PE");
  route.add("Avenida Engenheiro Antônio de Góes (Pista Leste), Recife, PE");
  
  //route.add("Ponte Governador Agamenon Magalhães, Recife, PE");

  /*
  route.add("Avenida Engenheiro José Estelita, Recife, PE");
  route.add("Viaduto das Cinco Pontas, Recife, PE");
  route.add("Cais Santa Rita, Recife, PE");
  route.add("Ponte Doze de Setembro, Recife, PE");
  route.add("Avenida Alfredo Lisboa, Recife, PE");
  route.add("Avenida Marquês de Olinda, PE");
  route.add("Ponte Conde Maurício de Nassau, Recife, PE");
  route.add("Rua Primeiro de Março, Recife, PE");

  // back
  route.add("Praça da Independência, 	Recife, PE");
  route.add("Avenida Guararapes (Pista Central Norte)	Recife, PE");
	route.add("Ponte Duarte Coelho	Recife, PE");  
	route.add("Avenida Conde da Boa Vista	Recife, PE");
	route.add("Rua Dom Bosco	Recife, PE");
	route.add("Avenida Governador Agamenon Magalhães (Pista Central)	Recife, PE");
	route.add("Ponte Papa João Paulo ll	Recife, PE");
	route.add("Viaduto Capitão Temudo	Recife, PE");
	route.add("Alça do Viaduto Capitão Temudo	Recife, PE");
	route.add("Avenida Saturnino de Brito	Recife, PE");
	route.add("Ponte Governador Paulo Guerra	Recife, PE");
	route.add("Avenida Herculano Bandeira	Recife, PE");
	route.add("Avenida Engenheiro Domingos Ferreira, Recife, PE");	
	route.add("Rua Barão de Souza Leão	Recife, PE")
	route.add("Rua Sá e Souza	Recife, PE");
	route.add("Rua João Cardoso Ayres	Recife, PE");
	route.add("Avenida Vinte de Janeiro	Recife, PE");
	route.add("Rua Cruzeiro do Forte	Recife, PE");
	route.add("Rua Waldemar Cardoso Monteiro	Recife, PE");
	route.add("Rua Copacabana	Recife, PE");
	*/
}