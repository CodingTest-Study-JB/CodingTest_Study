// 🔄
const input = require('fs').readFileSync("/dev/stdin").toString().trim();

const word = input.split("");
let palindrome = 0;
// 한번 팰린드롬이 아니면 if문을 탈출하게 하는 역할의 변수 생성!
let check = 1;

for (let i = 0; i < word.length/2; i++) {
    // word.length가 5인 경우 4번째 배열과 비교해야하므로 -1 처리
    if (word[i] == word[word.length-i-1] && check == 1) {
        palindrome = 1;
    } else {
        palindrome = 0;
        check = 0;
        continue;
    }
}

console.log(palindrome);