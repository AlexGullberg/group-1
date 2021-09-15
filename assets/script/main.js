const login_button = document.getElementById("login_button").addEventListener("click", toggleLoginView);
const close_login = document.getElementById("close_login").addEventListener("click", toggleLoginView);


function toggleLoginView() {
    const loginView = document.getElementById("login_view");
    if (loginView.style.display === "none") {
        loginView.style.display = "block";
    } else {
        loginView.style.display = "none";
    }
  } 



const register_button = document.getElementById("register_button").addEventListener("click", toggleRegisterView);
const close_register = document.getElementById("close_register").addEventListener("click", toggleRegisterView);


function toggleRegisterView() {
    const registerView = document.getElementById("register_view");
    if (registerView.style.display === "none") {
        registerView.style.display = "block";
    } else {
        registerView.style.display = "none";
    }
  } 