$(document).ready(function () {
    console.log("ready!");

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + 'runny nose' + "&api_key=UbAY6SJJhOljEzSrIOAedTGTZperCmLZ";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        //  Trying to get the image to be added into the img tag 
        console.log('response----->', response);
        // results[i]    .images.fixed_height.url
        var rNose = $('#dripping-nose').attr("src", response.data[0].images.fixed_height.url);
        console.log('data---->', typeof response.data );
    });

/*------------------------------- First Card Symptoms------------------------------*/

// need to create an on click event 

var helpNeeded="Find Doctor"; 
var queryURL= "https://api.betterdoctor.com/2016-03-01/doctors?location=37.773%2C-122.413%2C100&user_location=37.773%2C-122.413&skip=0&limit=10&user_key=4a76ed5c62af00d6fd94b0fa706cfbf6";

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {
    console.log(response);
    //  Trying to get the api of doctor location to be added into 
    console.log('response----->', response);
    // results[i]    .images.fixed_height.url
    var rNose = $('#serious-symptom').attr("src", response.data[0].images.fixed_height.url);
    console.log( typeof response.data );
});

    /* ------------------------------Second Card ----------------------------------- */
    
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + 'person working out' + "&api_key=UbAY6SJJhOljEzSrIOAedTGTZperCmLZ";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        //  Trying to get the image to be added into the img tag 
        console.log('response----->', response);
        // results[i]    .images.fixed_height.url
        var rNose = $('#working-out').attr("src", response.data[0].images.fixed_height.url);
        console.log( typeof response.data );
    });

});


