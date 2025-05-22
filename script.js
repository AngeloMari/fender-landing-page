function navToggle() {
  const menu = document.getElementById("mobile-nav-bar");
  menu.classList.toggle("open");
}

// Handle click on mobile nav links
document
  .querySelectorAll("#mobile-nav-bar .mobile-nav-link")
  .forEach((link) => {
    link.addEventListener("click", function (e) {
      setTimeout(() => {
        document.getElementById("mobile-nav-bar").classList.remove("open");
      }, 200);
    });
  });

// Close mobile menu when clicking outside
document.addEventListener("click", function (event) {
  const menu = document.getElementById("mobile-nav-bar");
  const button = document.querySelector(".icon");

  const isClickInsideMenu = menu.contains(event.target);
  const isClickOnButton = button.contains(event.target);

  if (!isClickInsideMenu && !isClickOnButton) {
    menu.classList.remove("open");
  }
});

// Smoothly scroll always
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", function (e) {
    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      e.preventDefault();
      targetElement.scrollIntoView({ behavior: "smooth" });
      history.pushState(null, null, targetId);
    }
  });
});
