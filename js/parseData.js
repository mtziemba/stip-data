/* Parse data from .csv file to be used for plotting */

function makeplot() {
  Plotly.d3.csv("data/GDP.csv", function(data){ processData(data) } );

};

function processData(allRows) {

  console.log(allRows);
  var x = [], y = [], standard_deviation = [];

  for (var i=0; i<allRows.length; i++) {
    row = allRows[i];
    x.push( row['Country'] );
    y.push( row['GDP (PPP in constant 2011 International $)'] );
  }
  console.log( 'X',x, 'Y',y, 'SD',standard_deviation );
  makePlotly( x, y, standard_deviation );
}

function makePlotly( x, y, standard_deviation ){
  var plotDiv = document.getElementById("plot");
  var traces = [{
    x: x,
    y: y
  }];

  Plotly.newPlot('hey', traces,
    {title: 'Plotting CSV data from AJAX call'});
};
  makeplot();