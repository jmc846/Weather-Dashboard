var APIkey = "e0d9c528e3291fdb870ce8252b3e562b";
var queryUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=33.441792&lon=-94.037689&%20exclude=hourly,daily&appid=e0d9c528e3291fdb870ce8252b3e562b" +
  "q=USA&appid=" + APIkey;
var button = document.querySelector('button')
var userInput = document.querySelector('.userInput')

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




$( "#getweather" ).click(function()  {
  getWeather(userInput.value, 'https://api.openweathermap.org/data/2.5/onecall?lat=33.441792&lon=-94.037689&%20exclude=hourly,daily&=' + userInput.value +
    '&appid=e0d9c528e3291fdb870ce8252b3e562b')
 

  .then(response => { 

   console.log(response + "NOW");
   console.log("It begins nows");
      console.log(data);
            $("#current-city").text(data.city.description);
            $("#current-teamperature").text(data.main.temp);
            $("#current-humidity").text(data.main.humidity);
            $("#current-windspeed").text(data.wind.speed);
            $("#current-uvindex").text(data.uv.index);
        })
        .fail(function(jqxhr, textStatus, error) {
        console.log("Request Failed" + textStatus + "," + error);
        
//   .then(data =>{ console.log(data)
 })
}
)
// // GIVEN a weather dashboard with form inputs
// function getWeather(userInput, queryUrl) {
//   $.ajax({
//     url: queryUrl,
//     method: "GET",
//     dataType: "json",

//     success: function (data) {
//       console.log(data)
//       if (inputStorage.indexOf(userInput) === -1){
//          inputStorage.push(userInput)
//        window.localStorage.setItem("inputStorage", JSON.stringify(data)),

//        searchHistory(userInput);
       
//     }
//     // // WHEN I search for a city-Event listener need for search city button 
//   }



// })
// }




//   $("#citysearch").on("click", function () {
//     getWeather($(this).text());
//     console.log(this)

//     function searchHistory(text) {
//       var li = $("<li>").addClass("search-list").text(text);
//       $("#day-1").append(li)

//     }


//     // This .on("click") function will trigger the AJAX Call 
//     $(document).ready(function () {
//       $("#citysearch").on("click", function (event) {
//         event.preventDefault();
//         var userInput = $("#find-city").val();
//         console.log(event.target);
//         $("city-input").val("");
//         getWeather(data)
//       })
//     });

//     // // THEN I am presented with current and future conditions for that city and that city is added to the search history
//     $("#currentforecast").text("<Current forecast>");
//     $("#futureforecast").text("<future forecast>");
//     // // WHEN I view current weather conditions for that city


//     // var queryUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city
//     function displayCityWeather() {
//       $.ajax({
//         url: queryUrl,
//         method: "GET"
//       }).then(function (response) {
//         console.log(response);
//         var city = $(this).attr("data-name")
//         console.log('city:' + city)
//         var queryUrl = "http://api.openweathermap.org/data/2.5/uvi?appid=" + apiKey + "&lat=" + response.coord.lat + "&lon=" + response.coord.lon;
//         var uvIndex = uvUrl.value

//         $.ajax({
//           url: uvUrl,
//           method: "GET"
//         }).then(function (response) {
//         })
//         // console.log(uvIndex)
//           $("<div>").append(JSON.parse(response.current.clouds));
//          $(".city").html("<div" + response.name + " Weather Details</div>");
//         var tempF = (response.main.temp - 273.15) * 1.80 + 32;

//         // add temp content to html

//         $(".tempF").text("Temperature (F) " + tempF.toFixed(2));
//         $(".wind").text("Wind Speed: " + response.wind.speed);
//         $(".humidity").text("Humidity: " + response.main.humidity);
//         $(".uv").text("UV Index: " + uvIndex);
//       });

    //   $.ajax({
    //     url: queryUrl,
    //     method: "GET"
    //   }).then(function (response) {
    //     $("#find-city").text(JSON.stringify(response));
    //   }),
    //     console.log(this);
    //   console.log(event.target);
    // };
    // //  THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index
    // //  Transfer content to HTML
    // $(".city").text("<h1>" + response.name + " Weather Details</h1>");
    // $(".date").text("Date" + response.date);
    // $(".wind").text("Wind Speed: " + response.wind.speed);
    // $(".humidity").text("Humidity: " + response.main.humidity);
    // $(".uv").text("Uv Index" + response.uvIndex);

