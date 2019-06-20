$("#burger").click(function () {
    alert("Open burger menu");
});

setTimeout(function () {
    showMoreArrow.play();
    moreArrowAnim.play();
}, 3000);

var moreArrowAnim = anime({
    targets: '#moreArrow',
    scale: 0.8,
    translateY: 10,
    autoplay: false,
    loop: true,
    direction: 'alternate',
    easing: 'cubicBezier(.55, 0,.39, 1)',
    duration: 600
});

var showMoreArrow = anime({
    targets: '#moreArrow',
    opacity: 1,
    autoplay: false,
    easing: 'cubicBezier(.55, 0,.39, 1)',
    duration: 2000
});