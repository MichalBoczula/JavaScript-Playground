const questions = document.querySelectorAll(".question");

questions.forEach(que => {
    const btn = que.querySelector(".question-btn")
    console.log(btn);
    btn.addEventListener("click", () => {
        const text = que.querySelector(".question-text");
        text.classList.toggle("question-text-active");
        que.classList.toggle("active");
    });
});
