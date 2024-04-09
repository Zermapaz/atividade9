const launchDate = new Date(2024, 11, 31, 23, 59, 59).getTime();

const x = setInterval(function() {

  const now = new Date().getTime();
  
  const distance = launchDate - now;
  
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
  document.getElementById("countdown").innerHTML = `Lançamento em ${days}d ${hours}h ${minutes}m ${seconds}s`;
  
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "Lançamento realizado!";
  }
}, 1000);