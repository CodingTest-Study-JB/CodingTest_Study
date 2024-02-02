// 배열에 값을 쓰는 문제
const input = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");

// 한 줄에 변수 여러개 표현 가능!
const [N, M] = input[0].split(" ").map(v => +v);

// 크기가 N인 arr 배열에 0으로 채워넣기 
let arr = new Array(N).fill(0);

for (let i = 1; i <= M; i++) {
    let [start, end, k] = input[i].split(" ").map(v => +v);
    for (start; start <= end; start++) {
        // 바구니는 1번부터 시작이지만 배열의 인덱스는 0부터 시작.
        arr[start-1] = k;
    }
}

// join 메서드를 이용해 배열 요소 꺼내기
console.log(arr.join(" "));