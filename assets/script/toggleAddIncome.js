const addIncomeForm = document.getElementById("add_income_view");

const login_button = document
  .getElementById("add_income_button")
  .addEventListener("click", function () {
    toggleIncomeView(addIncomeForm);
  });

  const close_login_form = document
  .getElementById("close_add_income")
  .addEventListener("click", function () {
    toggleIncomeView(addIncomeForm);
  });


  function toggleIncomeView(view) {
    view.classList.toggle("add-income-view-toggle");
  }