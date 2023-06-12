// 문자열 바꿔서 찾기
// https://school.programmers.co.kr/learn/courses/30/lessons/181864

// 문제 설명
// 문자 "A"와 "B"로 이루어진 문자열 myString과 pat가 주어집니다. myString의 "A"를 "B"로, "B"를 "A"로 바꾼 문자열의 연속하는 부분 문자열 중 pat이 있으면 1을 아니면 0을 return 하는 solution 함수를 완성하세요.

// split(), map(), join(), includes()
function solution(myString, pat) {
  return myString
    .split("")
    .map((a) => (a === "A" ? "B" : "A"))
    .join("")
    .includes(pat)
    ? 1
    : 0;
}


// 공부내용 정리 블로그
// https://hihiha2.tistory.com/114
// A로 바뀐 B가 다시 A가 되지 않으면서 새로운 값으로 대치할 수 있는지가 핵심
// 값의 대치를 위해 map()사용
