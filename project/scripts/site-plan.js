const mobileMenu = document.querySelector('#mobile-menu');
const navMenu = document.querySelector('.nav-menu');

mobileMenu.addEventListener('click', () => {
    navMenu.classList.toggle('active');

     navMenu.classList.toggle('is-active');

});


 // get current year
const currentYear = new Date().getFullYear();
// inject into the element
document.getElementById("year").textContent = currentYear;
// select the element and update it text
document.getElementById("lastModified").textContent = document.lastModified;


