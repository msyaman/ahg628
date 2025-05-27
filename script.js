const startDate = new Date("2024-01-26T08:00:00");

function updateTime() {
  const now = new Date();
  let diff = now - startDate;

  const ms = diff % 1000;
  diff = Math.floor(diff / 1000);

  const seconds = diff % 60;
  diff = Math.floor(diff / 60);

  const minutes = diff % 60;
  diff = Math.floor(diff / 60);

  const hours = diff % 24;
  diff = Math.floor(diff / 24);

  const days = diff % 30;
  diff = Math.floor(diff / 30);

  const months = diff % 12;
  const years = Math.floor(diff / 12);

  document.getElementById("time").innerText =
    `${years} yıl ${months} ay ${days} gün ` +
    `${hours} saat ${minutes} dakika ${seconds} saniye ${ms} milisaniye`;
}

setInterval(updateTime, 100);
updateTime();

const text = "01 AHG 628 aramızdan ayrılalı geçen süre:";
let i = 0;
function typeWriter() {
  if (i < text.length) {
    document.getElementById("typed-text").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 75);
  }
}
typeWriter();

function playMusic() {
  const audio = document.getElementById("bg-music");
  audio.play().catch((e) => {
    console.warn("Tarayıcı müzik çalmayı engelledi:", e);
  });
}
