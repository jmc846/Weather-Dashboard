
      // Initial array of cities
      var city = ['new york']
     
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
         var cityDiv = $('.city').text(weatherResponse.base);
          $('.wind').text(weatherResponse.wind.speed);
          $('.humidity').text(weatherResponse.main.humidity);
      

          // Storing the temperature data
          var temperature = weatherResponse.temperature;

          // Creating an element to have the temperature displayed
          var pOne = $("<p>").text("Temperature: " + temperature);

          // Displaying the temperature
          cityDiv.append(pOne);

        //   // Storing the release year
        //   var humidity = response.humidity;

        //   // Creating an element to hold the release year
        //   var pTwo = $("<p>").text("Released: " + released);

        //   // Displaying the release year
        //   movieDiv.append(pTwo);

        //   // Storing the plot
        //   var plot = response.Plot;

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
          a.text(cities[i]);
          // Adding the button to the buttons-view div
          $("#buttons-view").append(a);
        }
      }
      $(document).on("click", "#weather-city", function() {
        console.log("HEY")
        let city = $(this.text())
        weatherSearch(city)
     });

