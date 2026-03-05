const end = new Date("March 14, 2026 00:00:00").getTime();

setInterval(function() {
  const now = new Date().getTime();
  const diff = end - now;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  document.getElementById("timer").textContent =
    days + "d " +
    hours + "h " +
    minutes + "m " +
    seconds + "s";
}, 1000);
