// logic for NAV TOGGLE
function classToggle() {
  const navs = document.querySelectorAll(".Navbar__Items");
  console.log(navs);

  navs.forEach((nav) => nav.classList.toggle("Navbar__ToggleShow"));
}

document
  .querySelector(".Navbar__Link-toggle")
  .addEventListener("click", classToggle);
