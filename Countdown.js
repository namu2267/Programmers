// 카운트 다운
// https://school.programmers.co.kr/learn/courses/30/lessons/181899

// 문제 설명
// 정수 start와 end가 주어질 때, start에서 end까지 1씩 감소하는 수들을 차례로 담은 리스트를 return하도록 solution 함수를 완성해주세요.

// push()
function solution(start, end) {
  let list = [];
  for (i = start; i >= end; i--) {
    list.push(i);
  }

  return list;
}

// 공부내용 정리 블로그
// https://hihiha2.tistory.com/95
// for문: for 반복문은 어떤 특정한 조건이 거짓으로 판별될 때까지 반복
// push(): 배열의 끝에 하나 이상의 요소를 추가하고, 배열의 새로운 길이를 반환
// map(),fill(),Array()를 이용해서 푸는 방법도 좋은것같다.
// +1, -1처럼 일정하게 더하거나 빼는 문제는 배열의 인덱스를 잘 활용하면 좋을듯!!
