
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
  GeoMap.geo_boundaries.on('reset', function(){
    var boundaries = [];
    GeoMap.geo_boundaries.each(function(country){
      boundaries.push({country: country.get('country'), coordinates: country.get('coordinates'), type: country.get('type')});
    });
    _.each(boundaries, function(boundary){ 
      multipolygon = false;
      if(boundary['type'] === 'MultiPolygon'){
        multipolygon = true;
      }
      boundary = boundary['coordinates'];
      if(multipolygon == true){
        var coordinates = []
        _.each(boundary, function(bound){
            _.each(bound, function(b){
              coordinates.push(new google.maps.LatLng(b[1],b[0]));
            });
            GeoMap.plot_points(coordinates);
        });
      }
      else{
        var coordinates = []
        _.each(boundary, function(bound){
          coordinates.push(new google.maps.LatLng(bound[1],bound[0]));
        });
        GeoMap.plots_points(coordinates);
      }
    });
  });
  GeoMap.plot_points = function(points){
    testBoundary = new google.maps.Polygon({
      paths: points,
      strokeColor : "#FF0000",
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: "#FF0000",
      fillOpacity: 0.35
    });
    testBoundary.setMap(GeoMap.map);
  }
})();
