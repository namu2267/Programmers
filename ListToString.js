// 문자 리스트를 문자열로 변환하기
// https://school.programmers.co.kr/learn/courses/30/lessons/181941

// 문제 설명
// 문자들이 담겨있는 배열 arr가 주어집니다. arr의 원소들을 순서대로 이어 붙인 문자열을 return 하는 solution함수를 작성해 주세요.

// slice(), join()
function solution(arr) {
  return arr.slice().join("");
}

// 공부내용 정리 블로그
// https://hihiha2.tistory.com/75
// 1. slice(): 어떤 배열의 begin부터end까지(end미포함)에 대한 얕은 복사본을 새로운 배열 객체로 반환
// 2.join(): 배열의 모든 요소를 연결해 하나의 문자열로 만듦
// join('') =>  완전히 연결된 문자열을 반환! 기억할것!!
