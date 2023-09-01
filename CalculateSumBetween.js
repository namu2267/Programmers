/* 두 정수 사이의 합
https://school.programmers.co.kr/learn/courses/30/lessons/12912

문제 설명
두 정수 a, b가 주어졌을 때 a와 b 사이에 속한 모든 정수의 합을 리턴하는 함수, solution을 완성하세요.
예를 들어 a = 3, b = 5인 경우, 3 + 4 + 5 = 12이므로 12를 리턴합니다.
*/

// if문, for문, 삼항연산자
function solution(a, b) {
  let sum = 0;

  if (a < b) {
    for (i = a; i <= b; i++) {
      sum += i;
    }
  } else if (a > b) {
    for (i = a; i >= b; i--) {
      sum += i;
    }
  }

  return a === b ? a : sum;
}

// 위의 코드를 변수를 이용해서 가독성을 높임
function solution(a, b) {
  let sum = 0;
  let start = Math.min(a, b); // 두 정수 중 더 작은 값으로 시작
  let end = Math.max(a, b); // 두 정수 중 더 큰 값으로 종료

  for (let i = start; i <= end; i++) {
    sum += i;
  }

  return sum;
}

// 가우스합계를 이용한 코드

function solution(a, b) {
  return ((a + b) * (Math.abs(a - b) + 1)) / 2;
}

/* 공부내용 정리 블로그
https://hihiha2.tistory.com/165
*/
