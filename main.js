let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
   navbar.classList.toggle('active');
}
window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}
const sr = ScrollReveal({
    distance: '60px',
    duration : 2500,
    dealy: 400,
    reset: true
})

sr.reveal('.text',{dealy: 200, origin: 'top'})
sr.reveal('.form-container form',{dealy: 800, origin: 'left'})
sr.reveal('.heading',{dealy: 600, origin: 'top'})
sr.reveal('.ride-container .box',{dealy: 600, origin: 'top'})
sr.reveal('.services-container .box',{dealy: 600, origin: 'top'})
sr.reveal('.about-container .box',{dealy: 600, origin: 'top'})
sr.reveal('.reviews-container',{dealy: 600, origin: 'top'})
sr.reveal('.newsletter .box',{dealy: 400, origin: 'bottom'})