/*
간단한 논리 연산
https://school.programmers.co.kr/learn/courses/30/lessons/181917

문제 설명
boolean 변수 x1, x2, x3, x4가 매개변수로 주어질 때, 다음의 식의 true/false를 return 하는 solution 함수를 작성해 주세요.
(x1 ∨ x2) ∧ (x3 ∨ x4)
*/

function solution(x1, x2, x3, x4) {
  return (x1 || x2) && (x3 || x4) ? true : false;
}

/*
이름처럼 간단한 논리연산문제이다.
∨ : or
∧ : and
이기때문에 연산자만 자바스크립트에 맞게 변환하면 쉽게 풀 수 있다.

개선할점: 삼항연산자를 통해 true, false값을 지정했는데 굳이 그렇게 할 필요없이 바로 식을 return하면 true과 false값이 나온다.
*/
