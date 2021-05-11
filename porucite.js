const sliderPromotion = {
    image: 'assets/image1.jpg',
    promotion: {
        title: 'Nova kolekcija',
        subtitle: 'Za dvan zimski san',
        actionButton: {
            textBtn: 'Porucite odmah',
            color: '#E9698E'
        },   
    },
};
function action(promotion) {
    const {title, subtitle, actionButton: {textBtn,color}} = promotion.promotion;
    const mainTitle = document.querySelector('#id-promocija');
    mainTitle.innerHTML = title;
    const mainSubtitle = document.querySelector('.zimski-san');
    mainSubtitle.innerHTML = subtitle;
    const textBtnM = document.querySelector('#btn-prom');
    textBtnM.textContent = textBtn;
    const colorM = document.querySelector('#btn-prom');
    colorM.style.backgroundColor = color;
    console.log(promotion);
}


action(sliderPromotion);







// type ColorType = 'pink' | 'green' | 'navyblue';

// type PositionType = 'top' | 'bottom' | 'left' | 'right' | 'center';

// type SliderType = {
//     image: string;
//     promoton?: {
//         title: String;
//         subtitle?: String;
//         actonButton?: {
//             text: String;
//             color?: ColorType;
//         },
//         position: PositonType;
//     }
// }

