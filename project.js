// first (basic) button
const button = document.querySelector("button")
const counter = document.getElementById("counter")
button.addEventListener("click", () => {
let currentCount = parseInt(counter.innerHTML);
    currentCount++;
    counter.innerHTML = currentCount;
});
