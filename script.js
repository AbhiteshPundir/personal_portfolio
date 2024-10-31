var circle= document.querySelector('#circle');
var frame= document.querySelector('.frame');

window.addEventListener('mousemove', function(e){
    // cursor animation using normal js
    // --> circle.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;   
    // cursor animation using gsap
    gsap.to(circle, {
        duration: 0.3,
        x: e.clientX,
        y: e.clientY,
        ease: 'power1.out'
    });
});

//mouse enter frame event
frame.addEventListener('mousemove', function(){
    gsap.to(circle, {
        scale:5
    });
});

//mouse leave frame event
frame.addEventListener('mouseleave', function(){
    gsap.to(circle, {
        scale:1
    });
});

//text color change on hover
frame.addEventListener('mousemove', function(){
    gsap.to('.frame span', {
        color: 'white',
        y: "-5vw"
    });
});
//text color change on mouse leave
frame.addEventListener('mouseleave', function(){
    gsap.to('.frame span', {
        color: 'black',
        y: 0
    });
});