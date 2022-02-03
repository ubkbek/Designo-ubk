var elHeader = document.querySelector(".header")
var elBtn = document.querySelector(".header__btn")


elBtn.addEventListener("click", () => {
    elHeader.classList.toggle("header--active")
})