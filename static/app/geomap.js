
if(typeof GeoMap === 'undefined' || GeoMap === null){
  GeoMap = {};
};

$(document).ready(function(){
  mapOptions = {zoom: 1, center: new google.maps.LatLng(0,0), mapTypeId: google.maps.MapTypeId.TERRAIN};
  GeoMap.map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
});

(function(){
  var GeoData = Backbone.Model.extend({});
  var GeoDataCollection = Backbone.Collection.extend({
    model: GeoData,
    url: "/natindex"   
  });
  GeoMap.geo_data = new GeoDataCollection();
  GeoMap.geo_data.fetch();

  var GeoCoordinates= Backbone.Model.extend({});
  var GeoCoordinatesCollection = Backbone.Collection.extend({
    model: GeoCoordinates,
    url: "/static/json/country_boundaries.json"
  });

  GeoMap.geo_boundaries = new GeoCoordinatesCollection();
  GeoMap.geo_boundaries.fetch();
  var boundaries = GeoMap.geo_boundaries.first().get('boundaries');
  
  var coordinates = []
  _.each(boundaries, function(value){
    coordinates.push(new googlemaps.LatLng(value[0], value[1]));
  });

  testBoundary = new google.maps.Polygon({
    paths: coordinates,
    strokeColor = "#FF0000",
    strokeOpacity: 0.8,
    strokeWeight: 3,
    fillColor: "#FF0000",
    fillOpacity: 0.35
  });
  testBoundary.setMap(GeoMap.map);
  
})();
