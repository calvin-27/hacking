// Matrix Effect
const canvas = document.getElementById('matrix');
const ctx = canvas.getContext('2d');
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
let katakana = "アァイィウヴエカガキクグケゲコゴサザシスズセゼソタダチッヂツヅテデトナニヌネノハバパヒフヘホマミムメモヤユヨラリルレロワンABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
katakana = katakana.split("");
let fontSize = 14;
let columns = canvas.width / fontSize;
let drops = new Array(Math.floor(columns)).fill(1);

function drawMatrix() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#0f0";
  ctx.font = fontSize + "px monospace";
  for (let i = 0; i < drops.length; i++) {
    let text = katakana[Math.floor(Math.random() * katakana.length)];
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);
    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }
    drops[i]++;
  }
}
setInterval(drawMatrix, 33);

// Form Submission
document.getElementById("accessForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const userId = document.getElementById("userId").value;
  const deposit = document.getElementById("deposit").value;
  const status = document.getElementById("status");
  let countdown = 10;

  status.innerHTML = `Status: Berhasil! Menuju website dalam <span id="count">${countdown}</span> detik...`;
  const interval = setInterval(() => {
    countdown--;
    document.getElementById("count").innerText = countdown;
    if (countdown === 0) {
      clearInterval(interval);
      window.location.href = "https://mancingduit31607.com/"; // GANTI LINK SESUAI TUJUAN
    }
  }, 1000);
});

// Terminal Withdraw Simulation
const terminal = document.getElementById("terminal-log");
const fakeUsers = ["Agus", "Dewi", "Rizal", "Budi", "Tina", "Joko", "Linda", "Ujang", "Ken", "Sari"];
function getRandomAmount() {
  const val = Math.floor(Math.random() * 9 + 1) * 10000;
  return `Rp ${val.toLocaleString("id-ID")}`;
}
function addFakeLog() {
  const name = fakeUsers[Math.floor(Math.random() * fakeUsers.length)];
  const amount = getRandomAmount();
  terminal.innerHTML += `<br>> ${name} berhasil withdraw sebesar ${amount}`;
  terminal.scrollTop = terminal.scrollHeight;
}
setInterval(addFakeLog, 4000);
