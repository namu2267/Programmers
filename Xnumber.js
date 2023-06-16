// x 사이의 개수
// https://school.programmers.co.kr/learn/courses/30/lessons/181867

// 문제 설명
// 문자열 myString이 주어집니다. myString을 문자 "x"를 기준으로 나눴을 때 나눠진 문자열 각각의 길이를 순서대로 저장한 배열을 return 하는 solution 함수를 완성해 주세요.

// split(), map()
function solution(myString) {
  return myString.split("x").map((v) => v.length);
}

// 엄청 빨리 푼 문제
// 나름 문제를 많이 풀다보니 split()은 꽤 편하게 사용할 수 있게 된것같다 😊
