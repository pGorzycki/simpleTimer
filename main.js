const btn = document.querySelector(".main");
const reset = document.querySelector(".reset");
const timeDiv = document.querySelector(".time div");
let time = 0;
let active = false;
let idInterval;

const start = () => {
    if (!active) {
        active = !active;
        btn.textContent = "Pauza";
        idInterval = setInterval(timer, 10);

    } else {
        active = !active;
        btn.textContent = "Start";
        clearInterval(idInterval)
    }
};

const timer = () => {
    time++;
    timeDiv.textContent = (time / 100).toFixed(2);
};

const erase = () => {
    active = false;
    timeDiv.textContent = "---";
    btn.textContent = "Start";
    clearInterval(idInterval);
    time = 0;
};

btn.addEventListener("click", start);
reset.addEventListener("click", erase);