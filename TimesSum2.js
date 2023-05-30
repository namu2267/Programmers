// 원소들의 곱과 합
// https://school.programmers.co.kr/learn/courses/30/lessons/181929

// 문제 설명
// 정수가 담긴 리스트 num_list가 주어질 때, 모든 원소들의 곱이 모든 원소들의 합의 제곱보다 작으면 1을 크면 0을 return하도록 solution 함수를 완성해주세요.

// reduce()
function solution(num_list) {
  let times = num_list.reduce((acc, cur) => acc * cur);
  let sum2 = num_list.reduce((acc, cur) => acc + cur) ** 2;
  if (times < sum2) {
    return 1;
  } else {
    return 0;
  }
}

// 공부내용 정리 블로그
// https://hihiha2.tistory.com/97
// reduece():  배열의 각 요소에 대해 주어진 리듀서 (reducer) 함수를 실행하고, 하나의 결과값을 반환
// 학습한것: 자바스크립트에서 거듭제곱 만드는 3가지 방법
// 1. a*a
// 2. a**2
// 3. Math.pow(a,2)
