
const mobile_menu = document.querySelector(".mobile-menu");
const nav_bar = document.querySelector(".nav-bar-mobile");

mobile_menu.addEventListener("click",()=>{
	mobile_menu.classList.toggle("menu-mobile-active")
	nav_bar.classList.toggle("active");
})