
    $(".portfolio-btn").click(function() {
        $("html, body").animate({
            scrollTop: $('#portfolio').offset().top -= 45,
        }, 1000);
    })
    $(".about-btn").click(function() {
        $("html, body").animate({
            scrollTop: $('#about').offset().top -=45,
        }, 1000);
    })
    $(".contact-btn").click(function() {
        $("html, body").animate({
            scrollTop: $('#contact').offset().top -=45,
        }, 1000);
    })
