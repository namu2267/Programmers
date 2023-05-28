// 조건에 맞게 수열 변환하기 3
// https://school.programmers.co.kr/learn/courses/30/lessons/181835

// 문제 설명
// 정수 배열 arr와 자연수 k가 주어집니다.
// 만약 k가 홀수라면 arr의 모든 원소에 k를 곱하고, k가 짝수라면 arr의 모든 원소에 k를 더합니다.
// 이러한 변환을 마친 후의 arr를 return 하는 solution 함수를 완성해 주세요.

// if문
function solution(arr, k) {
  if (k % 2 !== 0) {
    return arr.map((a) => a * k);
  } else {
    return arr.map((a) => a + k);
  }
}

// 삼항연산자로 바꾸기
// const solution = (arr, k) => arr.map(v => k % 2 ? v * k : v + k)
