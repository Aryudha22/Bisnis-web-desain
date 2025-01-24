// toggle class active
const navbarNav = document.querySelector(".navbar-container");
// action click menu
document.querySelector(".navbar-extra").onclick = () => {
  navbarNav.classList.toggle("active");
};

// close sidebar
const menu = document.querySelector(".navbar-extra");

document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
