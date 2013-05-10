
$(function(){
	var mapa;
	var markerNuevo;
	var LatLngList;
	var directionsDisplay = new google.maps.DirectionsRenderer();
	var directionsService = new google.maps.DirectionsService();



	function calculaRuta(){
		var distancia = google.maps.geometry.spherical.computeDistanceBetween(LatLngList[0], LatLngList[1]);
		$("#distRecta").val(( distancia/ 1000) + " km")
		directionsDisplay.setMap(mapa);
	 		var calcRuta = (function(){
 				 var ruta = {
    				origin: LatLngList[0],
    				destination: LatLngList[1],
    				travelMode: google.maps.TravelMode.DRIVING,
    				unitSystem: google.maps.UnitSystem.METRIC
 				 };
  				directionsService.route(ruta, function(result, status) {
    				if (status == google.maps.DirectionsStatus.OK) {
      					directionsDisplay.setDirections(result);
      					$("#distCoche").val((result.routes[0].legs[0].distance.value/1000) + " km");

   					}
   					else{
   						console.log("Esto es el status" + status);
   						$("#distCoche").val("No hay ruta");
   				}
  				});

				}());
	}
	function muestra_Mapa(pos){
			var latilong = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude);
			var opciones = {
				center: latilong,
				zoom: 15,
				mapTypeId: google.maps.MapTypeId.ROADMAP
			};
			mapa = new google.maps.Map(document.getElementById("map_canvas"),opciones);
			var marker = new google.maps.Marker({
				position: latilong,
				map: mapa,
				title: "Ud. se encuentra aqui"
			});
			// Damos valores a las cajas de coordenadas
			$("#longActual").val(pos.coords.longitude);
			$("#latActual").val(pos.coords.latitude);

			// Pintamos y modificamos posicion antigua
		    if(localStorage.longGuardada && localStorage.latGuardada){
			 	$("#longGuardada").val(localStorage.longGuardada); 
			 	$("#latGuardada").val(localStorage.latGuardada);
			 	var latilong2=new google.maps.LatLng(localStorage.latGuardada, localStorage.longGuardada);
				 markerNuevo = new google.maps.Marker({
						position: latilong2,
					map: mapa,
					title: "Última Posicion Guardada",
					icon: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png'
				});

			//	Actualizamos los limites del mapa

			//	Array de todas las latitudes/longitudes
				LatLngList = [latilong, latilong2];
				var bounds = new google.maps.LatLngBounds();
				for (var i = 0, LtLgLen = LatLngList.length; i < LtLgLen; i++) {
  			//  Incrementamos los limites del mapa
  				bounds.extend (LatLngList[i]);
				}
			//  Aplicamos los limites al mapa
				mapa.fitBounds (bounds);
				}
			

				localStorage.longGuardada = "" + $("#longActual").val();
	 			localStorage.latGuardada = "" + $("#latActual").val();

	 		//	Calculamos ruta
	 		if(LatLngList.length >=2){
	 			calculaRuta();
		}



}
	function errorFunction(pos){
			alert('Error');
		}

		if(navigator.geolocation){
			navigator.geolocation.getCurrentPosition(muestra_Mapa, errorFunction);
		}
		else	{alert('Geolocation error');}

	$("#enviar").on('click', function() {
		localStorage.longGuardada = "" + $("#longGuardada").val();
		localStorage.latGuardada = "" + $("#latGuardada").val();
		if(markerNuevo){markerNuevo.setMap(null);}
		var latilong2=new google.maps.LatLng(localStorage.latGuardada, localStorage.longGuardada);

			//	Actualizamos los limites del mapa
			
			if(LatLngList.length>=2){
				LatLngList[1]= latilong2;
			}
			else{LatLngList.push(latilong2);}
				var bounds = new google.maps.LatLngBounds();
				for (var i = 0, LtLgLen = LatLngList.length; i < LtLgLen; i++) {
  			//  Incrementamos los limites del mapa
  				bounds.extend (LatLngList[i]);
				}
			//  Aplicamos los limites al mapa
				mapa.fitBounds (bounds);
				
		markerNuevo = new google.maps.Marker({
				position: latilong2,
				map: mapa,
				title: "Nueva Posición Guardada",
				icon: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png'
			});

		// Calculamos la ruta
		if(LatLngList.length >=2){
	 		calculaRuta();
		}



		});

});



