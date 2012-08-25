$(document).ready(function(){
  mapOptions = {zoom: 1, center: new google.maps.LatLng(0,0), mapTypeId: google.maps.MapTypeId.TERRAIN};
  var map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
});

if(typeof GeoMap === 'undefined' || GeoMap === null){
  GeoMap = {};
};

(function(){
  GeoMap.GeoDataCollection = Backbone.Collection.extend({
    url: "/natindex"   
  });
  var geo_data = new GeoMap.GeoDataCollection();
  GeoMap.GeoCoordinates = Backbone.Collection.extend({
    url: "/static/json/country_boundaries.json "
  });
  var geo_boundaries = new GeoMap.GeoCoordinates();
})();
