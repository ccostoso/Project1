var windowNum = 0;
var fluCount = 0;
var coldCount = 0;
var lastCounted;

var windowArr = [
    {
        qNum: 1,
        qText: "Do you have a sore throat?",
    },
    {
        qNum: 2,
        qText: "Do you have a runny nose?",
    },
    {
        qNum: 3,
        qText: "Do you have a headache?",
    },
    {
        qNum: 4,
        qText: "Are you experiencing body aches/pains/chills?",
    },
    {
        qNum: 5,
        qText: "Are you experiencing nausea/dizziness?",
    },
    {
        qNum: 6,
        qText: "Do you have a fever?",
    },
    {
        qNum: 7,
        qText: "Have you been coughing?",
    },
    {
        qNum: 8,
        qText: "Did your symptoms come on suddenly?",
    },
];

function createQuestionWindows() {
    $.each(windowArr, function(i, ele) {
        var eleQNum = ele.qNum;
        var eleQText = ele.qText;

        
        var main = $("<main>").attr("data-qnum", eleQNum);

        main.addClass("d-none jumbotron container my-auto");

        main.append(
            $("<h1>").addClass("display-4").text(eleQText)
        );
        main.append($("<hr>"), $("<p>").addClass("button-display my-3 text-center").append(
            $("<button>").addClass("btn btn-info cold mr-4").text("Yes"),
            $("<button>").addClass("btn btn-info cold mr-4").text("No")
        ), );
        main.append(
            $("<div>").addClass("d-flex justify-content-start").append($("<button>").addClass("btn btn-danger back-button").text("Back"))
        );

        $(document.body).append(main);
    })

}

createQuestionWindows();

function proceed(action) {
    var direction;
    if (!action) {
        direction = "left";
    } else {
        direction = "right";
    }

    $(`[data-qnum="${windowNum}"]`).removeClass("in-fade");
    $(`[data-qnum="${windowNum}"]`).toggleClass(`${direction}-fade`);

    setTimeout(function() {
        $(`[data-qnum="${windowNum}"]`).toggleClass("d-none");
        $(`[data-qnum="${windowNum}"]`).toggleClass(`${direction}-fade`);


        if (!action) {
                windowNum++;
                $(".num-input").text(windowNum)
                $(`[data-qnum="${windowNum}"]`).toggleClass("d-none in-fade");
        } else {
                windowNum--;
                $(".num-input").text(windowNum)
                $(`[data-qnum="${windowNum}"]`).toggleClass("d-none in-fade");
                $(`[data-qnum="${windowNum}"]`).removeClass(`${direction}-fade`);
        }
    }, 400);
}

$("#start-button").on("click", function() {
    proceed();
});

$(".back-button").on("click", function() {
    proceed("back");
});

$(".flu").on("click", function() {
    proceed();
    fluCount++;
    lastCounted = "flu";
    console.log("fluCount", fluCount);
})

$(".cold").on("click", function() {
    proceed();
    coldCount++;
    lastCounted = "cold";
    console.log("coldCount", coldCount);
})



