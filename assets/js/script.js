function pintar(color) {
  const ele = document.getElementById("ele1");
  ele.style.backgroundColor = color;
}

const ele = document.getElementById("ele1");
ele.addEventListener("click", function () {
  pintar("yellow");
});
