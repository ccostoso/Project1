$(document).ready(function () {
    console.log("ready!");

    var cold = "Runny Nose";
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



    /* ------------------------------Second Card ----------------------------------- */
    var preventativeCare = "remedies";
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


/*------------------------------- First Card Symptoms------------------------------*/

