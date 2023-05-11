//tablice kolorow borderow dla elementow wysuwajacych sie 
const borderLeft= ['czer'];
const borderRight = ['roz'];

//funkcja wysuwajaca elemnty projektow z lewej po przescrollowaniu w dol oraz chowaniu ich
function revealLeft(){
    var reveals = document.querySelectorAll('.reveal-left');
    for(var i = 0; i < reveals.length; i++){
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 100;

        if(elementTop < windowHeight - elementVisible){
            reveals[i].classList.add('active');
            reveals[i].classList.add(borderLeft[i]);
        } else {
            reveals[i].classList.remove("active");
            reveals[i].classList.remove(borderLeft[i]);
        }       
}}
//funkcja wysuwajaca elemnty projektow z prawej po przecrollowaniu w dol oraz chowaniu ich
function reavealRight(){
    var reveals = document.querySelectorAll(".reveal-right");
    for(var i = 0; i < reveals.length; i++){
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if(elementTop < windowHeight - elementVisible){
            reveals[i].classList.add("active");
            reveals[i].classList.add(borderRight[i]);
        } else {
            reveals[i].classList.remove("active");
            reveals[i].classList.remove(borderRight[i]);
        }
    }
}
function reveal(){
    revealLeft();
    reavealRight();
}


window.addEventListener('scroll', reveal);

//skrypt na karuzele obrazkow
const carousel = function(id){
const track = document.querySelector(id + '.carousel-track');
const slides = Array.from(track.children);
const nextButton = document.querySelector(id + '.carousel-right-btn');
const prevButton = document.querySelector(id +'.carousel-left-btn');
const dotsMap = document.querySelector(id +'.carousel-map');
const dots = Array.from(dotsMap.children);

const slideWidth = slides[0].getBoundingClientRect().width;

const setSlidePosition = (slide, index) =>{
    slide.style.left = slideWidth * index + 'px';
}
slides.forEach(setSlidePosition);

const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = 'translatex(-' +  targetSlide.style.left; + ')';
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
}

const updateDots = (currentDot, targetDot) => {
    currentDot.classList.remove('current-slide');
    targetDot.classList.add('current-slide');
}

const hideShowButtons = (slides, prevButton, nextButton, targetIndex) => {
    if(targetIndex === 0){
        prevButton.classList.add('is-hidden');
        nextButton.classList.remove('is-hidden');
    } else if(targetIndex === slides.length - 1){
        prevButton.classList.remove('is-hidden');
        nextButton.classList.add('is-hidden');
    } else {
        prevButton.classList.remove('is-hidden');
        nextButton.classList.remove('is-hidden');
    }
}
//left button
prevButton.addEventListener('click', e =>{
    const currentSlide = track.querySelector('.current-slide');
    const prevSlide = currentSlide.previousElementSibling;
    const currentDot = dotsMap.querySelector('.current-slide');
    const prevDot = currentDot.previousElementSibling;
    const prevIndex = slides.findIndex(slide => slide === prevSlide);
    
    moveToSlide(track, currentSlide, prevSlide);
    updateDots(currentDot, prevDot);
    hideShowButtons(slides, prevButton, nextButton, prevIndex);
})
//right button
nextButton.addEventListener('click', e =>{
    const currentSlide = track.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;
    const currentDot = dotsMap.querySelector('.current-slide');
    const nextDot = currentDot.nextElementSibling;
    const nextIndex = slides.findIndex(slide => slide === nextSlide);

    moveToSlide(track, currentSlide, nextSlide);
    updateDots(currentDot, nextDot);
    hideShowButtons(slides, prevButton, nextButton, nextIndex)
});
//map indicators
dotsMap.addEventListener('click', e =>{
    const targetDot =  e.target.closest('button');
    if(!targetDot) return;

    const currentSlide = track.querySelector('.current-slide');
    const currentDot = dotsMap.querySelector('.current-slide');
    const targetIndex = dots.findIndex(dot => dot === targetDot);
    const targetSlide = slides[targetIndex];

    moveToSlide(track, currentSlide, targetSlide);
    updateDots(currentDot, targetDot);
    hideShowButtons(slides, prevButton, nextButton, targetIndex);

})
};
carouselA = carousel('#carousel-a');
carouselB = carousel('#carousel-b');