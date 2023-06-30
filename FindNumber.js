/* 숫자 찾기
https://school.programmers.co.kr/learn/courses/30/lessons/120904

문제 설명
정수 num과 k가 매개변수로 주어질 때, num을 이루는 숫자 중에 k가 있으면 num의 그 숫자가 있는 자리 수를 return하고 없으면 -1을 return 하도록 solution 함수를 완성해보세요.
*/

// indexOf(), toString()
function solution(num, k) {
  if (num.toString().indexOf(k) > -1) {
    return num.toString().indexOf(k) + 1;
  } else {
    return -1;
  }
}

/* 공부내용 정리 블로그
https://hihiha2.tistory.com/137
일치하는 값이 있으면 해당값의 인덱스를, 일치하는 값이 없으면 -1을 반환하는 indexOf()의 성질을 이용해서 풀었다.
num.toString().indexOf(k)는 반복되는 코드이기때문에 따로 변수를 선언해서 활용했으면 코드의 가독성이 더 좋아지지 않을을까하는 생각이 들었다.
코드를 더 짧게 만들고 싶으면 삼항연산자를 이용하는 코드로 바꿔도 좋을 것 같다.
*/
