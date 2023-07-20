/* 약수 구하기
https://school.programmers.co.kr/learn/courses/30/lessons/120897

문제 설명
정수 n이 매개변수로 주어질 때, n의 약수를 오름차순으로 담은 배열을 return하도록 solution 함수를 완성해주세요.
*/

// while문
function solution(n) {
  let divisor = 1;
  let arr = [];

  while (divisor <= n) {
    if (n % divisor === 0) {
      arr.push(divisor);
    }
    divisor++;
  }
  return arr;
}

// for문
function solution(n) {
  let arr = [];
  for (divisor = 1; divisor <= n; divisor++) {
    if (n % divisor === 0) {
      arr.push(divisor);
    }
  }
  return arr;
}

/* 공부내용 정리 블로그
https://hihiha2.tistory.com/148

약수구하기문제는 문제자체는 어렵지 않았지만, 약수를 구하는 방법을 생각해보고 코드를 만들어보는 기회가 되었다.
나중에 약수를 통해서 다른 계산이 필요할때 이 문제에서 학습한 것을 바탕으로 응용할 수 있을 것이다.

Array()생성자로 배열을 생성하고 fill()로 채운다음 map으로 1-n까지의 값으로 바꾼다음 filter를 통해서 약수만을 남기는 코드도 공부했다.
while문과 for문을 통해서 푸는 방법만 생각했었는데, 이 방법은 코드도 짧고 어렵지 않아서 유용할 것 같다.
*/
