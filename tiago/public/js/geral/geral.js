$(window).load(function () {
    // Loading
    $("#status").delay(200).fadeOut();
    $("#preloader").delay(300).fadeOut("slow");
    $("body").delay(500).css({ overflow: "visible" });

    // ScrollReveal
    ScrollReveal().reveal('.scrollReveal', {
        origin: 'top',
        distance: '60px',
        easing: 'ease-in-out',
        delay: 240,
        duration: 800,
        interval: 240,
        reset: true
    });

    ScrollReveal().reveal('.scrollRevealJob', {
        origin: 'top',
        distance: '60px',
        easing: 'ease-in-out',
        delay: 240,
        duration: 800,
        interval: 240,
        reset: true
    });
});
