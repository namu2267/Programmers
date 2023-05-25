// 길이에 따른 연산
// https://school.programmers.co.kr/learn/courses/30/lessons/181879

// 문제 설명
// 정수가 담긴 리스트 num_list가 주어질 때, 리스트의 길이가 11 이상이면 리스트에 있는 모든 원소의 합을 10 이하이면 모든 원소의 곱을 return하도록 solution 함수를 완성해주세요.

//reduce()
function solution(num_list) {
  const list = num_list;
  if (list.length >= 11) {
    return list.reduce((a, b) => a + b, 0);
  } else {
    return list.reduce((a, b) => a * b, 1);
  }
}

// 공부내용 정리 블로그
// https://hihiha2.tistory.com/74
// reduce(): 배열의 각 요소에 대해 주어진 리듀서 (reducer) 함수를 실행하고, 하나의 결과값을 반환
