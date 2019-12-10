$(document).ready(function(){
    // $('.owl-carousel').owlCarousel({
    //     loop:true,
    //     items:1,
    //     // autoplay: true
    // })

    $("#NavDrawer .drawer__header .drawer__close button").click(function () {
        $("#NavDrawer").removeClass("open");
        $(".cart-overlay").removeClass("open");
    });
    $(".click-menu").click(function () {
        $("#NavDrawer").addClass("open");
        $(".cart-overlay").addClass("open");
    });
    $(".icon-plus").click(function () {
        $(this).parent().parent().addClass("open");
        $(this).parent().find('.icon-minus').css({ "display": "inline" });
        $(this).css({ "display": "none" });
    });
    $(".icon-minus").click(function () {
        $(this).parent().parent().removeClass("open");
        $(this).css({ "display": "none" });
        $(this).parent().find('.icon-plus').css({ "display": "inline" });
    });

    var slideIndex = 0;
    showSlides();

    function showSlides() {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        var dots = document.getElementsByClassName("dot");
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) { slideIndex = 1 }
        for (i = 0; i < dots.length; i++) {
            console.log(dots[i].className.replace(" active", ""));
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
        // setTimeout(showSlides, 8000); // Change image every 8 seconds
    }
});