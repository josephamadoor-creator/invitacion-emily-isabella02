document.addEventListener("DOMContentLoaded", () => {
  const EVENT_DATE = new Date("2026-11-07T16:30:00-06:00").getTime();
  const ALLOWED_PASSES = [1, 2, 3, 4, 5, 6, 7, 9];

  const params = new URLSearchParams(window.location.search);
  const passes = Number(params.get("pases"));
  const guest = (params.get("invitado") || "").trim();

  const numberEl = document.getElementById("numeroPases");
  const validEl = document.getElementById("textoPasesValidos");

  if (ALLOWED_PASSES.includes(passes)) {
    numberEl.textContent = String(passes).padStart(2, "0");
    validEl.innerHTML = `Esta invitación es válida<br>para ${passes} ${passes === 1 ? "persona" : "personas"}.`;
  } else {
    numberEl.textContent = "—";
    validEl.innerHTML = "No fue posible consultar<br>los pases de esta invitación.";
  }

  const whatsappBtn = document.getElementById("whatsappBtn");
  const whatsappNumber = "527203001959"; // CAMBIA ESTE NÚMERO
  const guestText = guest ? ` Soy ${guest}.` : "";
  const passesText = ALLOWED_PASSES.includes(passes) ? ` Mi invitación indica ${passes} ${passes === 1 ? "pase" : "pases"}.` : "";
  const message = `Hola, confirmo mi asistencia a los XV años de Emily Isabella.${guestText}${passesText}`;
  whatsappBtn.href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  const updateCountdown = () => {
    const distance = EVENT_DATE - Date.now();
    const safe = Math.max(distance, 0);

    document.getElementById("days").textContent = String(Math.floor(safe / 86400000)).padStart(2, "0");
    document.getElementById("hours").textContent = String(Math.floor((safe % 86400000) / 3600000)).padStart(2, "0");
    document.getElementById("minutes").textContent = String(Math.floor((safe % 3600000) / 60000)).padStart(2, "0");
    document.getElementById("seconds").textContent = String(Math.floor((safe % 60000) / 1000)).padStart(2, "0");
  };

  updateCountdown();
  setInterval(updateCountdown, 1000);

  const music = document.getElementById("musica");
  const musicBtn = document.getElementById("musicBtn");

  musicBtn.addEventListener("click", async () => {
    try {
      if (music.paused) {
        await music.play();
        musicBtn.textContent = "❚❚";
      } else {
        music.pause();
        musicBtn.textContent = "♫";
      }
    } catch {
      alert("Agrega un archivo llamado musica.mp3 dentro de la carpeta assets.");
    }
  });

  document.getElementById("goConfirmBtn").addEventListener("click", () => {
    document.getElementById("confirmar").scrollIntoView({ behavior: "smooth" });
  });

  const progress = document.getElementById("progressBar");
  window.addEventListener("scroll", () => {
    const total = document.documentElement.scrollHeight - window.innerHeight;
    const percent = total > 0 ? (window.scrollY / total) * 100 : 0;
    progress.style.width = `${percent}%`;
  });
});
