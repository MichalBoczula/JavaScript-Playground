const increase = document.querySelector(".increase");
const decrease = document.querySelector(".decrease");
const reset = document.querySelector(".reset");
const actualNum = document.querySelector(".actual-num");

actualNum.textContent = 0;

function checkActualValue() {
    if (actualNum.textContent > 0) {
        actualNum.classList.add("positive");
        actualNum.classList.remove("negative");
    }
    else if (actualNum.textContent < 0) {
        actualNum.classList.add("negative");
        actualNum.classList.remove("positive");
    }
    else
    {
        actualNum.classList.remove("positive");
        actualNum.classList.remove("negative");
    }
}

increase.addEventListener("click", () => {
    actualNum.textContent++;
    checkActualValue();
});
decrease.addEventListener("click", () => {
    actualNum.textContent--
    checkActualValue();
});
reset.addEventListener("click", () => {
    actualNum.textContent = 0;
    checkActualValue();
});