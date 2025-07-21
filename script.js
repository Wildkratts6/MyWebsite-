document.addEventListener("DOMContentLoaded", () => {
  // Button alert
  const mysteryBtn = document.getElementById("mysteryBtn");
  if (mysteryBtn) {
    mysteryBtn.addEventListener("click", () => {
      alert("You pressed the button! Great job!");
    });
  }

  // Background color change (when clicking the background only)
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
    emojiContainer.appendChild(emoji);
    setTimeout(() => emoji.remove(), 4000);
  }, 500);

  // Confetti
  setInterval(() => {
    confetti({
      particleCount: 100,
      spread: 100,
      origin: { y: 0.6 }
    });
  }, 5000);

  // Joke generator
  const jokes = [
    "Why don't programmers like nature? It has too many bugs.",
    "Why do Java developers wear glasses? Because they don't C#.",
    "I would tell you a UDP joke, but you might not get it.",
    "404 joke not found.",
    "To understand recursion, you must first understand recursion."
  ];
  function showJoke() {
    const box = document.getElementById("joke-box");
    const joke = jokes[Math.floor(Math.random() * jokes.length)];
    box.textContent = joke;
  }
  setInterval(showJoke, 4000);
  showJoke();
});
