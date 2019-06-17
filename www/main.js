function init() {
    $("#burger").css("opacity", "0");
    $("#search").css("opacity", "0");
    $("#burger").css("display", "initial");
    $("#search").css("display", "initial");

    var searchShow = anime({
        targets: '#search',
        opacity: '1',
        duration: 1
    });

    var searchSlide = anime({
        targets: '#search#search > #clickBox',
        bottom: ['18%', '20%'],
        easing: 'cubicBezier(.4,.01,.28,1.44)',
        duration: 350
    });

    var burgerShow = anime({
        targets: '#burger',
        opacity: '1'
    });

    setTimeout(function () {
        $("#burger > #clickBox > #frame").css("transform", "translate(-50%, -50%) scale(0.9, 0.9)");
    }, 150);
}

function logoInit() {
    $("#clean-logo").css("opacity", "1");
    $("#clean-logo").css("display", "initial");
    $("#logo").css("width", "45%");
    $("#logo").css("top", "30%");
    $("#clean-logo").css("transform", "translate(0, -50%)");
}

$("#burger > #clickBox").click(function () {
    openMenu();
});

$("#frame").click(function () {
    openMenu();
});

$("#menu > #exit").click(function () {
    closeMenu();
});

function openMenu() {
    $("#menu").css({
        "top": "20px",
        "bottom": "20px",
        "right": "20px",
        "left": "20px",
        "opacity": "1",
        "border-radius": "20px"
    });
}

function closeMenu() {
    $("#menu").css({
        "top": "75%",
        "bottom": "15%",
        "right": "42%",
        "left": "42%",
        "opacity": "0",
        "border-radius": "300px"
    });
}

$("#search > #clickBox").click(function () {
    searchMove.play();
    burgerMove.play();
    $("#search > #clickBox > div").css("width", "120%");
    $("#search > #clickBox > div > input").css("width", "180%");
    $("#search > #clickBox > div").css("transform", "translate(-50%, -50%) scale(0.7, 0.7)");
});

$("#logo").click(function () {
    searchMoveBack.play();
    burgerMoveBack.play();
    $("#search > #clickBox > div").css("width", "45%");
    $("#search > #clickBox > div > input").css("width", "60%");
    $("#search > #clickBox > div").css("transform", "translate(-50%, -50%) scale(1, 1)");
    document.getElementById("search-input").value = "";
});

var searchMove = anime({
    targets: "#search > #clickBox > div",
    top: "20%",
    left: "50%",
    autoplay: false,
    easing: 'cubicBezier(.32,.01,.22,1)',
    duration: 300
});

var burgerMove = anime({
    targets: "#frame",
    top: "150%",
    autoplay: false,
    easing: 'cubicBezier(.32,.01,.22,1)',
    duration: 300
});

var searchMoveBack = anime({
    targets: "#search > #clickBox > div",
    top: "55%",
    left: "50%",
    autoplay: false,
    easing: 'cubicBezier(.32,.01,.22,1)',
    duration: 300
});

var burgerMoveBack = anime({
    targets: "#frame",
    top: "50%",
    autoplay: false,
    easing: 'cubicBezier(.32,.01,.22,1)',
    duration: 300
});