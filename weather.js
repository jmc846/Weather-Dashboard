
      // Initial array of cities
      var cities = ["Kansas City", "Scranton", "El Paso", ""];
      APIkey = "042d0cfc5b5ddf89eef2f4bc2dea16f1";
      var queryUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=33.441792&lon=-94.037689&%20exclude=hourly,daily&appid=e0d9c528e3291fdb870ce8252b3e562b" +
        "q=USA&appid=" + APIkey;
      // displayCityInfo function re-renders the HTML to display the appropriate content
      function displayCityInfo() {

        var city = $(this).attr("data-name");
        var queryURL = "https://api.openweathermap.org/data/2.5/onecall?+lat={lat}&lon={lon}&exclude={part}&appid="+ APIkey; 

        // Creating an AJAX call for the specific movie button being clicked
        $.ajax({
          url: queryURL,
          method: "GET"
        }).then(function(response) {

          // Creating a div to hold the city
          var cityDiv = $("<div class='city'>");

          // Storing the temperature data
          var temperature = response.temperature;

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

      // Function for displaying city data
      function renderButtons() {

        // Deleting the cities prior to adding new movies
        // (this is necessary otherwise you will have repeat buttons)
        $("#buttons-view").empty();

        // Looping through the array of cities
        for (var i = 0; i < cities.length; i++) {

          // Then dynamicaly generating buttons for each city in the array
          // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
          var a = $("<button>");
          // Adding a class of city-btn to our button
          a.addClass("city-btn");
          // Adding a data-attribute
          a.attr("data-name", cities[i]);
          // Providing the initial button text
          a.text(cities[i]);
          // Adding the button to the buttons-view div
          $("#buttons-view").append(a);
        }
      }

      // This function handles events where a city button is clicked
      $("#add-city").on("click", function(event) {
        event.preventDefault();
        // This line grabs the input from the textbox
        var city = $("#city-input").val().trim();

        // Adding city  from the textbox to our array
        cities.push(movie);

        // Calling renderButtons which handles the processing of our city array
        renderButtons();
      });

      // Adding a click event listener to all elements with a class of "city-btn"
      $(document).on("click", ".city-btn", displayCityInfo);

      // Calling the renderButtons function to display the initial buttons
      renderButtons();
    

