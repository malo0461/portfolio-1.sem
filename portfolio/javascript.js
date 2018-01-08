$(document).ready(fadeInBody);

function fadeInBody() {
    $(".container").addClass("body_fade_in");

    $(".inspiration").animate({
        'opacity': '0'
    }, 1);
}

$(window).scroll(function () {

    $(".hidden").each(function (i) {

        var bottom_of_object = $(this).offset().top + $(this).outerHeight();
        var bottom_of_window = $(window).scrollTop() + $(window).height();

        if (bottom_of_window > bottom_of_object) {

            $(this).animate({
                'opacity': '1'
            }, 3000);
        }
    });

    $(".inspiration").animate({
        'opacity': '1'
    }, 3000);
});
