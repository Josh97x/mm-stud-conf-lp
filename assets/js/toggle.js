// logic for NAV TOGGLE
function classToggle() {
  const navs = document.querySelectorAll(".navbar-items");
  console.log(navs);

  navs.forEach((nav) => nav.classList.toggle("navbar-toggleShow"));
}

document
  .querySelector(".navbar-link-toggle")
  .addEventListener("click", classToggle);
