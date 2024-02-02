/*
문제
영어 대소문자와 공백으로 이루어진 문자열이 주어진다. 
이 문자열에는 몇 개의 단어가 있을까? 
이를 구하는 프로그램을 작성하시오. 
단, 한 단어가 여러 번 등장하면 등장한 횟수만큼 모두 세어야 한다.
*/

//  첫 번째 제출 틀림
//  이유는 input이 공백일 때 words는 [""] 이기 때문
//  즉, 입력값이 없을 때 단어의 수가 의도치 않게 1로 반환됨
//  나는 조건 연산자로 해결한 사람의 코드를 참고해서 고침

//  이 문제에 의문 점 특수 케이스
//  입력값으로 예시로 나오지 않은 것에서 테스트가 통과가 되지 않았을 때 어떻게 해야 하지
//  예를 들어, 입력값이 없을 때를 내가 어떻게 생각해야 하지?
//  틀렸을 때 뭐가 틀렸는지 찾기 어렵다.

const fs = require("fs");
const input = fs.readFileSync("./txt/step5_1152.txt").toString().trim();
const words = input.split(" ");

console.log(words[0] === "" ? 0 : words.length);
