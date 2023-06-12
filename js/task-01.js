const ulList = document.querySelectorAll(".item");
console.log(`Number of categories: ${ulList.length}`);

ulList.forEach((item) => {
  console.log(`Category: ${item.firstElementChild.textContent}`);
  console.log(`Elements: ${item.lastElementChild.children.length}`);
});
