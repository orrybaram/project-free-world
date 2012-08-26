if(typeof StatBar === 'undefined' || StatBar === null){
  StatBar = {};
}

(function(){
  StatBar.drawVisualization = function(div_id, data_hash){
    var data_array = [];
    data_array.push(['Statistic Type', 'Index Number']);
    _.each(data_hash, function(value,key){
      data_array.push([key, value]);
    }); 
    var google_data = google.visualization.arrayToDataTable(data_array);
    var options = {};
    options.cht = 'bhg';
    var min = 0;
    var max = 100;
    options.chds = min + ',' + max;
    
    var suffix = '';
    var colors = 'ff3399'
    var index = 0;
    var allbars = -1;
    var fontSize = 10;
    var priority = 0
    options.chm = [suffix, color, index, allbars, fontSize, priority].join(',');
    new google.visualization.ImageChart(document
                                        .getElementById(div_id))
                                        .draw(google_data, options);
  }
})();
