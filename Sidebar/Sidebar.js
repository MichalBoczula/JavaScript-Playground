const bar1 = document.querySelector(".bar1");
const bar2 = document.querySelector(".bar2");
const bar3 = document.querySelector(".bar3");
const nav = document.querySelector(".nav");
const toogleBtn = document.querySelector(".toogleBtn");

toogleBtn.addEventListener("click", () => {
    toogleBtn.classList.toggle("toogleBtnActive");
    bar1.classList.toggle("bar1Active");
    bar2.classList.toggle("bar2Active");
    bar3.classList.toggle("bar3Active");
    nav.classList.toggle("navActive");
});