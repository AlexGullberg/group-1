const loginView = document.getElementById("login_view");
const login_button = document.getElementById("login_button").addEventListener("click", toggleLoginView(loginView));
const close_login = document.getElementById("close_login").addEventListener("click", toggleLoginView(loginView));


const register_view = document.getElementById("register_view").addEventListener("click", toggleLoginView);
const register_button = document.getElementById("register_button").addEventListener("click", toggleLoginView);

function toggleLoginView(view) {
    if (view.style.display === "none") {
        view.style.display = "block";
    } else {
        view.style.display = "none";
    }
  }