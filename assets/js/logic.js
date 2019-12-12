var windowNum = 0;
var fluCount = 0;
var coldCount = 0;
var lastCounted;

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