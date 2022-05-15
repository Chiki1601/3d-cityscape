// Cloudpunk inspired cityscape

// https://blog.spoongraphics.co.uk/videos/video-tutorial-isometric-city-illustration-in-adobe-illustrator

var tl = gsap.timeline({repeat: -1, repeatDelay: 1});
tl.to(".HOVA-car", {duration: .5, opacity: 1});
tl.to(".HOVA-car", {duration: 7, y: -350, x: 600, ease: "none"}, "<");
tl.to(".HOVA-car", {duration: 1, opacity: 0});