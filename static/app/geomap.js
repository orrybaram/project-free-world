
$(document).ready(){
  mapOptions = {zoom: 5, center: new google.maps.LatLng(-34.397, 150.644), mapTypeId: googlemaps.MapTypeId.TERRAIN}
  var map = new google.maps.Map(document.getElementById("map_canvas")), mapOptions) 
}

if(typeof GeoMap === undefined || GeoMap === null){
  GeoMap = {};
}
