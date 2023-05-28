// 부분 문자열
// https://school.programmers.co.kr/learn/courses/30/lessons/181842

// 문제 설명
// 어떤 문자열 A가 다른 문자열 B안에 속하면 A를 B의 부분 문자열이라고 합니다. 예를 들어 문자열 "abc"는 문자열 "aabcc"의 부분 문자열입니다.

// 문자열 str1과 str2가 주어질 때, str1이 str2의 부분 문자열이라면 1을 부분 문자열이 아니라면 0을 return하도록 solution 함수를 완성해주세요.

//includes
function solution(str1, str2) {
  if (str2.includes(str1)) {
    return 1;
  } else {
    return 0;
  }
}

// 공부내용 정리 블로그
// https://hihiha2.tistory.com/88
// includes(): 하나의 문자열이 다른 문자열에 포함되어 있는지를 판별하고, 결과를 true 또는 false 로 반환
// 기억할것! includes는 Array, String 모두에 적용가능!!
