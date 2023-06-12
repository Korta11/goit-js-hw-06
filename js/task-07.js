const input = document.querySelector("input#font-size-control");
const span = document.querySelector("span#text");

input.addEventListener("input", (size) => {
  span.style.fontSize = `${size.target.value}px`;
});
