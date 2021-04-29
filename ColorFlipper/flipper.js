const btn = document.querySelector("#main-btn");
const body = document.querySelector("body");
const color = document.querySelector("#main-color");
const hex = document.querySelector("#hex");
const rgb = document.querySelector("#rgb");
let flag = "rgb";

/*RGB*/
function randomRGBColors() {
    const rgbs = [];
    rgbs.push(Math.floor(Math.random() * 255));
    rgbs.push(Math.floor(Math.random() * 255));
    rgbs.push(Math.floor(Math.random() * 255));
    return rgbs;
}

function setColorRGB(rgbArr) {
    color.textContent = `rgb(${rgbArr[0]}, ${rgbArr[1]}, ${rgbArr[2]})`
    body.style.backgroundColor = `rgb(${rgbArr[0]}, ${rgbArr[1]}, ${rgbArr[2]})`;
}
/*HEX*/
function randomHEXColors() {
    const hexMarks = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
    let hexColor = '';
    let counter = 0

    while (counter < 6) {
        const num = Math.floor(Math.random() * 15);
        const mark = hexMarks[num].toString();
        hexColor += (mark);
        counter++;
    }
    return hexColor;
}

function setColorHEX(hexColor) {
    color.textContent = `#${hexColor}`;
    body.style.backgroundColor = `#${hexColor}`;
}

/*Event*/
hex.addEventListener("click", () => {
    alert("You chose HEX colors to random");
    flag = "hex";
});

rgb.addEventListener("click", () => {
    alert("You chose RGB colors to random");
    flag = "rgb";
});

btn.addEventListener("click", () => {
    if (flag === "rgb") {
        setColorRGB(randomRGBColors());
    }
    else if (flag === "hex") {
        setColorHEX(randomHEXColors());
    }
});