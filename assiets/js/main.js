
if (typeof WOW !== 'undefined') {
  new WOW().init();
} else {
  console.error("WOW.js n'a pas été chargé correctement.");
}

const burguer = document.querySelector(".burguer");
const nav = document.querySelector("nav");


burguer.addEventListener("click", () => {
  
  nav.classList.toggle("active");
  burguer.classList.toggle("active");
});


