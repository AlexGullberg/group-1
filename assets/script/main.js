const login_button = document.getElementById("login_button").addEventListener("click", toggleLoginView);


function toggleLoginView() {
    const loginView = document.getElementById("login_view");
    if (loginView.style.display === "none") {
        loginView.style.display = "block";
    } else {
        loginView.style.display = "none";
    }
  }