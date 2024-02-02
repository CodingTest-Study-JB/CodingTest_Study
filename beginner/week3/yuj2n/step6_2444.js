// 🌟
const input = require('fs').readFileSync('/dev/stdin').toString().trim();
const N = parseInt(input);

let stars = [];

// 위 5줄
for (let i = 1; i <= N; i++) {
    for (let j = 1; j < N+i; j++) {
        if (j <= N-i) {
            stars += " ";
        } else {
            stars += "*";
        }
    }
    stars += "\n";
}

// 아래 4줄
for (let i = N; i > 1; i--) {
    for (let j = 1; j < N+i-1; j++) {
        if (j <= N-i+1) {
            stars += " ";
        } else {
            stars += "*";
        }
    }
    stars += "\n";
}

console.log(stars);