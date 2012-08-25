
$(document).ready(){
  mapOptions = {zoom: 5, mapTypeId: googlemaps.MapTypeId.TERRAIN}
  var map = new google.maps.Map(document.getElementById("map_canvas")), mapOptions) 
}

if(typeof GeoMap === undefined || GeoMap === null){
  GeoMap = {};
}
