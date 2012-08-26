//map
function initialize() {
    var mapOptions = {
      center: new google.maps.LatLng(20.797201, 30.761719),
      zoom: 3,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("map_canvas"),
        mapOptions);
}
initialize();
