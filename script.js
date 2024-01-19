
    console.log('DOM is loaded');
    const nextBtn = document.querySelector('.next-btn');
    const prevBtn = document.querySelector('.prev-btn');
    const slides = document.querySelectorAll('.slide');
    const numberofslides=slides.length;
    let slideNumber = 0;

   nextBtn.onclick=()=>{
    slides.forEach((slide)=>{
slide.classList.remove('active');
    })
    slideNumber++;
    if(slideNumber>(numberofslides-1)){
        slideNumber=0;
    }
    slides[slideNumber].classList.add('active');
   }
