/*
문자열 잘라서 정렬하기
https://school.programmers.co.kr/learn/courses/30/lessons/181866

문제 설명
문자열 myString이 주어집니다. "x"를 기준으로 해당 문자열을 잘라내 배열을 만든 후 사전순으로 정렬한 배열을 return 하는 solution 함수를 완성해 주세요.
단, 빈 문자열은 반환할 배열에 넣지 않습니다.
*/

// split(), sort(), filter()
function solution(myString) {
  return myString
    .split("x")
    .sort()
    .filter((v) => v);
}

/* 
공부내용 정리 블로그
https://hihiha2.tistory.com/126
문제자체는 금방 풀었지만 학습한 내용이 있어서 기록

💻 학습한 것
🔫 split()의 구분자가 문자열 끝에 위치한다면?
➡️ 끝에 빈 문자열("")을 생성하여 배열에 포함시킨다.

🔫match()에 대해서 새롭게 알게 된것
1. match()의 결과값이 Array
2️. 매치된 부분들을 각각 Array에 담는다 (부분문자열로!!)
*/
