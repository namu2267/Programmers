// 공배수
// https://school.programmers.co.kr/learn/courses/30/lessons/181936

// 문제 설명
// 정수 number와 n, m이 주어집니다. number가 n의 배수이면서 m의 배수이면 1을 아니라면 0을 return하도록 solution 함수를 완성해주세요.

//if문
function solution(number, n, m) {
  if (number % n === 0 && number % m === 0) {
    return 1;
  } else {
    return 0;
  }
}

// 삼항연산자로 바꿔보기
function solution(number, n, m) {
  return number % n === 0 && number % m === 0 ? 1 : 0;
}
