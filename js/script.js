//feacth the containner elements
let slider = document.getElementsByClassName('container');
// console.log(slider.length);
let dots = document.getElementsByClassName('dot');
console.log(dots);
// fethch the button
let ctrl = document.getElementsByClassName('ctrl');
// console.log(ctrl);

let sliderIndex = 1;

sliderFunction(sliderIndex);

//define the controlFunction
function controlFunction(e){
    sliderFunction(sliderIndex += e);
}
function currentElement(n){
    sliderFunction(sliderIndex = n)
}
function sliderFunction(x){
    if(x > slider.length){sliderIndex = 1}
    if(x < 1){sliderIndex = slider.length }

    // for(let index = 0; index < slider.length; index++){
    //     console.log(slider[index]);
    // }

    for (const sliderTest of slider) {
        sliderTest.style.display = "none";
        //set the fade class
        sliderTest.setAttribute('id', 'fade');
        // console.log(sliderTest);
    }

    for (const dotsData of dots) {
        dotsData.className = dotsData.className.replace(' active', ""); 
        console.log(dotsData);
    }
    slider[sliderIndex - 1].style.display = "block";
    dots[sliderIndex - 1].className += " active";

}