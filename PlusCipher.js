/* 자릿수 더하기
https://school.programmers.co.kr/learn/courses/30/lessons/12931

문제 설명
자연수 N이 주어지면, N의 각 자릿수의 합을 구해서 return 하는 solution 함수를 만들어 주세요.
예를들어 N = 123이면 1 + 2 + 3 = 6을 return 하면 됩니다.

*/

function solution(n) {
  return n
    .toString()
    .split("")
    .reduce((acc, cur) => acc + Number(cur), 0);
}

/*
문제를 보고 split을 통해서 자리수마다 잘라야겠다고 생각했다.
split은 string타입에만 사용할 수 있는데, n은 숫자타입으로 들어오므로 가장 처음으로 string으로 타입을 변환한다.
그런 다음 split을 통해서 하나하나 자르고, reduce를 통해서 각 자리수를 더한다.
*/
