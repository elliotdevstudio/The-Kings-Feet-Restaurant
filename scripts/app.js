
/* sample of the animation running on scroll, for product image/description
    transition: opacity 800ms cubic-bezier(.4,0,.2,1),transform 800ms cubic-bezier(.4,0,.2,1);
    transition-property: opacity, transform;
    transition-duration: 800ms, 800ms;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1), cubic-bezier(0.4, 0, 0.2, 1);
    transition-delay: 0s, 0s;



    data-image-dimensions="1202x1202" data-image-focal-point="0.5,0.5" alt="Screen Shot 2021-06-05 at 4.41.00 PM.png" data-load="false" style="height: 314px; width: 100%; object-position: 50% 50%; object-fit: cover;" data-parent-ratio="1.0" class="" data-image-resolution="750w" src=""></img>
*/

    /*lightbox styling for focused image in gallery 

const navMenuMobile = document.getElementById("navbar-burger");
const navModal = document.getElementById("navModal");
function firstFunction(){
    navModal.style.display ="flex";
}
function secondFunction() {
    
}
function navMenuModal (e) {
    e.preventDefault();
    firstFunction();
    secondFunction();
}

navMenuModal.onclick = navMenuModal;
*/


const navbarBurger = document.getElementById('navbar-burger');
const topBun = document.getElementById('top-bun');
const bottomBun = document.getElementById('bottom-bun');

navbarBurger.addEventListener('click', () => {
    topBun.classList.toggle('active');
    bottomBun.classList.toggle('active');
});

/* SHOW ON SCROLL */

var scroll = window.requestAnimationFrame || 
    function(callback) { window.setTimeout(callback, 1000/60)};

var elementsToShow = document.querySelectorAll('.show-on-scroll');

function loop() {
    elementsToShow.forEach( function (element) {
        if (isElementInViewport(element)) {          
            element.classList.add('is-visible');
        }  else  {
               element.classList.remove('is-visible');
        }
    });
    scroll(loop);
};
loop();

function isElementInViewport(el){
    if (typeof jQuery === "function" && el instanceof jQuery) {
        el = el[0];
    }

var rect = el.getBoundingClientRect();   // this is the wrapper we want to check
    return (
        (rect.top <= 0 && rect.bottom >= 0)
        ||
        (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
             rect.top <= (window.innerHeight || document.documentElement.clientHeight))
        ||
        (rect.top >= 0 && rect.bottom <= (window.innerHeight || 
            document.documentElement.clientHeight))
        );
        }

