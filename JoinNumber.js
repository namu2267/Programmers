// 이어 붙인 수
// https://school.programmers.co.kr/learn/courses/30/lessons/181928

// 문제 설명
// 정수가 담긴 리스트 num_list가 주어집니다. num_list의 홀수만 순서대로 이어 붙인 수와 짝수만 순서대로 이어 붙인 수의 합을 return하도록 solution 함수를 완성해주세요.

// filter(), reduce(), String(), Number()
function solution(num_list) {
  let isEven = num_list.filter((a) => a % 2 === 0);
  let isOdd = num_list.filter((a) => a % 2 === 1);

  let evenSum = isEven.reduce((acc, cur) => acc + String(cur));
  let oddSum = isOdd.reduce((acc, cur) => acc + String(cur));

  return Number(evenSum) + Number(oddSum);
}

// 공부내용 정리 블로그
// https://hihiha2.tistory.com/101
// filter(): 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환
// reduce(): 배열의 각 요소에 대해 주어진 리듀서 (reducer) 함수를 실행하고, 하나의 결과값을 반환
// 굳이 변수를 2개로 나눌필요없이 filter(), reduce()를 .으로 연결하여 하나의 변수에 한줄로 담아도 좋을것같다.
