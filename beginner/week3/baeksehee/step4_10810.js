/*
문제
도현이는 바구니를 총 N개 가지고 있고, 각각의 바구니에는 1번부터 N번까지 번호가 매겨져 있다.
또, 1번부터 N번까지 번호가 적혀있는 공을 매우 많이 가지고 있다. 
가장 처음 바구니에는 공이 들어있지 않으며, 바구니에는 공을 1개만 넣을 수 있다.

도현이는 앞으로 M번 공을 넣으려고 한다. 
도현이는 한 번 공을 넣을 때, 공을 넣을 바구니 범위를 정하고, 정한 바구니에 모두 같은 번호가 적혀있는 공을 넣는다. 
만약, 바구니에 공이 이미 있는 경우에는 들어있는 공을 빼고, 새로 공을 넣는다. 공을 넣을 바구니는 연속되어 있어야 한다.

공을 어떻게 넣을지가 주어졌을 때, M번 공을 넣은 이후에 각 바구니에 어떤 공이 들어 있는지 구하는 프로그램을 작성하시오.
*/

/* 
입력값 해석
첫째 줄 
N = 바구니 갯수를 나타냄(바구니 각각에 번호 있음 1부터 N까지)
M = 공을 넣을 횟수
나머지 줄
i = 시작 바구니 번호
j = 끝 바구니 번호
k = 넣을 공의 번호
*/

/*바구니에는 최소 0개에서 1개의 공이 들어있어야 함*/

const fs = require("fs");
const input = fs
  .readFileSync("./txt/step4_10810.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input[0].split(" ").map(Number);

//  시작 바구니부터 끝 바구니들이 어떤 숫자를 가지고 있는지 배열로 담음
let resultArray = [];

//  인덱스 0은 바구니 1번째와 같음
//  인덱스 N-1은 N번째와 같음
//  모든 바구니를 숫자 0으로 초기화
//  fll을 사용하는 다른 방법도 있나봄
for (let a = 0; a < N; a++) {
  resultArray[a] = 0;
}

for (let b = 1; b <= M; b++) {
  const [i, j, k] = input[b].split(" ").map(Number);

  for (let c = i; c <= j; c++) {
    resultArray[c - 1] = k;
  }
}

console.log(resultArray.join(" "));