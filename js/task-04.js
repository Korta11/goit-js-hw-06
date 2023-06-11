const btn = {
  decrement: document.querySelector("[data-action='decrement']"),
  increment: document.querySelector("[data-action='increment']"),
  span: document.querySelector("#value"),
  counter: document.querySelector("#counter "),
};

let counterValue = 0;
const increment = () => {
  counterValue += 1;
  document.getElementById("value").textContent = counterValue;
};

const decrement = () => {
  counterValue -= 1;
  document.getElementById("value").textContent = counterValue;
};

btn.decrement.addEventListener("click", decrement);
btn.increment.addEventListener("click", increment);
