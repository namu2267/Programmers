// 카운트 업
// https://school.programmers.co.kr/learn/courses/30/lessons/181920

// 문제 설명
// 정수 start와 end가 주어질 때, start부터 end까지의 숫자를 차례로 담은 리스트를 return하도록 solution 함수를 완성해주세요.

// for문, push()
function solution(start, end) {
  let list = [];
  let num;
  for (num = start; num <= end; num++) {
    list.push(num);
  }
  return list;
}

// 공부내용 정리 블로그
// https://hihiha2.tistory.com/82
// for문: 어떤 특정한 조건이 거짓으로 판별될 때까지 반복
// 학습한것: Array(), fill(), map()
