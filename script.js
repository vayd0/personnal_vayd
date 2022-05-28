let counterContainer = document.querySelector(".counter");
let visitCount = localStorage.getItem("views");
localStorage.setItem("views", 1);
visitCount = Number(visitCount) + 1;
localStorage.setItem("views", visitCount);
counterContainer.innerHTML = visitCount + " visites";

let loader = document.getElementById("loader");
window.addEventListener("load", function () {
  loader.style.display = "none";
});
