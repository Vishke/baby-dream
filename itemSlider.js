const slider = document.querySelector('.image-wrapper');
const sliderImg = document.querySelectorAll('.image-wrapper img');
const firstImg = document.querySelector('#sl-img1');

let index = 0;
let size = sliderImg[0].clientWidth;

function moveFwd() { 
        index ++;
        slider.style.transform = 'translateX(' + (-size*index)  + 'px)';
        if(index > 6) {
            return index = 0;
        }
}

function moveImg(move) {
    // if(move === 'next' && index === sliderImg.length-1) {
    //     index = 0;   
    // }
    if(move==='next') {
        for(i=0;i<6;i++){
            slider.classList.add('slideOutLeft');
        }
    }
   
    if(move === 'back') {
        slider.style.transform = 'translateX(' + (-size*index)  + 'px)';
        
    }
   
     move === 'back' ? index-- : index++;
    
};
// function moveImg(move) {
//     if (index === slider.length - 1 && move === 'next') {
//         index = 0;
//         return arrImg();
//     }
//     if (index === 0 && move === 'back') {
//         index = slider.length - 1;
//         return arrImg();
//     }
//     move === 'back' ? index-- : index++;
//         return arrImg(); 
// }

// function arrImg() {
//     return slider.setAttribute('src', '' + imgs[index]);
// }
