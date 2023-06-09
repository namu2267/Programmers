// 배열의 길이에 따라 다른 연산하기
// https://school.programmers.co.kr/learn/courses/30/lessons/181854

// 문제 설명
// 정수 배열 arr과 정수 n이 매개변수로 주어집니다. arr의 길이가 홀수라면 arr의 모든 짝수 인덱스 위치에 n을 더한 배열을, arr의 길이가 짝수라면 arr의 모든 홀수 인덱스 위치에 n을 더한 배열을 return 하는 solution 함수를 작성해 주세요.

// if문,map()
function solution(arr, n) {
  if (arr.length % 2 === 1) {
    return arr.map((num, i) => (i % 2 === 0 ? num + n : num));
  } else {
    return arr.map((num, i) => (i % 2 === 1 ? num + n : num));
  }
}

// 공부내용 정리 블로그
// https://hihiha2.tistory.com/111
// arr.length % 2 !== idx % 2 (배열의 길이와 인덱스의 값이 같은지를 바로 비교하는 방법도 공부함)
// 학습한것
// 비트 XOR (^) 연산
// 비트 XOR 연산은 주로 이진수를 다룰 때 사용되며, 각 비트를 서로 비교하여 결과를 도출
// - 두 비트가 서로 다른 경우에는 1을 반환
// - 두 비트가 동일한 경우에는 0을 반환
