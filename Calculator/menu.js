// menu.js

const readline = require("readline");
const rumus = require("./rumus");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("=== Kalkulator Sederhana ===");
console.log("Pilih operator:");
console.log("1. + (Tambah)");
console.log("2. - (Kurang)");
console.log("3. * (Kali)");
console.log("4. / (Bagi)");
console.log("============================");

rl.question("Masukkan pilihan operator (1/2/3/4): ", function(operator) {
  rl.question("Masukkan angka pertama: ", function(a) {
    rl.question("Masukkan angka kedua: ", function(b) {
      a = Number(a);
      b = Number(b);

      let hasil;

      switch (operator) {
        case "1":
          hasil = rumus.tambah(a, b);
          break;
        case "2":
          hasil = rumus.kurang(a, b);
          break;
        case "3":
          hasil = rumus.kali(a, b);
          break;
        case "4":
          hasil = rumus.bagi(a, b);
          break;
        default:
          hasil = "Operator tidak valid!";
      }

      console.log(`Hasil: ${hasil}`);
      rl.close();
    });
  });
});
