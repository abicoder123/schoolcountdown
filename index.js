
const end = new Date("December 25, 2026").getTime();

setInterval(function() {
  const now = new Date().getTime();
  const diff = end - now;

  const days = Math.floor(diff / 1000 / 60 / 60 / 24);

  document.getElementById("timer").textContent =
    days + " days left";
}, 1000);
