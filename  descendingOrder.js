/* 정수 내림차순으로 배치하기
https://school.programmers.co.kr/learn/courses/30/lessons/12933

문제 설명
함수 solution은 정수 n을 매개변수로 입력받습니다. n의 각 자릿수를 큰것부터 작은 순으로 정렬한 새로운 정수를 리턴해주세요. 예를들어 n이 118372면 873211을 리턴하면 됩니다.
*/

function solution(n) {
  return Number(n.toString().split('').sort((a,b)=>b-a).join(''))
}

/* 공부내용 정리 블로그
https://hihiha2.tistory.com/174
*/