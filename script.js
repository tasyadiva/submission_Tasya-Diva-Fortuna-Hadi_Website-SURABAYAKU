// toggle class active
const navbarNav = document.querySelector(".navbar-nav");

// mengaktifkan humberger menu
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// menghilangkan nav di samping hamburger menu
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
