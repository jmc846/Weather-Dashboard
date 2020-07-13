var APIkey = "e0d9c528e3291fdb870ce8252b3e562b";
var queryUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=33.441792&lon=-94.037689&%20exclude=hourly,daily&appid=e0d9c528e3291fdb870ce8252b3e562b" +
  "q=USA&appid=" + APIkey;
var button= document.querySelector('button')
var userInput=document.querySelector('.userInput')

var card = $("<div>").addClass("card");
var cardBody = $("<div>").addClass("cardbody");
var city = $("<p>").addClass("cardText").text("city");// $('.dropdown-toggle').dropdown()
var temperature = $("<p>").addClass("cardText").text("Temperature");
var humidity = $("<p>").addClass("cardText").text("Humidity");
var windSpeed = $("<p>").addClass("cardText").text("Wind-speed");
var uvIndex = $("<p>").addClass("cardText").text("Uv-Index");
var citiesStored = localStorage.getItem("city");
var citySearch = localStorage.getItem("citySearch");
var currentForecast = $("currentForecast").empty();
var futureForecast = $("futureForecast").empty();
cardBody.append("#temperature");
card.append(cardBody);
$("#current").append(card);

document.getElementById("submitButton").addEventListener('click', function(){
fetch('https://api.openweathermap.org/data/2.5/onecall?lat=33.441792&lon=-94.037689&%20exclude=hourly,daily&='  +userInput.value+
'&appid=e0d9c528e3291fdb870ce8252b3e562b')
.then(response => response.json())
.then(data =>{ console.log(data)
})

.catch(err => alert("Wrong city name"))
})
// GIVEN a weather dashboard with form inputs
function getWeather(userInput) {
  $.ajax({
    url: queryUrl,
    method: "GET",
    dataType: "json",
    success: function (data) {
      if (inputStorage.indexOf(userInput) === -1){
        inputStorage.push(userInput)
      window.localStorage.setItem("inputStorage", JSON.stringify(inputStorage)),

      searchHistory(userInput)
    }}
    // // WHEN I search for a city-Event listener need for search city button 
  });

    $("#citysearch").on("click", function () {
      getWeather($(this).text());
      console.log(this)

      function searchHistory(text) {
        var li = $("<li>").addClass("search-list").text(text);
        $("#searchhistory").append(li)

      }

    
      // This .on("click") function will trigger the AJAX Call 
      $(document).ready(function () {
        $("searchcity").on("click", function (event) {
          event.preventDefault();
          var userInput = $("#find-city").val();
          console.log(event.target);
          $("city-input").val("");
          getWeather(userInput)
        })
      });

      // // THEN I am presented with current and future conditions for that city and that city is added to the search history
      $("#currentforecast").text("<Current forecast>");
        $("#futureforecast").text("<future forecast>");
      // // WHEN I view current weather conditions for that city
      function displayCityWeather() {
        var city = $(this).attr("data-name")
        console.log('city:' + city)
        var queryUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city

        $.ajax({
          url: queryUrl,
          method: "GET"
        }).then(function (response) {
          $("#find-city").text(JSON.stringify(response));
        }),
          console.log(this);
        console.log(event.target);
      };
      // // THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index
      // Transfer content to HTML
      $(".city").text("<h1>" + response.name + " Weather Details</h1>");
      $(".date").text("Date" + response.date);
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
    })

      // Function for displaying weather data
      function renderButtons() {

        // $('#buttons-view').html('');
        $('#city-view').empty();
        for (var i = 0; i < city.length; i++) {
          console.log(movies[i]);



          // create that button
          var button = $("<button>");
          // we need the attribute data-name
          button.attr("data-name", city[i]);
          // we need the name on the button
          button.text(city[i]);
        };
      };
    
  }
