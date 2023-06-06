// 원하는 문자열 찾기
// https://school.programmers.co.kr/learn/courses/30/lessons/181878

// 문제 설명
// 알파벳으로 이루어진 문자열 myString과 pat이 주어집니다. myString의 연속된 부분 문자열 중 pat이 존재하면 1을 그렇지 않으면 0을 return 하는 solution 함수를 완성해 주세요.

// 단, 알파벳 대문자와 소문자는 구분하지 않습니다.

// 정규식 생성자, .test()메서드
function solution(myString, pat) {
  const regex = new RegExp(pat, "gi");
  return +regex.test(myString);
}

// 공부내용 정리 블로그
// https://hihiha2.tistory.com/108
// 대소문자를 구분하지 않는것이 이 문제의 핵심이라 생각함
// 대소문자문제를 해결하기 위해서 정규식의 flag를 이용함 (/gi)
// toUpperCase()를 통해서 아예 다 대문자로 바꾸고 includes()를 통해서 값을 검사하는 방법도 공부함
