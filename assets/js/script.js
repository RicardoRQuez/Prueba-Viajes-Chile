window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 0) {
    navbar.classList.add("navbar-solid");
  } else {
    navbar.classList.remove("navbar-solid");
  }
});


