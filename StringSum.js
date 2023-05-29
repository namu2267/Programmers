// 문자열 정수의 합
// https://school.programmers.co.kr/learn/courses/30/lessons/181849

// 문제 설명
// 한 자리 정수로 이루어진 문자열 num_str이 주어질 때, 각 자리수의 합을 return하도록 solution 함수를 완성해주세요.

// map(), reduce()
function solution(num_str) {
  return [...num_str].map(Number).reduce((a, b) => a + b, 0);
}

// 공부내용 정리 블로그
// https://hihiha2.tistory.com/91
// map(Number): map을 이용하여 Number타입으로 변환
// reduce(): 배열의 각 요소에 대해 주어진 리듀서 (reducer) 함수를 실행하고, 하나의 결과값을 반환
//학습한것: reduce의 두번째인자는 현재의 값. map()을 굳이 사용하지 않아도 됨.
const solution = (num_str) =>
  [...num_str].reduce((acc, curr) => acc + Number(curr), 0);
