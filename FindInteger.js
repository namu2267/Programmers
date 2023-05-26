// 정수 찾기
// https://school.programmers.co.kr/learn/courses/30/lessons/181840

// 문제 설명
// 정수 리스트 num_list와 찾으려는 정수 n이 주어질 때, num_list안에 n이 있으면 1을 없으면 0을 return하도록 solution 함수를 완성해주세요.

// if문, includes()
function solution(num_list, n) {
  if (num_list.includes(n)) {
    return 1;
  } else {
    return 0;
  }
}

// 공부내용 정리 블로그
// https://hihiha2.tistory.com/80
// includes(): 배열이 특정 요소를 포함하고 있는지 판별
// 반환값: Boolean
