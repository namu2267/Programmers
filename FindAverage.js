/* 평균 구하기
https://school.programmers.co.kr/learn/courses/30/lessons/12944

문제 설명
정수를 담고 있는 배열 arr의 평균값을 return하는 함수, solution을 완성해보세요.
*/

// reduce()
function solution(arr) {
  return arr.reduce((acc,cur)=>acc+cur,0)/arr.length
}

/* 공부내용 정리 블로그
https://hihiha2.tistory.com/152
*/