// n보다 커질 때까지 더하기
// https://school.programmers.co.kr/learn/courses/30/lessons/181884

// 문제 설명
// 정수 배열 numbers와 정수 n이 매개변수로 주어집니다. numbers의 원소를 앞에서부터 하나씩 더하다가 그 합이 n보다 커지는 순간 이때까지 더했던 원소들의 합을 return 하는 solution 함수를 작성해 주세요.

// for문
function solution(numbers, n) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
    if (sum > n) {
      return sum;
    }
  }
}

// 공부내용 정리 블로그
// https://hihiha2.tistory.com/83
// for문: 어떤 특정한 조건이 거짓으로 판별될 때까지 반복
// 학습한것: While문- 조건문이 참일 때 실행되는 반복문
