// Counter js                           DOM => dom manipulation

// first way
// const incrementBtn = document.querySelector(".increment");
// const counterValue = document.querySelector(".counter span");
// const decrementBtn = document.querySelector(".decrement");
// const resetBtn = document.querySelector(".reset");

// let count = 0;

// increment
// function increment() {
//   count++;
//   counterValue.textContent = count;
// }
// incrementBtn.addEventListener("click", increment);

// decrement
// function decrement() {
//   count--;
//   counterValue.textContent = count;
// }

// decrementBtn.addEventListener("click", decrement);

// reset
// function reset() {
//   count = 0;
//   counterValue.textContent = count;
// }

// resetBtn.addEventListener("click", reset);

// -------------------------------------------------------------------

// best way with less line of code

const buttons = document.querySelectorAll(".btn");
const counterValue = document.querySelector(".counter span");
let count = 0;

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    // classList => which one of the classes?
    const classList = btn.classList;
    if (classList.contains("increment")) count++;
    else if (classList.contains("decrement")) count--;
    else count = 0;

    // set simple red and green color for +numbers and - numbers
    if (count > 0) counterValue.style.color = "green";
    else counterValue.style.color = "red";

    counterValue.textContent = count;
  });
});
