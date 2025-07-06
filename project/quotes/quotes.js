const quotes = [
  {
    text: "The best way to get started is to quit talking and begin doing.",
    author: "Walt Disney"
  },
  {
    text: "Success is not in what you have, but who you are.",
    author: "Bo Bennett"
  },
  {
    text: "Don’t let yesterday take up too much of today.",
    author: "Will Rogers"
  },
  {
    text: "It's not whether you get knocked down, it's whether you get up.",
    author: "Vince Lombardi"
  },
  {
    text: "If you are working on something exciting, it will keep you motivated.",
    author: "Steve Jobs"
  },
  {
    text: "Push yourself, because no one else is going to do it for you.",
    author: "Anonymous"
  }
];

function showQuote() {
  const random = Math.floor(Math.random() * quotes.length);
  const quote = quotes[random];

  document.getElementById("quoteText").textContent = `"${quote.text}"`;
  document.getElementById("quoteAuthor").textContent = `– ${quote.author}`;

  // Add re-animation
  const card = document.getElementById("quoteCard");
  card.classList.remove("fade-in");
  void card.offsetWidth; // Trigger reflow
  card.classList.add("fade-in");
}
