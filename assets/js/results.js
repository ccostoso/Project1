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


    /*------------------------------- First Card Symptoms------------------------------*/


// need to create 1 on click event 
// neeed to create a hover event 

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
    var rNose = $('#serious-symptom').attr("src", response.data[0].profile.images_url);
    console.log( typeof response.data );
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




$(document).ready(function () {
    console.log("ready!");

    
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + 'fever' + "&api_key=UbAY6SJJhOljEzSrIOAedTGTZperCmLZ";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        //  Trying to get the image to be added into the img tag 
        console.log('response----->', response);
        // results[i]    .images.fixed_height.url
        var rNose = $('#flu1').attr("src", response.data[3].images.fixed_height.url);
        console.log('data---->', typeof response.data );
    });



    /* ------------------------------Second Card ----------------------------------- */
    
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + "wash hands" + "&api_key=UbAY6SJJhOljEzSrIOAedTGTZperCmLZ";

    $.ajax({
        url: queryURL,
        method: "GET"

    }).then(function (response) {
        console.log(response);
        //  Trying to get the image to be added into the img tag 
        console.log('response----->', response);
        // results[i]    .images.fixed_height.url
        var rNose = $('#flu2').attr("src", response.data[1].images.fixed_height.url);
        console.log( typeof response.data );
    });

});

// Youtube API
var search= "tea";
var queryURL = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=tea&key=AIzaSyApou57R2okMqV6UNU5tGaGRB6qJ72YXFE";
// response will be an array.  Each item in the array has an id.  so you will want to add that id to the end of the url below
// "https://www.youtube.com/watch?v="+result[index].id       
$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response)
{ console.log("youtube", response);

})


        var players = new Array();


  var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var playerInfoList = [{
id: 'player1',
videoId: 'qKYjj4VTksI'
}, {
id: 'player2',
videoId: '4DI1fPyAssA'
}, {
id: 'player3',
videoId: 'QvyaE_eXDJU'
}];

function onYouTubeIframeAPIReady() {
if (typeof playerInfoList === 'undefined') return;

for (var i = 0; i < playerInfoList.length; i++) {
    var curplayer = createPlayer(playerInfoList[i]);
    players[i] = curplayer;
}
}

var players = new Array();

function createPlayer(playerInfo) {
    return new YT.Player(playerInfo.id, {
        videoId: playerInfo.videoId,
    });
}

