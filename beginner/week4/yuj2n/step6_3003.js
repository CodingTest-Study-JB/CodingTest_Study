// ♟️
const input = require('fs').readFileSync('/dev/stdin').toString().trim();

const arr = [1, 1, 2, 2, 2, 8];
const chess = input.split(" ");
const r_arr = [];

// if(요구값>주어진값) elseif(요구값<주어진값)으로 경우를 나눠주어야 하는 줄 알았음
// 하지만 어떤 케이스든 요구값 - 주어진 값을 하면 정답이 나오더라~ 
for (let i = 0; i < 6; i++) {
    r_arr[i] = arr[i] - chess[i];
}

console.log(r_arr.join(" "));
// arr이 기본 세팅(요구값)
// chess가 주어진 값  
