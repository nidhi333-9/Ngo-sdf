
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



const readMoreBtn = document.querySelector('.read-more-btn');

const text = document.querySelector('.text');

readMoreBtn.addEventListener('click', (e) => {
    text.classList.toggle('show-more')
})

const readMoreBtn1 = document.querySelector('.read-more-btn-1');

const text1 = document.querySelector('.text-1');

readMoreBtn1.addEventListener('click', (e) => {
    text1.classList.toggle('show-more')
})

const readMoreBtn2 = document.querySelector('.read-more-btn-2');

const text2 = document.querySelector('.text-2');

readMoreBtn2.addEventListener('click', (e) => {
    text2.classList.toggle('show-more')
})


const readMoreBtn3 = document.querySelector('.read-more-btn-3');

const text3 = document.querySelector('.text-3');

readMoreBtn3.addEventListener('click', (e) => {
    text3.classList.toggle('show-more')
})


const readMoreBtn4 = document.querySelector('.read-more-btn-4');

const text4 = document.querySelector('.text-4');

readMoreBtn4.addEventListener('click', (e) => {
    text4.classList.toggle('show-more')
})

