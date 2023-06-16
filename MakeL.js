// l로 만들기
// https://school.programmers.co.kr/learn/courses/30/lessons/181834

// 문제 설명
// 알파벳 소문자로 이루어진 문자열 myString이 주어집니다. 알파벳 순서에서 "l"보다 앞서는 모든 문자를 "l"로 바꾼 문자열을 return 하는 solution 함수를 완성해 주세요.

// replaceAll()
function solution(myString) {
  return myString.replaceAll(/[a-k]/g, "l");
}

// 공부내용 정리 블로그
// https://hihiha2.tistory.com/123
// 학습한 것
// 🔫 replaceAll()에는 global하지 않은 정규식은 올 수 없다.
// for...of 문: 반복가능한 객체(Array,Map,Set,String,TypedArray,arguments객체 등을 포함)에 대해서 반복하고 각 개별 속성값에 대해 실행되는 문이 있는 사용자 정의 반복 후크를 호출하는 루프를 생성
// 알고리즘을 통해서 자바스크립트에 대한 이해도가 놓아지는 것 같아서 좋음
// 알고리즘을 통해서 쌍은 지식을 구현을 통해서 한단계 업그레이드 시키고 싶다.
