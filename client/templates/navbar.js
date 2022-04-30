
var i = 0;
var images = [];
var time = 1000;

images[0] = '../images/carousel1.jpg';
images[1] = '../images/carousel4.jpg';
images[2] = '../images/carousel6.jpg';

//Change Image

function changeImg() {
    document.slide.src = images[i];

    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }
    setTimeout("changeImg()", time)
}

window.onload = changeImg;