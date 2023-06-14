// 컨트롤 제트
// https://school.programmers.co.kr/learn/courses/30/lessons/120853

// 문제 설명
// 숫자와 "Z"가 공백으로 구분되어 담긴 문자열이 주어집니다. 문자열에 있는 숫자를 차례대로 더하려고 합니다. 이 때 "Z"가 나오면 바로 전에 더했던 숫자를 뺀다는 뜻입니다. 숫자와 "Z"로 이루어진 문자열 s가 주어질 때, 머쓱이가 구한 값을 return 하도록 solution 함수를 완성해보세요

// split(),includes(),findIndex(),splice(),reduce(0)
function solution(s) {
  let arr = s.split(" ");
  while (arr.includes("Z")) {
    const index = arr.findIndex((e) => e === "Z");
    arr.splice(index - 1, 2);
  }
  return arr.reduce((acc, cur) => acc + Number(cur), 0);
}

// 공부내용 정리 블로그
// https://hihiha2.tistory.com/116
// findIndex()가 첫번째값만 찾기때문에 while문을 통해서 여러번시행하도록함 .
// findIndex():충족하는 배열의 첫 번째 요소 인덱스를 반환. 테스트 기능을 만족하는 요소가 없으면 -1이 반환
// splice(): 배열의 기존 요소를 삭제 또는 교체하거나 새 요소를 추가하여 배열의 내용을 변경
// 학습한 것
// reduce()는 빈 배열에 대해서 호출될 경우 에러를 던지는 동작을 가지고 있다.
// ➡️ 스택이 비어있는 경우에 대한 처리가 필요하다
// 알고리즘을 통한 언어자체에 대한 공부가 프로젝트코드에 대한 이해로 연결될것이라고 느낌.
