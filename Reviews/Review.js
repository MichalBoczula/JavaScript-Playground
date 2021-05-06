const reviews = [
    {
        id: 1,
        name: "susan smith",
        job: "web developer",
        img:
            "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
        text:
            "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
        id: 2,
        name: "anna johnson",
        job: "web designer",
        img:
            "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
        text:
            "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
    {
        id: 3,
        name: "peter jones",
        job: "intern",
        img:
            "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
        text:
            "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    },
    {
        id: 4,
        name: "bill anderson",
        job: "the boss",
        img:
            "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
        text:
            "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
    },
];

let actual = 1;

const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const surprise = document.querySelector(".surprise");
const review = document.querySelector(".review");
const image = document.querySelector(".image");
const name = document.querySelector(".name");
const job = document.querySelector(".job");

function changeReview(action) {
    if (action === 1) {
        if (actual === 4) {
            actual = 1;
        }
        else {
            actual++;
        }
    }
    else if (action === -1) {
        if (actual === 1) {
            actual = 4;
        }
        else {
            actual--;
        }
    }
    else if (action === 0) {
        while (true) {
            const random = Math.floor(Math.random() * 4) + 1;
            if (random === actual) continue;
            actual = random;
            break;
        }
    }
    updateView();
}

function updateView() {
    review.textContent = reviews[actual - 1].text;
    image.src = reviews[actual - 1].img;
    name.textContent = reviews[actual - 1].name;
    job.textContent = reviews[actual - 1].job;
}

window.addEventListener("DOMContentLoaded", updateView);

prev.addEventListener("click", () => changeReview(1));
next.addEventListener("click", () => changeReview(-1));
surprise.addEventListener("click", () => changeReview(0));