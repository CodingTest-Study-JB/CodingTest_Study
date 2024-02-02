// 배열의 값을 교환하는 문제
const input = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(v => +v);

// 배열 선언 후 각 바구니 번호에 맞게 값 넣기
let arr = new Array(N);
for (let i = 0; i < N; i++) {
    arr[i] = i+1;
}

// 바구니는 1부터, 배열은 0부터 시작하기 때문에 자릿수 맞춰주기.
for (let k = 0; k < M; k++) {
    let [i, j] = input[k+1].split(" ").map(v => +v);
    let save = arr[i-1];
    arr[i-1] = arr[j-1];
    arr[j-1] = save;
}

// 배열을 공백넣어 출력하는 쉬운 방법!
console.log(arr.join(" "));