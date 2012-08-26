
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
  GeoMap.geo_data.on('reset', function(){
    GeoMap.geo_boundaries.fetch();
  });

  var GeoCoordinates= Backbone.Model.extend({});
  var GeoCoordinatesCollection = Backbone.Collection.extend({
    model: GeoCoordinates,
    url: "/static/json/country_boundaries.json"
  });

  GeoMap.geo_boundaries = new GeoCoordinatesCollection();
  GeoMap.geo_boundaries.on('reset', function(){
    GeoMap.put_boundaries(GeoMap.geo_boundaries, GeoMap.geo_data, 'Poverty Alleviation');
  });
  GeoMap.put_boundaries = function(geo_boundaries, geo_data, data_type){
    var stat = geo_data.map(geo_data, function(data){
      return parseInt(data["data"][data_type]);
    });
    var max_stat = _.max(stat);
    var min_stat = _.min(stat);
console.log(max_stat);
console.log(min_stat);

    var boundaries = [];
    geo_boundaries.each(function(country){
      boundaries.push({country: country.get('country'), coordinates: country.get('coordinates'), type: country.get('type')});
    });
    _.each(boundaries, function(boundary){ 
      multipolygon = false;
      if(boundary['type'] === 'MultiPolygon'){
        multipolygon = true;
      }
      bounds = boundary['coordinates'];
      if(multipolygon == true){
        _.each(bounds, function(bound){
          var coordinates = [];
          _.each(bound[0], function(b){
            if(boundary['country']!='Antarctica')
            coordinates.push(new google.maps.LatLng(b[1],b[0]));
          });
          GeoMap.plot_points(coordinates);
        });
      }
      else{
        var coordinates = []
        _.each(bounds[0], function(bound){
          coordinates.push(new google.maps.LatLng(bound[1],bound[0]));
        });
        GeoMap.plot_points(coordinates);
      }
    });
  }
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
