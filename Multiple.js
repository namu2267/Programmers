// n의 배수
// https://school.programmers.co.kr/learn/courses/30/lessons/181937

// 문제 설명
// 정수 num과 n이 매개 변수로 주어질 때, num이 n의 배수이면 1을 return n의 배수가 아니라면 0을 return하도록 solution 함수를 완성해주세요.

//삼항연산자, %
function solution(num, n) {
  return num % n === 0 ? 1 : 0;
}

// %만 안다면 금방풀수있는 기초문제여서 금방풂