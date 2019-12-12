var windowNum = 0;

$("#start-button").on("click", function() {
    $(`[data-qnum="${windowNum}"]`).toggleClass("left-fade");

    setTimeout(function() {
        $(`[data-qnum="${windowNum}"]`).toggleClass("d-none");
        $(`[data-qnum="${windowNum}"]`).toggleClass("left-fade");

        windowNum++;

        $(`[data-qnum="${windowNum}"]`).toggleClass("d-none in-fade");
        $(`[data-qnum="${windowNum}"]`).toggleClass("in-fade");
    }, 400);
})

$(".back-button").on("click", function() {
    $(`[data-qnum="${windowNum}"]`).toggleClass("right-fade");

    setTimeout(function() {
        $(`[data-qnum="${windowNum}"]`).toggleClass("d-none");
        $(`[data-qnum="${windowNum}"]`).toggleClass("right-fade");

        windowNum--;

        $(`[data-qnum="${windowNum}"]`).toggleClass("d-none in-fade");
        $(`[data-qnum="${windowNum}"]`).toggleClass("in-fade");
    }, 400);
})