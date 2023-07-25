/* 약수의 합
https://hihiha2.tistory.com/149

문제 설명
정수 n을 입력받아 n의 약수를 모두 더한 값을 리턴하는 함수, solution을 완성해주세요. */

//for문, reduce(), push()
function solution(n) {
  let arr = [];
  for (i = 1; i <= n; i++) {
    if (n % i === 0) {
      arr.push(i);
    }
  }
  return arr.reduce((acc, cur) => acc + cur, 0);
}

/* 공부내용 정리 블로그
https://hihiha2.tistory.com/149

이전에 약수구하기 문제를 풀었던 경험이 있어서 더 빨리 풀수있었다. 약수를 구해서 합을 내는것만 더 추가된 문제이다.

✔️개선할 점 
reduce()를 사용해야겠다는 생각으로 arr에 push하는 방식으로 만들었는데, sum = 0으로 초기화하고 sum+= i와 같은 방식으로 풀면 굳이 reduce를 한번 더 해줄 필요가 없다. 합이라고 해서 꼭 reduce를 써야겠다는 생각을 버려야겠다.
*/
