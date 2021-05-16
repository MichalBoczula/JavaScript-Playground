const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".nextBtn");
const prevBtn = document.querySelector(".prevBtn");
let actual = 0;

slides.forEach(function (slide, index) {
    if(index === 0)
    {
        slide.style.left = `${0}%`;
    }
    else 
    {
        slide.style.left = `${100}%`;
    }
});

nextBtn.addEventListener("click", () => {
    actual++;

    const slide = slides[actual];
    slide.style.left = `${0}%`;
    if (slide.previousElementSibling)
    {
        slide.previousElementSibling.style.left = `-${100}%`;
    }
    if (slide.nextElementSibling)
    {
        slide.nextElementSibling.style.left = `${100}%`;
    }

    if (actual === slides.length-1) {
        nextBtn.style.display = "none";
    }
    else {
        nextBtn.style.display = "block";
        prevBtn.style.display = "block";
    }
});

prevBtn.addEventListener("click", () => {
    actual--;

    const slide = slides[actual];
    slide.style.left = `${0}%`;
    if (slide.previousElementSibling)
    {
        slide.previousElementSibling.style.left = `-${100}%`;
    }
    if (slide.nextElementSibling)
    {

        slide.nextElementSibling.style.left = `${100}%`;
    }

    if (actual === 0) {
        prevBtn.style.display = "none";
    }
    else
    {
        nextBtn.style.display = "block";
        prevBtn.style.display = "block";
    }
});