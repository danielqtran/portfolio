$(".navMobile").click(function () {
    $(".navMobileList").toggleClass("active");
    if ($(".menuButton").hasClass("fa-bars")) {
        $(".menuButton").removeClass("fa-bars");
        $(".menuButton").addClass("fa-times");
    }
    else {
        $(".menuButton").removeClass("fa-times");
        $(".menuButton").addClass("fa-bars");
    }
});

// $(".navMobile").click(function () {
//     $(".navMobileList").slideToggle();
//     if ($(".menuButton").hasClass("fa-bars")) {
//         $(".menuButton").removeClass("fa-bars");
//         $(".menuButton").addClass("fa-times");
//     }
//     else {
//         $(".menuButton").removeClass("fa-times");
//         $(".menuButton").addClass("fa-bars");
//     }
// });