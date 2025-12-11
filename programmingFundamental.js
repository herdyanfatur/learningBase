const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("=== Masukan total baris bintang yang ingin anda tampilkan ===");
rl.question("Total : ", function(total) {
  const n = parseInt(total);    
        function starTriangle(n) {
            for (let i = 1; i <= n; i++) {
                console.log("*".repeat(i));
            }
        }
        starTriangle(n);
        rl.close();
    });

