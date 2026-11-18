const tombolTema = document.querySelector("#tombol-tema");
const temaGelapTersimpan = localStorage.getItem("tema") === "gelap";

document.body.classList.toggle("gelap", temaGelapTersimpan);

if (tombolTema) {
  tombolTema.textContent = temaGelapTersimpan ? "Mode Terang" : "Mode Gelap";
  tombolTema.setAttribute("aria-pressed", String(temaGelapTersimpan));

  tombolTema.addEventListener("click", () => {
    const temaGelapAktif = document.body.classList.toggle("gelap");
    localStorage.setItem("tema", temaGelapAktif ? "gelap" : "terang");
    tombolTema.textContent = temaGelapAktif ? "Mode Terang" : "Mode Gelap";
    tombolTema.setAttribute("aria-pressed", String(temaGelapAktif));
  });
}
