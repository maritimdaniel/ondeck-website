const menu = document.querySelector(".menu");
const productSmall = document.querySelector(".productSmall");
const closeBtn = document.querySelector(".close-button");

menu.addEventListener("click", function () {
  if (!menu.classList.contains("active")) {
    menu.classList.add("active");
    productSmall.style.display = "block";
  }
});

closeBtn.addEventListener("click", function () {
  productSmall.style.display = "none";
  menu.classList.remove("active");
});
