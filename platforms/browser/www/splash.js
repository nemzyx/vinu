if (sessionStorage.getItem('open') == null) {
    sessionStorage.setItem('open', 'true');

    setTimeout(function () {
        splash();
    }, 2000);
}
else {
    setTimeout(function () {
        init(); //this is the acutal init function, which runs after splash screen - or if no splashscreen displayed, runs instantly
        logoInit(); //hacky fix, don't worry about this junk ;)
    }, 0);
}

function splash() {
    $('#clean-logo').css("display", "initial");
    $('#blanket').css("display", "initial");

    $('#logo').css("top", "47%");

    var animation = bodymovin.loadAnimation({
        container: document.getElementById("bm"),
        renderer: 'svg',
        load: true,
        loop: false,
        autoplay: true,
        path: './assets/data.json'
    });

    animation.setSpeed(0.0);

    setTimeout(function () {
        animation.setSpeed(0.94);
    }, 50);

    setTimeout(function () {
        $("#blanket").css("top", "100%");
        $("#bm").css("opacity", "0");
        $("#clean-logo").css("opacity", "1");
    }, 2650);

    setTimeout(function () {
        logoShrink.play();
    }, 2850);

    setTimeout(function () {
        init();
    }, 3200);

    var logoShrink = anime({
        targets: '#logo',
        width: '45%',
        top: '30%',
        autoplay: false,
        easing: 'cubicBezier(.5, -0.6, .07, 1.2)',
        duration: 450
    });
}