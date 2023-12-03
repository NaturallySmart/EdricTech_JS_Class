

let currentSlideIndex = 0;

const mySlides = document.querySelectorAll('.mySlides');
const nextbutton =document.querySelector('#nextBtn');
const prevbutton = document.querySelector('#prevBtn');


function showslide(index){
mySlides.forEach(slides=>{
slides.style.display = 'none'

})
console.log(mySlides[index].style.display='block')
//mySlides[index].style.display = 'block'
}

function nextslide(){
    currentSlideIndex = (currentSlideIndex +1) % mySlides.length;
    showslide(currentSlideIndex);

}

function prevslide(){
    //currentSlideIndex = (currentSlideIndex -1 + mySlides.lenght) % mySlides.length;
    currentSlideIndex =(currentSlideIndex -1 + mySlides.length) % mySlides.length;
    showslide(currentSlideIndex);
    
}

showslide(currentSlideIndex)

nextbutton.addEventListener('click',nextslide)
prevbutton.addEventListener('click', prevslide)

