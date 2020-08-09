/*
    ==================================================
    «             SIMULAREA RAZELOR VERZI            »
    ==================================================
    « Author: Ionica Bizau                           »
    « COPYRIGHT (C) 2013 IONICA BIZAU                »
    « UNDER GNU LICENSE                              »
    ==================================================
*/


$("document").ready(function() {
    $("html").hide().fadeIn(800);
    handlers();
});


function handlers() {
    $(".btn-start").on("click", function() {
        $(".btn-reset").attr("disabled", "");
        $(".btn-start").attr("disabled", "");
        start(function() {
            $(".btn-reset").removeAttr("disabled");
        });
    });

    $(".btn-reset").on("click", function() {
        $(".btn-reset").attr("disabled", "");
        reset(function() {
            $(".btn-start").removeAttr("disabled");
        });
    });
}

/*
    ===========================================
                START, RESET FUNCTIONS
    ===========================================
*/

function start(callback) {

    var sun = $(".sun");

    // animate sky
    setTimeout(function () {
        $.animateGradient(".bg-sky", [82, 0, 255], [255, 204, 0], 7000, 100, function () {});
    }, 6000);

    // animate ground
    setTimeout(function () {
        $.animateGradient(".bg-green", [0, 54, 9], [23, 109, 1], 7000, 100, function () {});
    }, 7000);

    // first sun animation
    sun.animate({"margin": "70px 10px 10px 600px" }, 7000, "linear", function () {

        // sun gradient animation
        $.animateGradient(sun, [255, 255, 181], [255, 92, 0], 7000, 100, function () {});

        // second sun animation
        sun.animate(
            {
                "margin": "190px 10px 10px 800px",
                "width": "95px", "height": "75px"
            }, 7000, "linear", function () {

            // show green ray
            setTimeout(function () {
                $(".raza-verde").fadeIn(1000, function () {
                    setTimeout(function () {

                        // hide green ray
                        $(".raza-verde").fadeOut(1000);
                        setTimeout(function () {
                            setInterval(function () {
                                $(".star").toggle();
                            }, 20);

                            setTimeout(function () {
                                // webkit-linear-gradient(top, rgb(23, 0, 85), rgb(111, 76, 3))
                                $.animateGradient(".bg-sky", [23, 0, 85], [111, 76, 3], 5000, 100, function () {

                                    $(".bordered").fadeOut(2000, function () {
                                        window.location.reload();
                                    });
                                    $(".star").animate({"opacity": "0.00001"}, 2000);
                                    $(".sun").hide();
                                });
                            }, 500);
                        }, 500);
                    }, 1000);
                })
            }, 8000);
            sun.animate({"margin": "250px 10px 10px 850px" }, 8000, "linear", function () {
            });
        });
    });
}

function fade (element, how) {

    if (typeof element === "string") {
        element = $(element);
    }

    element["fade" + how](10, function () {
        if (how === "Out") {
            fade(element, "In");
        }
        else {
            fade(element, "Out");
        }
    });
}

function reset(callback) {
    $(".sun")
        .css("margin", "40px 10px 10px 350px")
        .css("width", "60px")
        .css("height", "60px")
        .css("background", "rgb(255, 255, 181)");

    $(".raza-verde").fadeOut();
    callback();
}
