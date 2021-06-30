console.log(cityGrowths);

// sort cities by growth
var sortedCities = cityGrowths.sort((a,b) =>
a.Increase_from_2016 - b.Increase_from_2016).reverse(); 
console.log(sortedCities);

//slice top 5 cities
var topFiveCities = sortedCities.slice(0,5);
console.log(topFiveCities);

//create arrays of city names and growth
var topFiveCityNames = topFiveCities.map(city => city.City);
var topFiveCityGrowths = topFiveCities.map(city => parseInt(city.Increase_from_2016));
console.log(topFiveCityNames);
console.log(topFiveCityGrowths);

var trace = {
    x: topFiveCityNames,
    y: topFiveCityGrowths,
    type: "bar"
  };
  var data = [trace];
  var layout = {
    title: "Most Rapidly Growing Cities",
    xaxis: { title: "City" },
    yaxis: { title: "Population Growth, 2016-2017"}
  };
  Plotly.newPlot("bar-plot", data, layout);

  //skill drill 12.2.2
  var sortedCities = cityGrowths.sort((a,b) =>
  a.Increase_from_2016 - b.Increase_from_2016).reverse(); 
  
  //slice top 7 cities
  var topSevenCities = sortedCities.slice(0,7);
  console.log(topSevenCities);
  //create arrays of city names and growth
  var topSevenCityNames = topSevenCities.map(city => city.City);
  var topSevenCityGrowths = topSevenCities.map(city => parseInt(city.Increase_from_2016));
 //Plot with bar graph
  var trace = {
      x: topSevenCityNames,
      y: topSevenCityGrowths,
      type: "bar"
    };
    var data = [trace];
    var layout = {
      title: "Most Rapidly Growing Cities",
      xaxis: { title: "City" },
      yaxis: { title: "Population Growth, 2016-2017"}
    };
    Plotly.newPlot("bar-plot", data, layout);

