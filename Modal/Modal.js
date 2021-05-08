const openBtn = document.querySelector(".openBtn");
const modal = document.querySelector(".modal");
const closeBtn = document.querySelector(".closeBtn");
const mainContainer = document.querySelector(".mainContainer");

openBtn.addEventListener("click", () => {
    modal.classList.add("modalActive");
    mainContainer.classList.add("mainContainerActive");
});

closeBtn.addEventListener("click", () => {
    modal.classList.remove("modalActive");
    mainContainer.classList.remove("mainContainerActive");
})