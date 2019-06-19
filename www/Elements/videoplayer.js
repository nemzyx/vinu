var overlayOpacity = "0.8";
$("#overlay").css("opacity", overlayOpacity);

var video = document.getElementById('video');

video.addEventListener("click", function () {
    if (video.paused) {
        playVideo();
    }
    else {
        pauseVideo();
    }
});

video.addEventListener("ended", function () {
    pauseVideo();
});

var drag = false;

function playVideo() {
    video.play();
    $("#play-btn").css("opacity", "0");
    $("#overlay").css("opacity", "0");

    setTimeout(function () {
        if (!video.paused) {
            $("#videoplayer > #nav").css("opacity", "0");
            setTimeout(function () {
                $("#videoplayer > #timeline > #handle").css("transform", "translate(-50%, -50%) scale(0, 0)");
            }, 60);
        }
    }, 4000);
}

function pauseVideo() {
    video.pause();
    $("#play-btn").css("opacity", "1");
    $("#overlay").css("opacity", overlayOpacity);
    $("#videoplayer > #timeline > #handle").css("transform", "translate(-50%, -50%) scale(3.5, 3.5)");
    setTimeout(function () {
        $("#videoplayer > #nav").css("opacity", "1");
    }, 100);
}

var current_time = $('#nav > #current');
var graphicOffset = 0.02;

video.onloadedmetadata = function () {
    $('#nav > #end').html(formatTime(video.duration));
    var percentage = ((video.currentTime / video.duration) + graphicOffset) * (100 - (graphicOffset * 200));
    $('#videoplayer > #timeline > #handle').css("left", percentage + "%");
    $('#videoplayer > #timeline > #after').css("right", 100 - percentage + "%");
};

function update() {
    if (video.currentTime != null) {
        if (!video.paused) {
            current_time.html(formatTime(video.currentTime));
            var percentage = ((video.currentTime / video.duration) + graphicOffset) * (100 - (graphicOffset * 200));
            $('#videoplayer > #timeline > #handle').css("left", percentage + "%");
            $('#videoplayer > #timeline > #after').css("right", 100 - percentage + "%");
        }
    }
    window.requestAnimationFrame(update);
}
window.requestAnimationFrame(update);

function updateTime(e) {
    if (drag) {
        console.log(e);
    }
}


function formatTime(input) {
    var output = parseFloat(Math.round(input * 1) / 100).toFixed(2);
    if (output < 10) {
        output = "0" + output.toString();
    }
    var time = output.replace(".", ":");
    return time;
}