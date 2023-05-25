// 뒤에서 5등까지
//school.programmers.co.kr/learn/courses/30/lessons/181853

// 문제 설명
// 정수로 이루어진 리스트 num_list가 주어집니다. num_list에서 가장 작은 5개의 수를 오름차순으로 담은 리스트를 return하도록 solution 함수를 완성해주세요.

// sort(), slice()
https: function solution(num_list) {
  return num_list.sort((a, b) => a - b).slice(0, 5);
}

// 공부내용 정리 블로그
// https://hihiha2.tistory.com/73
// 1. sort(): 배열의 요소를 정렬한 후, 반환
// 2. slice(begin, end): 배열의 begin부터end까지(end미포함) 새로운 배열 객체 반환
