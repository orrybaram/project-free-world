$(document).ready(function(){
  mapOptions = {zoom: 1, center: new google.maps.LatLng(0,0), mapTypeId: google.maps.MapTypeId.TERRAIN};
  var map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
});

if(typeof GeoMap === 'undefined' || GeoMap === null){
  GeoMap = {};
};

(function(){
  GeoMap.GeoData = Backbone.Model.extend(); 
  GeoMap.GeoDataCollection = Backbone.Collection.extend({
    model:GeoMap.GeoData,
    url: "/natindex"   
  });
  var geo_data = new GeoMap.GeoDataCollection();
  geo_data.fetch();
})();
