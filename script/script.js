window.onbeforeunload = () =>{
    window.scrollTo(0, 0);
}

window.addEventListener('scroll', arrow);
function arrow() {
    let backBtn = document.querySelector('.back-to-top');

    if(window.scrollY < 100){ 
       backBtn.style.opacity = 0; 
    } else {
        backBtn.style.opacity = 1;
    }

    if(backBtn.style.opacity === 0){
        backBtn.style.display = 'none';
    } else if(backBtn.style.opacity === 1) {
        backBtn.style.display = 'flex';

    }

}

let settingBtn = document.querySelector('.setting');
let neonBtn = document.querySelector('.neon');
let animationBtn = document.querySelector('.animation');
let neonToggle = document.querySelectorAll('.neon-toggle');
let animToggle = document.querySelectorAll('.anim-toggle');

settingBtn.addEventListener('click', () =>{
    console.log('setting');
    settingBtn.setAttribute('state', "on");  
    settingBtn.classList.toggle('rotate');
    neonBtn.classList.toggle('active-nav');
    animationBtn.classList.toggle('active-nav');
});

neonBtn.addEventListener('click', () =>{
    if(neonBtn.getAttribute('state') == "on"){
        neonBtn.setAttribute('state', "off");
        neonBtn.querySelector('img').src = "img/neon_off.png";
        neonBtn.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
        for(let i = 0; i < neonToggle.length; i++){
            neonToggle[i].classList.toggle('neon-off');
        }
    } else if(neonBtn.getAttribute('state') == "off"){
        neonBtn.setAttribute('state', "on");
        neonBtn.style.backgroundColor = "rgba(255, 255, 255, 1)";
        neonBtn.querySelector('img').src = "img/neon_on.png";
        for(let i = 0; i < neonToggle.length; i++){
            neonToggle[i].classList.toggle('neon-off');
        }
    }
});
animationBtn.addEventListener('click', () =>{
    if(animationBtn.getAttribute('state') == "on"){
        animationBtn.setAttribute('state', "off");
        animationBtn.querySelector('img').src = "img/animation_off.png";
        animationBtn.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
        for(let i = 0; i < animToggle.length; i++){
            animToggle[i].classList.toggle('anim-off');
        }    
    } else if(animationBtn.getAttribute('state') == "off"){
        animationBtn.setAttribute('state', "on");
        animationBtn.querySelector('img').src = "img/animation_on.png";
        animationBtn.style.backgroundColor = "rgba(255, 255, 255, 1)";
        for(let i = 0; i < animToggle.length; i++){
            animToggle[i].classList.toggle('anim-off');
        }
    }
});
