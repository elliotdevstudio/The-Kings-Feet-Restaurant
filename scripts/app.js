var navbarBurger = document.getElementById("navbar-burger");
var topBun = document.getElementById("top-bun");
var bottomBun = document.getElementById("bottom-bun");
var modal = document.getElementById("nav-modal");
var siteWrapper = document.getElementById("main-site-container");
var modalItems = document.getElementById("modal-items-container");
var modalIcons = document.getElementById("modal-icons");
var foodMenuSelector = document.getElementById("food-selector");
var drinkMenuSelector = document.getElementById("drink-selector");
var foodMenu = document.getElementById("food-menu");
var drinkMenu = document.getElementById("drink-menu");
// NAVBAR BURGER toggle
navbarBurger.addEventListener('click', function () {
    topBun.classList.toggle('active');
    bottomBun.classList.toggle('active');
    siteWrapper.classList.toggle('hide-overflow');
    modal.classList.toggle('show')
    setTimeout(()=> {modalItems.classList.toggle('move-up'), modalIcons.classList.toggle('reveal')},80);
});



/* SHOW ON SCROLL */
var scroll = window.requestAnimationFrame ||
    function (callback) { window.setTimeout(callback, 1000 / 60); };
var elementsToShow = document.querySelectorAll('.show-on-scroll');
function loop() {
    elementsToShow.forEach(function (element) {
        if (isElementInViewport(element)) {
            element.classList.add('is-visible');
        }
        else {
            element.classList.remove('is-visible');
        }
    });
    scroll(loop);
}
loop();
function isElementInViewport(el) {
    if (typeof jQuery === "function" && el instanceof jQuery) {
        el = el[0];
    }
    var rect = el.getBoundingClientRect(); // this is the wrapper we want to check
    return ((rect.top <= 0 && rect.bottom >= 0)
        ||
            (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.top <= (window.innerHeight || document.documentElement.clientHeight))
        ||
            (rect.top >= 0 && rect.bottom <= (window.innerHeight ||
                document.documentElement.clientHeight)));
}
drinkMenuSelector.addEventListener('click', () => {
    const foodMenu = document.getElementById("food-menu");
    const drinkMenu = document.getElementById("drink-menu");
    if (foodMenuSelector.classList.contains("selector-is-active")){
        foodMenuSelector.classList.remove("selector-is-active")
        drinkMenuSelector.classList.add("selector-is-active")
    }
    if (drinkMenu.classList.contains("hide")){
        foodMenu.classList.add("hide"),
        drinkMenu.classList.remove("hide");
        console.log("food added");
    }
  });
  
  foodMenuSelector.addEventListener('click', () => {
    const foodMenu = document.getElementById("food-menu");
    const drinkMenu = document.getElementById("drink-menu");
    if (drinkMenuSelector.classList.contains("selector-is-active")){
        drinkMenuSelector.classList.remove("selector-is-active")
        foodMenuSelector.classList.add("selector-is-active")
    }
    if (foodMenu.classList.contains("hide")){
        drinkMenu.classList.add("hide");
        foodMenu.classList.remove("hide");
        console.log("food added");
    }
  });