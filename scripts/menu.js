const foodMenuSelector = document.getElementById("food-selector");
const drinkMenuSelector = document.getElementById("drink-selector");
const foodMenu = document.getElementById("food-menu");
const drinkMenu = document.getElementById("drink-menu");

//  NAVBAR BURGER

const navbarBurger = document.getElementById("navbar-burger");
const topBun = document.getElementById("top-bun");
const bottomBun = document.getElementById("bottom-bun");

// NAVBAR BURGER toggle
navbarBurger.addEventListener('click', () => {
    topBun.classList.toggle('active');
    bottomBun.classList.toggle('active');
});


//  MENU PAGE SELECTORS 

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