const about = document.querySelector(".about"); 
const btns = document.querySelectorAll(".tab-btn");

btns.forEach(ele => {
    ele.addEventListener("click", function(e) {
        btns.forEach(btn => {
            btn.classList.remove("active");
        });

        about.querySelectorAll(".content")
            .forEach(cont => {
                cont.classList.remove("active");
            });

        e.target.classList.add("active");
        about.querySelector(`#${e.target.dataset.id}`)
            .classList.add("active");
    });
});