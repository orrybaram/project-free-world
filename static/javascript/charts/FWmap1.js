
     google.load('visualization', '1', {'packages': ['geochart']});
     google.setOnLoadCallback(drawRegionsMap);

      function drawRegionsMap() {
        var data = google.visualization.arrayToDataTable([
          ['Country', 'Poverty Alleviation'],
        // //['Germany', 200], -->
        //   ['United States', 300],
        //   ['Brazil', 400],
        //   ['Canada', 500],
        //   ['France', 500],
        //   ['', 700], -->
['Algeria', 45.0] ,
['Angola', 52.0] ,
['Benin', 24.0] ,
['Botswana', 35.0] ,
['Burkina Faso', 23.0] ,
['Burundi', 12.0] ,
['Cameroon', 35.0] ,
['Cape Verde', 34.0] ,
['Central African Republic', 20.0] ,
['Chad', 17.0] ,
['Comoros', 21.0] ,
['D R Congo', 12.0] ,
['Djibouti', 34.0] ,
['Egypt', 29.0] ,
['Equatorial Guinea', 52.0] ,
['Eritrea', 14.0] ,
['Ethiopia', 26.0] ,
['Gabon', 43.0] ,
['Gambia', 26.0] ,
['Ghana', 40.0] ,
['Guinea', 11.0] ,
['Gunea-Bissau', 10.0] ,
['Ivory Coast', 26.0] ,
['Kenya', 27.0] ,
['Lesotho', 14.0] ,
['Liberia', 14.0] ,
['Libya', 45.0] ,
['Madagascar', 21.0] ,
['Malawi', 15.0] ,
['Mali', 25.0] ,
['Mauritania', 24.0] ,
['Mauritius', 58.0] ,
['Morocco', 44.0] ,
['Mozambique', 21.0] ,
['Namibia', 36.0] ,
['Niger', 14.0] ,
['Nigeria', 25.0] ,
['Republic of the Congo', 25.0] ,
['Rwanda', 32.0] ,
['Sao Tome and Principe', 26.0] ,
['Senegal', 31.0] ,
['Seychelles', 51.0] ,
['Sierra Leone', 17.0] ,
['Somalia', 3.0] ,
['South Africa', 44.0] ,
['South Sudan', 27.0] ,
['Sudan', 29.0] ,
['Swaziland', 17.0] ,
['Tanzania', 31.0] ,
['Togo', 23.0] ,
['Tunisia', 45.0] ,
['Uganda', 25.0] ,
['Zambia', 19.0] ,
['Zimbabwe', 11.0] ,
['Africa Average', 27.92453] ,
['Afghanistan', 23.0] ,
['Bahrain', 69.0] ,
['Bangladesh', 26.0] ,
['Bhutan', 34.0] ,
['Brunei', 69.0] ,
['Burma (Myanmar)', 24.0] ,
['Cambodia', 31.0] ,
['China', 61.0] ,
['East Timor', 20.0] ,
['India', 45.0] ,
['Indonesia', 40.0] ,
['Iran', 36.0] ,
['Iraq', 23.0] ,
['Israel/West Bank', 60.0] ,
['Japan', 60.0] ,
['Jordan', 36.0] ,
['Kazakhstan', 35.0] ,
['Kuwait', 63.0] ,
['Kyrgyzstan', 21.0] ,
['Laos', 33.0] ,
['Lebanon', 45.0] ,
['Malaysia', 54.0] ,
['Maldives', 36.0] ,
['Mongolia', 48.0] ,
['Nepal', 24.0] ,
['Oman', 57.0] ,
['Pakistan', 28.0] ,
['Philippines', 47.0] ,
['Qatar', 68.0] ,
['Russia', 60.0] ,
['Saudi Arabia', 66.0] ,
['Singapore', 67.0] ,
['Sri Lanka', 44.0] ,
['Syria', 37.0] ,
['Tajikistan', 23.0] ,
['Thailand', 60.0] ,
['Turkey', 44.0] ,
['Turkmenistan', 43.0] ,
['United Arab Emirates', 61.0] ,
['Uzbekistan', 29.0] ,
['Vietnam', 39.0] ,
['Yemen', 13.0] ,
['Asia Average', 42.90476] ,
['Albania', 44.0] ,
['Armenia', 44.0] ,
['Austria', 80.0] ,
['Azerbaijan', 48.0] ,
['Belarus', 35.0] ,
['Belgium', 64.0] ,
['Bosnia and Herzegovina', 45.0] ,
['Bulgaria', 50.0] ,
['Croatia', 46.0] ,
['Cyprus', 46.0] ,
['Czech Republic', 57.0] ,
['Denmark', 78.0] ,
['Estonia', 62.0] ,
['Finland', 71.0] ,
['France', 61.0] ,
['Georgia', 37.0] ,
['Germany', 74.0] ,
['Greece', 41.0] ,
['Hungary', 41.0] ,
['Iceland', 43.0] ,
['Ireland', 62.0] ,
['Italy', 54.0] ,
['Latvia', 47.0] ,
['Lithuania', 50.0] ,
['Luxembourg', 82.0] ,
['Macedonia', 41.0] ,
['Malta', 62.0] ,
['Moldova', 38.0] ,
['Montenegro', 51.0] ,
['Netherlands', 67.0] ,
['Norway', 76.0] ,
['Poland', 60.0] ,
['Portugal', 47.0] ,
['Romania', 40.0] ,
['Serbia', 38.0] ,
['Slovakia', 49.0] ,
['Slovenia', 65.0] ,
['Spain', 50.0] ,
['Sweden', 84.0] ,
['Switzerland', 78.0] ,
['Ukraine', 43.0] ,
['United Kingdom', 63.0] ,
['Europe Average', 55.09524] ,
['Antigua and Barbuda', 52.0] ,
['Bahamas', 55.0] ,
['Barbados', 47.0] ,
['Belize', 46.0] ,
['Canada', 79.0] ,
['Costa Rica', 54.0] ,
['Cuba', 45.0] ,
['Dominican Republic', 42.0] ,
['El Salvador', 40.0] ,
['Grenada', 40.0] ,
['Guatemala', 39.0] ,
['Haiti', 5.0] ,
['Honduras', 28.0] ,
['Jamaica', 34.0] ,
['Mexico', 43.0] ,
['Nicaragua', 31.0] ,
['Panama', 57.0] ,
['Trinidad and Tobago', 53.0] ,
['United States', 66.0] ,
['North America Average', 45.05263] ,
['Australia', 74.0] ,
['Fiji', 30.0] ,
['Micronesia', 30.0] ,
['New Zealand', 61.0] ,
['Papua New Guinea', 34.0] ,
['Samoa', 46.0] ,
['Solomon Islands', 21.0] ,
['Ocenia Average', 42.28571] ,
['Argentina', 59.0] ,
['Bolivia', 35.0] ,
['Brazil', 64.0] ,
['Chile', 54.0] ,
['Colombia', 60.0] ,
['Ecuador', 41.0] ,
['Guyana', 39.0] ,
['Paraguay', 44.0] ,
['Peru', 54.0] ,
['Suriname', 34.0] ,
['Uruguay', 62.0] ,
['Venezuela', 41.0] ,
['South America Average', 48.91667]
        ]);

var options = {};

var chart = new google.visualization.GeoChart(document.getElementById('chart_div'));
chart.draw(data, options);
};