// A 강조하기
// https://school.programmers.co.kr/learn/courses/30/lessons/181874

// 문제 설명
// 문자열 myString이 주어집니다. myString에서 알파벳 "a"가 등장하면 전부 "A"로 변환하고, "A"가 아닌 모든 대문자 알파벳은 소문자 알파벳으로 변환하여 return 하는 solution 함수를 완성하세요.

// toLowerCase(), replace()
function solution(myString) {
  return myString.toLowerCase().replace(/a/g, "A");
}

// 정규식을 이용한 방법
const reg = new RegExp(/[^A]/g);
function solution(myString) {
  return myString.match(reg).join("").toLowerCase().replace(/a/g, "A");
}

// 공부내용 정리 블로그
// https://hihiha2.tistory.com/109
// 순서를 바꾸니까 쉽게 풀린문제! 가끔씩은 생각을 뒤집자
// 정규식으로 푸는 연습: myString에 어떤 값이 들어올지 모르기때문에 리터럴이 아닌 정규식 생성자를 이용해 정규식을 생성했다
// 학습한 것
// 1. replace의 두번째 매개변수로 function이 오는 경우
// 2. 정규식의 특수문자중 문자클래스 [ ] , [^ ]
