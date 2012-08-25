
$(document).ready(){
  mapOptions = {}
  var map = new google.maps.Map($('#map_div'), mapOptions) 
}

if(typeof GeoMap === undefined || GeoMap === null){
  GeoMap = {};
}
