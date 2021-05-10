const date = document.querySelector("#date");
const nav = document.querySelector("#nav");
const topLink = document.querySelector(".top-link");
const scrollLinks = document.querySelectorAll(".scroll-link");
const linksContainer = document.querySelector(".links-container");

date.innerHTML = new Date().getFullYear();

window.addEventListener("scroll", () => {
    const navHeight = nav.getBoundingClientRect().height;
    const offsetHeight = window.pageYOffset;
    if (offsetHeight > navHeight) {
        nav.classList.add("fixed-nav");
    }
    else {
        nav.classList.remove("fixed-nav");
    }
});

scrollLinks.forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();

        if (!nav.classList.contains("fixed-nav"))
        {
            nav.classList.add("fixed-nav");
        }
        
        const ele = document.querySelector(`${this.getAttribute("href")}`)
        const location = ele.offsetTop;
        const navHeight = nav.getBoundingClientRect().height;

        window.scrollTo({
            left: 0,
            top: location - navHeight
        });
    });
})