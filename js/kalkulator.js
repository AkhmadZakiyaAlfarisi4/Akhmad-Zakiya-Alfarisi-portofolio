const formKalkulator = document.querySelector("#form-kalkulator");
const hasilKalkulator = document.querySelector("#hasil-kalkulator");

function predikat(nilai) {
  if (nilai >= 90) return "A";
  if (nilai >= 80) return "B";
  if (nilai >= 70) return "C";
  return "D";
}

formKalkulator.addEventListener("submit", (event) => {
  event.preventDefault();

  const nilai = [
    document.querySelector("#nilai-tugas").valueAsNumber,
    document.querySelector("#nilai-uts").valueAsNumber,
    document.querySelector("#nilai-uas").valueAsNumber,
  ];

  if (nilai.some((angka) => !Number.isFinite(angka) || angka < 0 || angka > 100)) {
    hasilKalkulator.textContent = "Masukkan semua nilai antara 0 sampai 100.";
    return;
  }

  const rataRata = nilai.reduce((total, angka) => total + angka, 0) / nilai.length;
  hasilKalkulator.textContent =
    `Rata-rata: ${rataRata.toFixed(2)} | Predikat: ${predikat(rataRata)}`;
});
