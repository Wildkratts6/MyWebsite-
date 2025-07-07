function pressMe() {
  alert("You pressed the button! Great job!");
}

document.body.addEventListener("click", () => {
  const colors = ["lightblue", "lightgreen", "lavender", "lightpink", "peachpuff", "lightyellow"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
});
