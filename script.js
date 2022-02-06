const bolinha1 = document.getElementById('bolinha1');
const bolinha2 = document.getElementById('bolinha2');
const bolinha3 = document.getElementById('bolinha3');
bolinha1.style.backgroundColor = 'white';
function bolinhaColor(num){
    bolinha1.style.backgroundColor = 'rgba(245, 222, 179, 0.459)';
    bolinha2.style.backgroundColor = 'rgba(245, 222, 179, 0.459)';
    bolinha3.style.backgroundColor = 'rgba(245, 222, 179, 0.459)';
    if(num === 1){
        bolinha1.style.backgroundColor = 'white';
    }
    else if(num === 2){
        bolinha2.style.backgroundColor = 'white';
    }
    else{
        bolinha3.style.backgroundColor = 'white';
    }
}
const carrossel = document.querySelector('.carrossel');
function scrollPhotos(num){
    carrossel.scrollTo(num, 0);
    console.log(carrossel.scrollLeft)
    if(num == 0){
        bolinhaColor(1);
    }else if(num == innerWidth){
        bolinhaColor(2);
    }
    else if(num == innerWidth*2){
        bolinhaColor(3)
    } 
}
let num = 0;
//setInterval(()=> {
//    if(num == 0){
//        num = innerWidth;
//    }
//    else if(num == innerWidth){
//        num = innerWidth*2;
//    }
//    else{
//        num = 0;
//    }
//    scrollPhotos(num)
//}, 10000)
carrossel.addEventListener('scroll', () =>{
    num = carrossel.scrollLeft
    if(carrossel.scrollLeft == 0){
        bolinhaColor(1);
    }else if(carrossel.scrollLeft == innerWidth){
        bolinhaColor(2);
    }
    else if(carrossel.scrollLeft == innerWidth*2){
        bolinhaColor(3)
    } 
})

bolinha1.addEventListener('click', () => {
    scrollPhotos(0);
})
bolinha2.addEventListener('click', () => {
    scrollPhotos(innerWidth);
})
bolinha3.addEventListener('click', () => {
    scrollPhotos(innerWidth*2);
})
