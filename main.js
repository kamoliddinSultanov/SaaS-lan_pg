const hamburger = document.querySelector(".hamburger");
const navlinks = document.querySelector(".nav-menu");
const btnnav = document.querySelector(".btnnav");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navlinks.classList.toggle("active");
    btnnav.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(e => e.addEventListener("click", () =>{
    hamburger.classList.remove("active");
    navlinks.classList.remove("active");
    btnnav.classList.remove("active");
}))