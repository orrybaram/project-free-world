if(typeof StatBar === 'undefined' || StatBar === null){
  StatBar = {};
}

(function(){
  StatBar.drawVisualization = function(div_id, data_hash){
    var data_array = [];
    data_array.push(['Statistic Type', 'Index Number']);
    _.each(data_hash, function(value,key){
      if(key !== 'continent'){
        data_array.push([key, parseInt(value)]);
      }
    }); 
    var google_data = google.visualization.arrayToDataTable(data_array);
    var options = {};
    options.cht = 'bhg';
    options.chs = '300x75';
    
    var suffix = '';
    var color = '003333'
    var index = 0;
    var allbars = -1;
    var fontSize = 4;
    var priority = 0
    options.chm = [suffix, color, index, allbars, fontSize, priority].join(','); 
    options.colors = ['#003333']
    new google.visualization.ImageChart(document
                                        .getElementById(div_id))
                                        .draw(google_data, options);
  }
})();
