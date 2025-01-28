// const hamb = document.querySelector(".hamb")
// const navMenu = document.querySelector(".nav-menu")

// hamb.addEventListener("click",() => {
//     hamb.classList.toggle("active");
//     navMenu.classList.toggle("active");
// })



// const hamb = document.querySelector(".hamb");
// const navMenu = document.querySelector(".nav-menu");

// hamb.addEventListener("click", () => {
//   hamb.classList.toggle("active");
//   navMenu.classList.toggle("active");
// });


const hamb = document.querySelector(".hamberger");
const navMenu = document.querySelector(".nav-menu");

hamb.addEventListener("click", () => {
hamb.classList.toggle("active");  // Toggle the 'active' class for hamburger
 navMenu.classList.toggle("active");  // Toggle the 'active' class for nav menu
});
