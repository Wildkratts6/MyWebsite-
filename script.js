document.addEventListener("DOMContentLoaded", () => {
  // Button alert
  function pressMe() {
    alert("You pressed the button! Great job!");
  }
  const mysteryBtn = document.getElementById("mysteryBtn");
  if (mysteryBtn) {
    mysteryBtn.addEventListener("click", pressMe);
  }

  // Background color change (ignore button clicks)
  document.body.addEventListener("click", (event) => {
    if (event.target === mysteryBtn) return;
    const colors = ["lightblue", "lightgreen", "lavender", "lightpink", "peachpuff", "lightyellow"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
  });

  // Floating emojis
  const emojiContainer = document.getElementById("emojis");
  const emojis = ["🎉", "💥", "✨", "🔥", "🌈", "😎", "🎶"];
  setInterval(() => {
    const emoji = document.createElement("div");
    emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    emoji.style.position = "absolute";
    emoji.style.left = `${Math.random() * 100}%`;
    emoji.style.top = `${Math.random() * 100}%`;
    emoji.style.opacity = 0.7;
    emoji.style.fontSize = "24px";
    emoji.style.animation = `floatUp 4s ease-out forwards`;
    emojiContainer.appendChild(emoji);
    setTimeout(() => emoji.remove(), 4000);
  }, 500);

  // Confetti bursts
  setInterval(() => {
    confetti({
      particleCount: 100,
      spread: 100,
      origin: { y: 0.6 }