//     // Convert the temp to fahrenheit
//     var tempF = (response.main.temp - 273.15) * 1.80 + 32;

//     // add temp content to html
//     $(".temp").text("Temperature (K) " + response.main.temp);
//     $(".tempF").text("Temperature (F) " + tempF.toFixed(2));

//     // Log the data in the console as well
//     console.log("Wind Speed: " + response.wind.speed);
//     console.log("Humidity: " + response.main.humidity);
//     console.log("Temperature (F): " + tempF);

//     // // WHEN I view the UV index
//     $(".uv").text("Uv Index" + response.uv.index);
//     // // THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe

//     // // WHEN I view future weather conditions for that city
//     $("#futureforecast").text("<future forecast>");

//     // // THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, and the humidity

//     $(".date").text("Date" + response.date);
//     $(".temperature").text("temperature"+response.temperature);
//     $(".wind").text("Wind Speed: " + response.wind.speed);
//     $(".humidity").text("Humidity: " + response.main.humidity);
//     $(".uv").text("Uv Index" + response.uv.index);

//     $(".date-2").text("Date" + response.date);
//     $(".day-2temperature").text("temperature"+response.temperature);
//     $(".day-2windSpeed").text("Wind Speed: " + response.wind.speed);
//     $(".day-2Humidity").text("Humidity: " + response.main.humidity);
//     $(".day-2uvIndex").text("Uv Index" + response.uv.index);


//     $(".date-3").text("Date" + response.date);
//     $(".day-3temperature").text("temperature"+response.temperature);
//     $(".day-3windSpeed").text("Wind Speed: " + response.wind.speed);
//     $(".day-3Humidity").text("Humidity: " + response.main.humidity);
//     $(".day-3uvIndex").text("Uv Index" + response.uv.index);

    
//     $(".date-4").text("Date" + response.date);
//     $(".day-4temperature").text("temperature"+response.temperature);
//     $(".day-4windSpeed").text("Wind Speed: " + response.wind.speed);
//     $(".day-4Humidity").text("Humidity: " + response.main.humidity);
//     $(".day-4uvIndex").text("Uv Index" + response.uv.index);

    
//     $(".date-5").text("Date" + response.date);
//     $(".day-5temperature").text("temperature"+response.temperature);
//     $(".day-5windSpeed").text("Wind Speed: " + response.wind.speed);
//     $(".day-5Humidity").text("Humidity: " + response.main.humidity);
//     $(".day-5uvIndex").text("Uv Index" + response.uv.index);






//     // // WHEN I click on a city in the search history

//     // // THEN I am again presented with current and future conditions for that city

//     // // WHEN I open the weather dashboard

//     // // THEN I am presented with the last searched city forecast
//   })

//    // Function for displaying movie data
//    function renderButtons() {
//     //load persistent data if it isn't null
// if(localStorage.getItem("city")){
//       movies = JSON.parse(localStorage.getItem("city"));
// // Deletes the city prior to adding new city
//         // (this is necessary otherwise you will have repeat buttons)
//         $("#buttons-view").empty();
//   /// Loops through the array of city
// for (var i = 0; i < city.length; i++) {

//   // Then dynamicaly generates buttons for each movie in the array
//   // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
//   var a = $("<button>");
//   // Adds a class of movie to our button
//   a.addClass("city");
//   // Added a data-attribute
//   a.attr("data-name", city[i]);
//   // Provided the initial button text
//   a.text(city[i]);
//   // Added the button to the buttons-view div
//   $("#buttons-view").append(a);


//   var a = $("<button>");
//   // Adds a class of movie to our button
//   a.addClass("temperature");
//   // Added a data-attribute
//   a.attr("data-name", temperature[i]);
//   // Provided the initial button text
//   a.text(temperature[i]);
//   // Added the button to the buttons-view div
//   $("#buttons-view").append(a);
// }
// }
// }
