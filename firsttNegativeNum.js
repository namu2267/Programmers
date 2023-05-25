// 첫 번째로 나오는 음수
// https://school.programmers.co.kr/learn/courses/30/lessons/181896

// 문제 설명
// 정수 리스트 num_list가 주어질 때, 첫 번째로 나오는 음수의 인덱스를 return하도록 solution 함수를 완성해주세요. 음수가 없다면 -1을 return합니다.

//
function solution(num_list) {
  const find = num_list.findIndex((a) => a < 0);
  if (find >= 0) {
    return find;
  } else {
    return -1;
  }
}

// 공부내용 정리 블로그
// https://hihiha2.tistory.com/79
// findIndex(): 주어진 판별 함수를 만족하는 배열의 첫 번째 요소에 대한 인덱스를 반환 / 만족하는 요소가 없으면 -1을 반환
