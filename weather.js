
      // Initial array of cities
      var city = ['denver']
      // weatherSearch function re-renders the HTML to display the appropriate content
      function weatherSearch(city) {

        var appid = '9a249045513d63288116edcbd776a2ad';
        var queryUrl =  `https://api.openweathermap.org/data/2.5/weather?units=imperial&q=${city}&appid=${appid}`;
       
// Creating an AJAX call for the specific city button being clicked
        $.ajax({
          url: queryUrl,
          method: "GET"
        })
        .then(function(weatherResponse) {
          console.log(weatherResponse)
          
          // Creating a div to hold the city
         var cityDiv = $('.city').text(weatherResponse.main.name);
         var windSpeed = $('.wind').text(weatherResponse.wind.speed);
          var humidity = $('.humidity').text(weatherResponse.main.humidity);
      

          // Storing the temperature data
          var temperature = weatherResponse.main.temperature;

          // Creating an element to have the temperature displayed
          var pOne = $("<p>").text("Temperature: " + temperature);

          // Displaying the temperature
          cityDiv.append(pOne);

        //   // Storing the release year
        humidityDiv = weatherResponse.main.humidity;

        //   // Creating an element to hold the Windspee
         var pTwo = $("<p>").text("WindSpeed " + windSpeed);

        
        //   // Creating an element to hold the plot
        //   var pThree = $("<p>").text("Plot: " + plot);

        //   // Appending the plot
        //   movieDiv.append(pThree);

        //   // Retrieving the URL for the image
        //   var imgURL = response.Poster;

        //   // Creating an element to hold the image
        //   var image = $("<img>").attr("src", imgURL);

        //   // Appending the image
        //   movieDiv.append(image);

        //   // Putting the entire movie above the previous movies
        //   $("#movies-view").prepend(movieDiv);
        });

      }
      weatherSearch(`${city}`);
      renderButtons ();

      // Function for displaying city data
      function renderButtons() {

        // Deleting the cities prior to adding new movies
        // (this is necessary otherwise you will have repeat buttons)
        $("#buttons-view").empty();

        // Looping through the array of cities
        for (var i = 0; i < city.length; i++) {

          // Then dynamicaly generating buttons for each city in the array
          // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
          var a = $("<button>");
          // Adding a class of city-btn to our button
          a.addClass("city-btn");
          // Adding a data-attribute
          a.attr("data-name", city[i]);
          // Providing the initial button text
          a.text(city[i]);
          // Adding the button to the buttons-view div
          $("#buttons-view").append(a);
        }
      }
      $(document).on("click", "#add-weather", function() {
        console.log(city)
        let city = $('#weather-city').text
        weatherSearch(city)
     });

