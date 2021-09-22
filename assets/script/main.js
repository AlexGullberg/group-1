const loginView = document.getElementById("login_view");
const registerView = document.getElementById("register_view");

const login_button = document
  .getElementById("login_button")
  .addEventListener("click", function () {
    toggleViews(loginView);
  });
const close_login = document
  .getElementById("close_login")
  .addEventListener("click", function () {
    toggleViews(loginView);
  });

const register_button = document
  .getElementById("register_button")
  .addEventListener("click", function () {
    toggleViews(registerView);
  });

const close_register = document
  .getElementById("close_register")
  .addEventListener("click", function () {
    toggleViews(registerView);
  });

function toggleViews(view) {
  view.classList.toggle("login-view-toggle");
}

/*
function toggleLoginView() {
    const loginView = document.getElementById("login_view");
    loginView.classList.toggle("login-view-toggle")
} 

*/
/*
function toggleLoginView() {
    if (loginView.style.visibility === "hidden") {
        loginView.style.visibility = "visible";
        loginView.style.opacity = "1";
    } else {
        loginView.style.visibility = "hidden";
    }
} */

/*
function toggleRegisterView() {
    registerView.classList.toggle("login-view-toggle");
}
*/
/*
function toggleRegisterView() {
    if (registerView.style.visibility === "hidden") {
        registerView.style.visibility = "visible";
    } else {
        registerView.style.visibility = "hidden";
    }
} */
