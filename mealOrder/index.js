let search = document.getElementById("search"),
  sibmit = document.getElementsByClassName("search-btn"),
  random = document.getElementsByClassName("random-btn"),
  mealsEl = document.getElementsById("meals"),
  resultHeading = document.getElementById("result-heading"),
  singleMeal = document.getElementById("single-meal");
//search meal fetch from API
function searchMeal(event) {
  event.preventDefault();

  singleMeal.innerHTML = "";

  //get search term
  let term = search.nodeValue;
}

//event listeners

submit.addEventListener("submit", searchMeal);
