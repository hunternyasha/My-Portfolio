(function($) {
    "use strict";

    // 1. Custom Cursor JS
    document.getElementsByTagName("body")[0].addEventListener("mousemove", function (n) {
        e.style.left = n.clientX + "px",
            e.style.top = n.clientY + "px"
    });
    var
        e = document.getElementById("pointer");

    // $(document).mousemove(function (e) {

    //     $(".theme-bg-color")
  
    //     $(".pointer-href")
    //         .on("mouseenter", function () {
    //             $('.pointer').addClass("href")
    //         })
    //         .on("mouseleave", function () {
    //             $('.pointer').removeClass("href")
    //         })

    //     $(".pointer-social")
    //         .on("mouseenter", function () {
    //             $('.pointer').addClass("social")
    //         })
    //         .on("mouseleave", function () {
    //             $('.pointer').removeClass("social")
    //         })
  
  
    // });

    $(window).on("load", function() {
        var t = $(".portfolio-container");
        t.isotope({
            filter: ".all",
            animationOptions: {
                duration: 750,
                easing: "linear",
                queue: !1
            }
        }), $(".filters a").click(function() {
            $(".filters .active").removeClass("active"), $(this).addClass("active");
            var i = $(this).attr("data-filter");
            return t.isotope({
                filter: i,
                animationOptions: {
                    duration: 750,
                    easing: "linear",
                    queue: !1
                }
            }), !1
        });
    });


  

})(window.jQuery);