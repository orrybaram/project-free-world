
if(typeof GeoMap === 'undefined' || GeoMap === null){
  GeoMap = {};
};

$(document).ready(function(){
  mapOptions = {zoom: 3, center: new google.maps.LatLng(0,0), mapTypeId: google.maps.MapTypeId.TERRAIN};
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

  var button_events = {"poverty_button":"Poverty Alleviation", "economic_button":"Economic Equality", "infrastructure_button":"Infrastructure Index", "human_rights_button":"Human Rights Index", "government_button":"Government Legitmacy", "literacy_button":"Literacy Rate"}
  _.each(button_events, function(v,k){ 
    $("#"+k).on('click', function(){
      console.log($('.btn-group').find('.btn'));
      $('.btn-group').find('.btn').removeClass('selected');
      $(this).addClass('selected');
      mapOptions = {zoom: 3, center: new google.maps.LatLng(0,0), mapTypeId: google.maps.MapTypeId.TERRAIN};
      GeoMap.map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
      GeoMap.put_boundaries(GeoMap.geo_boundaries, GeoMap.geo_data, v);
    });
  });

  var GeoCoordinates= Backbone.Model.extend({});
  var GeoCoordinatesCollection = Backbone.Collection.extend({
    model: GeoCoordinates,
    url: "/static/json/country_boundaries.json"
  });

  GeoMap.geo_boundaries = new GeoCoordinatesCollection();
  GeoMap.geo_boundaries.on('reset', function(){
    GeoMap.put_boundaries(GeoMap.geo_boundaries, GeoMap.geo_data, 'Economic Equality');
  });
  GeoMap.put_boundaries = function(geo_boundaries, geo_data, data_type){
    var stat = geo_data.map(function(data){
      return parseInt(data.get("data")[data_type]);
    });
    var max_stat = _.max(stat);
    var min_stat = _.min(stat);

    var boundaries = [];
    geo_boundaries.each(function(country){
      
      var country_data = geo_data.where({'country': country.get('country')})
      if(country_data.length > 0){
        var opacity =  _.first(country_data).get("data")[data_type]/100.0;
      }
      else{
        var opacity = 0;
      }

      boundaries.push({country: country.get('country'), coordinates: country.get('coordinates'), type: country.get('type'), opacity: opacity});
    });
    _.each(boundaries, function(boundary){ 
      multipolygon = false;
      if(boundary['type'] === 'MultiPolygon'){
        multipolygon = true;
      }
      var opacity = boundary['opacity'];
      var bounds = boundary['coordinates'];
      if(multipolygon == true){
        _.each(bounds, function(bound){
          var coordinates = [];
          _.each(bound[0], function(b){
            if(boundary['country']!='Antarctica')
            coordinates.push(new google.maps.LatLng(b[1],b[0]));
          });
          GeoMap.plot_points(coordinates, opacity);
        });
      }
      else{
        var coordinates = []
        _.each(bounds[0], function(bound){
          coordinates.push(new google.maps.LatLng(bound[1],bound[0]));
        });
        GeoMap.plot_points(coordinates, opacity);
      }
    });
  }
  GeoMap.plot_points = function(points, opacity){
    testBoundary = new google.maps.Polygon({
      paths: points,
      strokeColor : "#003333",
      strokeOpacity: 0.8,
      strokeWeight: 0.5,
      fillColor: "#003333",
      fillOpacity: opacity
    });
    testBoundary.setMap(GeoMap.map);
  }
})();
