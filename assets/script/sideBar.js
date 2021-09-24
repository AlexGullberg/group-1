const navBarArea = document.getElementById("navbar_area");

const arrow = document
  .getElementById("arrow_right")
  .addEventListener("click", function () {
    toggleSideBar(navBarArea);
  });

  function toggleSideBar(view) {
    view.classList.toggle("hide-sidebar");
  }