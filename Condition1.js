// 조건에 맞게 수열 변환하기 1
// https://school.programmers.co.kr/learn/courses/30/lessons/181882

// 문제 설명
// 정수 배열 arr가 주어집니다. arr의 각 원소에 대해 값이 50보다 크거나 같은 짝수라면 2로 나누고, 50보다 작은 홀수라면 2를 곱합니다. 그 결과인 정수 배열을 return 하는 solution 함수를 완성해 주세요.

// map(), 삼항연산자
function solution(arr) {
  return arr.map((a) =>
    a >= 50 && a % 2 === 0 ? a / 2 : a <= 50 && a % 2 === 1 ? a * 2 : a
  );
}

// 공부내용 정리 블로그
// https://hihiha2.tistory.com/81
// map()과 forEach()의 차이점에 대해 정리함
// map(): 배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환
