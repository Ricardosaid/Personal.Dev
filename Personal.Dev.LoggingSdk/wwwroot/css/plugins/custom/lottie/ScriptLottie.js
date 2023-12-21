
var animation = bodymovin.loadAnimation({
    container: document.getElementById('layout'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: lottieJson,

});

layout.addEventListener('complete', function () {
    animation.play();

});