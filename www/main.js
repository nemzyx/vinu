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
        $("#burger > #clickBox > #frame").css("top", "50%");
    }, 150);

    var menuOpen = false;

    $("#burger > #clickBox").click(function () {
        if (!menuOpen) {
            openMenu();
            menuOpen = true;
        }
        else {
            closeMenu();
            menuOpen = false;
        }
    });

    searchInteraction();
}

function logoInit() {
    $("#clean-logo").css("opacity", "1");
    $("#clean-logo").css("display", "initial");
    $("#logo").css("width", "45%");
    $("#logo").css("top", "30%");
    $("#clean-logo").css("transform", "translate(0, -50%)");
}



function openMenu() {
    var scale = "-670%";
    $('#burger > #clickBox > #frame > span').css({
        "top": scale,
        "right": scale,
        "left": scale,
        "bottom": scale,
        "background": "var(--dark)"
    });

    $('#menuDim').css("opacity", "0.3");

    $("#burger > #clickBox > #frame > div").each(function (i) {
        if (i == 0) {
            $(this).css({
                "transform": "translate(50%, -50%) rotate(45deg)",
                "top": "50%"
            });
        }

        if (i == 2) {
            $(this).css({
                "transform": "translate(50%, -50%) rotate(-45deg)",
                "top": "50%"
            });
        }

        if (i == 1) {
            $(this).css("opacity", "0");
        }
    });
}

function closeMenu() {
    $('#burger > #clickBox > #frame > span').css({
        "top": "0",
        "right": "0",
        "left": "0",
        "bottom": "0",
        "background": "var(--grey)"
    });

    $('#menuDim').css("opacity", "0");

    $("#burger > #clickBox > #frame > div").each(function (i) {
        if (i == 0) {
            $(this).css({
                "transform": "translate(50%, -50%) rotate(0deg)",
                "top": "35%"
            });
        }

        if (i == 2) {
            $(this).css({
                "transform": "translate(50%, -50%) rotate(0deg)",
                "top": "65%"
            });
        }

        if (i == 1) {
            $(this).css("opacity", "1");
        }
    });
}


function searchInteraction() {
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
}