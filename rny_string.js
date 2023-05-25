// rny_string
// https://school.programmers.co.kr/learn/courses/30/lessons/181863

// 문제 설명
// 'm'과 "rn"이 모양이 비슷하게 생긴 점을 활용해 문자열에 장난을 하려고 합니다. 문자열 rny_string이 주어질 때, rny_string의 모든 'm'을 "rn"으로 바꾼 문자열을 return 하는 solution 함수를 작성해 주세요.

//replaceAll()
function solution(rny_string) {
  return rny_string.replaceAll("m", "rn");
}

// 공부내용 정리 블로그
// https://hihiha2.tistory.com/76
// replaceAll(): pattern의 모든 일치 항목이 replacement로 대체된 새 문자열을 반환
