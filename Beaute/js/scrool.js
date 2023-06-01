$(document).ready(function() {
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll > 0) {
            $(".container-fluid").addClass("container-fluid-scroll");
            $(".navbar-nav").addClass("navbar-nav-scroll");
            $(".text-center h1").addClass("h1-scroll");
        } else {
            $(".container-fluid").removeClass("container-fluid-scroll");
            $(".navbar-nav").removeClass("navbar-nav-scroll");
            $(".text-center h1").removeClass("h1-scroll");
        }
    });
});
