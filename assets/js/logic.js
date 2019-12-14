var windowNum = 0;
var fluCount = 0;
var sickCount = 0;
var answerArr = [];
var lastCounted;

var windowArr = [
    {
        qNum: 1,
        qText: "Do you have a sore throat?",
        qAnswer: "B"
    },
    {
        qNum: 2,
        qText: "Do you have a runny nose?",
        qAnswer: "B"
    },
    {
        qNum: 3,
        qText: "Do you have a headache?",
        qAnswer: "F"
    },
    {
        qNum: 4,
        qText: "Are you experiencing body aches/pains/chills?",
        qAnswer: "F"
    },
    {
        qNum: 5,
        qText: "Are you experiencing nausea/dizziness?",
        qAnswer: "F"
    },
    {
        qNum: 6,
        qText: "Do you have a fever?",
        qAnswer: "F"
    },
    {
        qNum: 7,
        qText: "Have you been coughing?",
        qAnswer: "F"
    },
    {
        qNum: 8,
        qText: "Did your symptoms come on suddenly?",
        qAnswer: "F"
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
        
        if (ele.qAnswer === "B") {
            main.append(
                $("<hr>"), $("<p>").addClass("button-display my-3 text-center").append(
                    $("<button>").addClass("btn btn-info mr-4 next sick").text("Yes"),
                    $("<button>").addClass("btn btn-info next healthy").text("No")
                ), 
            );
        } else if (
            (ele.qAnswer !== "B")
            &&
            (ele.qNum < windowArr.length)
        ) {
            main.append(
                $("<hr>"), $("<p>").addClass("button-display my-3 text-center").append(
                    $("<button>").addClass("btn btn-info mr-4 next flu").text("Yes"),
                    $("<button>").addClass("btn btn-info next cold").text("No")
                ), 
            );
        } else {
            main.append(
                $("<hr>"), $("<p>").addClass("button-display my-3 text-center").append(
                    $("<button>").addClass("btn btn-info mr-4 next flu results").text("Yes"),
                    $("<button>").addClass("btn btn-info next cold results").text("No")
                ), 
            );
        }

        main.append(
            $("<div>").addClass("d-flex justify-content-start").append($("<button>").addClass("btn btn-danger back").text("Back"))
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

$(".next").on("click", function() {
    proceed();

    if ($(this).hasClass("sick")) {
        sickCount++;
        console.log("sickCount", sickCount);
        answerArr.push("sick");
        console.log("answerArr", answerArr);
    } else if ($(this).hasClass("flu")) {
        fluCount++;
        console.log("fluCount", fluCount);
        answerArr.push("flu");
        console.log("answerArr", answerArr);
    } else if ($(this).hasClass("healthy")) {
        answerArr.push("healthy");
        console.log("answerArr", answerArr);
    } else if ($(this).hasClass("cold")) {
        answerArr.push("cold");
        console.log("answerArr", answerArr);
    }
})

$(".back").on("click", function() {
    proceed("back");
    
    if (answerArr[answerArr.length - 1] === "sick") {
        answerArr.pop();
        console.log('answerArr', answerArr);
        sickCount--;
        console.log("sickCount", sickCount);
    } 
    else if (answerArr[answerArr.length - 1] === "flu") {
        fluCount--;
        console.log("fluCount", fluCount);
        answerArr.pop();
        console.log("answerArr", answerArr);
    } else if (answerArr[answerArr.length - 1] === "healthy") {
        answerArr.pop();
        console.log("answerArr", answerArr);
    } else if (answerArr[answerArr.length - 1] === "cold") {
        answerArr.pop();
        console.log("answerArr", answerArr);
    }
    
});