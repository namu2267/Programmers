/* 합성수 찾기
https://school.programmers.co.kr/learn/courses/30/lessons/120846

문제 설명
약수의 개수가 세 개 이상인 수를 합성수라고 합니다. 자연수 n이 매개변수로 주어질 때 n이하의 합성수의 개수를 return하도록 solution 함수를 완성해주세요.
*/

function solution(n) {
  let num = 0;
  let arr = Array.from({ length: n }, (_, i) => i + 1);
  let arr2 = [];

  arr.forEach((v) => {
    let divisor = 1;
    while (divisor <= v) {
      if (v % divisor === 0) {
        num++;
      }
      divisor++;
    }
    arr2.push(num);
    num = 0;
  });
  return arr2.filter((v) => v >= 3).length;
}

/* 공부내용 정리 블로그
https://hihiha2.tistory.com/151

모든 범위를 다 검사해서 약수를 구했는데, 제곱근을 이용해서 범위를 줄이고 효율성을 높이는 방법이 있어서 문제를 다 풀고 나서 공부하였다.
Math.sqrt()를 이용해서 범위를 지정하면 된다. 자세한 내용은 블로그에 정리하였다.
*/
