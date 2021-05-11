
const header = document.querySelector('.header');
window.onload = () => interval();
window.onscroll = function(){
    const top = window.scrollY;
    if(top >= 100){
        header.classList.add('header-scroll');
    } else{
        header.classList.remove('header-scroll');
    }
}

const images = [
    'assets/image1.jpg',
    'assets/image2.jpg',
    'assets/image3.jpg'
]

let counter = 0;
const carouselSlide = document.querySelector('#slide-images');

function moveSlide(direction) {
    if (counter === images.length - 1 && direction === 'next') {
        counter = 0;
        return img();
    }
    if (counter === 0 && direction === 'back') {
        counter = images.length - 1;
        return img();
    }
    direction === 'back' ? counter-- : counter++;
    return img();
}

function interval(){
    setInterval(() => moveSlide('next'),3000); 
} 

function img() {
    return carouselSlide.setAttribute('src', '' + images[counter]);
}
