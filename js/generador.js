const baseUrl = document.getElementById("baseUrl");
const guest = document.getElementById("guest");
const passes = document.getElementById("passes");
const result = document.getElementById("result");

function generateLink() {
  const cleanBase = baseUrl.value.trim().replace(/\/?$/, "/");
  const url = new URL(cleanBase);
  url.searchParams.set("pases", passes.value);

  if (guest.value.trim()) {
    url.searchParams.set("invitado", guest.value.trim());
  }

  result.textContent = url.toString();
  return url.toString();
}

document.getElementById("generateBtn").addEventListener("click", generateLink);

document.getElementById("copyBtn").addEventListener("click", async () => {
  const link = result.textContent.startsWith("http") ? result.textContent : generateLink();

  try {
    await navigator.clipboard.writeText(link);
    alert("Enlace copiado.");
  } catch {
    prompt("Copia el enlace:", link);
  }
});
