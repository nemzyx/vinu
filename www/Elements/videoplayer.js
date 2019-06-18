import { format } from "url";

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

function playVideo() {
    video.play();
    $("#play-btn").css("opacity", "0");
    $("#overlay").css("opacity", "0");
}

function pauseVideo() {
    video.pause();
    $("#play-btn").css("opacity", "1");
    $("#overlay").css("opacity", overlayOpacity);
}

//set duration
video.onloadedmetadata = function () {
    $('#nav > #end').html(formatTime(video.duration));
};

var current_time = $('#nav > #current');

function update() {
    if (video.currentTime != null) {
        current_time.html(formatTime(video.currentTime));
    }
    window.requestAnimationFrame(update);
}
window.requestAnimationFrame(update);


function formatTime(input) {
    var output = parseFloat(Math.round(input * 100) / 100).toFixed(2);
    if (output < 10) {
        output = "0" + output.toString();
    }
    var time = output.replace(".", ":");
    return time;
}