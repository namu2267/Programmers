// 수 조작하기 1
// https://school.programmers.co.kr/learn/courses/30/lessons/181926

// 문제 설명
// 정수 n과 문자열 control이 주어집니다. control은 "w", "a", "s", "d"의 4개의 문자로 이루어져 있으며, control의 앞에서부터 순서대로 문자에 따라 n의 값을 바꿉니다.

// "w" : n이 1 커집니다.
// "s" : n이 1 작아집니다.
// "d" : n이 10 커집니다.
// "a" : n이 10 작아집니다.
// 위 규칙에 따라 n을 바꿨을 때 가장 마지막에 나오는 n의 값을 return 하는 solution 함수를 완성해 주세요.

//for문, if문
function solution(n, control) {
  for (i = 0; i < control.length; i++) {
    const index = control[i];
    if (index === "w") {
      n += 1;
    }
    if (index === "s") {
      n -= 1;
    }
    if (index === "d") {
      n += 10;
    }
    if (index === "a") {
      n -= 10;
    }
  }
  return n;
}

// 공부내용 정리 블로그
// https://hihiha2.tistory.com/96
// for문:  어떤 특정한 조건이 거짓으로 판별될 때까지 반복
// if문: 지정한 조건이 참인 경우 명령문(statement)을 실행
// string에 대해 새롭게 알게된점 2가지
// 1. string도 배열과 같은 방식으로 인덱스에 접근할 수 있다.
// 2. string도 for문을 돌릴 수 있다.
