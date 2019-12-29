$(document).ready(function(){

    function bike() {
        console.log(this.name);
      }
      
      var name = "Ninja";
      var obj1 = { name: this, bike: bike };
      var obj2 = { name: this, bike: bike };
      
    //   bike();           // "Ninja"
      console.log("TCL: obj1.name", obj1.name)
    //   obj2.bike();      // "Gixxer"
    // hide mobile menu
    $("#nav_drawer .drawer_header .drawer_close button").click(function () {
        $("#nav_drawer").removeClass("open");
        $(".body_overlay").removeClass("open");
    });
    // show mobile menu
    $(".icon_show_mobile_menu").click(function () {
        $("#nav_drawer").addClass("open");
        $(".body_overlay").addClass("open");
    });
    // show sub menu
    $(".icon-plus").click(function () {
        $(this).parent().parent().addClass("open");
        $(this).parent().find('.icon-minus').css({ "display": "inline" });
        $(this).css({ "display": "none" });
    });
    // hide sub menu
    $(".icon-minus").click(function () {
        $(this).parent().parent().removeClass("open");
        $(this).css({ "display": "none" });
        $(this).parent().find('.icon-plus').css({ "display": "inline" });
    });

    //  show slider
    // start index of first slide item is 0;
    var slideIndex = 0;
    // slides is array of slide items
    var slides = document.getElementsByClassName("slide_item");
    if(slides.length !== 0){
        showSlides();
    }
    function showSlides() {
        var i;
        var dots = document.getElementsByClassName("dot");
        // hide all slides
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) { slideIndex = 1 }
        // assign all dots is unactive
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        // assign index of current slide item
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
        // setTimeout(showSlides, 8000); // Change image every 8 seconds
    }
});