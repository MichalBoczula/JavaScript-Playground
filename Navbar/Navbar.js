const links = document.querySelector(".links");
const toogleBtn = document.querySelector(".toogleBtn");

function toggleLinks() {
    links.classList.toggle("active");
}

toogleBtn.addEventListener("click", () => {
    toggleLinks()
    toogleBtn.classList.toggle("toogleBtnActive");
});