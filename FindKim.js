/* 서울에서 김서방 찾기
https://school.programmers.co.kr/learn/courses/30/lessons/12919

문제 설명
String형 배열 seoul의 element중 "Kim"의 위치 x를 찾아, "김서방은 x에 있다"는 String을 반환하는 함수, solution을 완성하세요. seoul에 "Kim"은 오직 한 번만 나타나며 잘못된 값이 입력되는 경우는 없습니다.
*/

// findIndex(),템플릿문자열
function solution(seoul) {
  let location = seoul.findIndex((v) => v === "Kim");
  return `김서방은 ${location}에 있다`;
}

/* 공부내용 정리 블로그
https://hihiha2.tistory.com/168
*/
