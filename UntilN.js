// n 번째 원소까지
// https://school.programmers.co.kr/learn/courses/30/lessons/181889

// 문제 설명
// 정수 리스트 num_list와 정수 n이 주어질 때, num_list의 첫 번째 원소부터 n 번째 원소까지의 모든 원소를 담은 리스트를 return하도록 solution 함수를 완성해주세요.

// slice()
function solution(num_list, n) {
  return num_list.slice(0, n);
}

// 공부내용 정리 블로그
// https://hihiha2.tistory.com/86
// slice():  어떤 배열의 begin 부터 end 까지(end 미포함)에 대한 얕은 복사본을 새로운 배열 객체로 반환
// slice() 기억할것 두가지:
// 1. string.slice() 도 가능함!! 2. end 미포함!!
