var APIkey =  "e0d9c528e3291fdb870ce8252b3e562b"
var queryUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=33.441792&lon=-94.037689&%20exclude=hourly,daily&appid=e0d9c528e3291fdb870ce8252b3e562b" +
"q=USA&appid=" + APIkey;
var city = $("#city-input").val();

// ajax function to obtain weather data
// / $.ajax({
//     url: queryURL,
//     method: "GET"
//   })
// .then(function(response) {}
// ```
// // GIVEN a weather dashboard with form inputs
$("<State>")

// // WHEN I search for a city-Event listener need for search city button 
  // This .on("click") function will trigger the AJAX Call      
  $.ajax({
    url:queryUrl  ,
    method: "GET"
  }).then(function(response) {
    $("#find-city").text(JSON.stringify(response));
  });
  console.log(this);
  console.log(event.target);
     
// // THEN I am presented with current and future conditions for that city and that city is added to the search history

// // WHEN I view current weather conditions for that city
// // THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index
// Transfer content to HTML
$(".city").text("<h1>" + response.name + " Weather Details</h1>");
$(".wind").text("Wind Speed: " + response.wind.speed);
$(".humidity").text("Humidity: " + response.main.humidity);
$(".uv").text("Uv Index" + response.uv.index);

// Convert the temp to fahrenheit
var tempF = (response.main.temp - 273.15) * 1.80 + 32;

// add temp content to html
$(".temp").text("Temperature (K) " + response.main.temp);
$(".tempF").text("Temperature (F) " + tempF.toFixed(2));

// Log the data in the console as well
console.log("Wind Speed: " + response.wind.speed);
console.log("Humidity: " + response.main.humidity);
console.log("Temperature (F): " + tempF);

// // WHEN I view the UV index
// // THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe
// // WHEN I view future weather conditions for that city
// // THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, and the humidity
// // WHEN I click on a city in the search history
// // THEN I am again presented with current and future conditions for that city
// // WHEN I open the weather dashboard
// // THEN I am presented with the last searched city forecast


// Function for displaying weather data
function renderButtons() {

    // $('#buttons-view').html('');
    $('#city-view').empty();
    for(var i = 0; i < city.length; i++){
      console.log(movies[i]);

      

      // create that button
      var button = $("<button>");
      // we need the attribute data-name
      button.attr("data-name", city[i]);
      // we need the name on the button
      button.text(city[i]);
    }
}
