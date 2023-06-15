// 홀수 vs 짝수
// https://school.programmers.co.kr/learn/courses/30/lessons/181887

// 문제 설명
// 정수 리스트 num_list가 주어집니다. 가장 첫 번째 원소를 1번 원소라고 할 때, 홀수 번째 원소들의 합과 짝수 번째 원소들의 합 중 큰 값을 return 하도록 solution 함수를 완성해주세요. 두 값이 같을 경우 그 값을 return합니다.

// map(), reduce(),push(),Math.max()
function solution(num_list) {
  const even = [];
  const odd = [];

  num_list.map((num, i) => (i % 2 === 0 ? odd.push(num) : even.push(num)));

  const evenSum = even.reduce((acc, cur) => acc + cur);
  const oddSum = odd.reduce((acc, cur) => acc + cur);

  return Math.max(evenSum, oddSum);
}

// 공부내용 정리 블로그
// https://hihiha2.tistory.com/119
// 합을 구한다고 해서 꼭 reduce()만을 사용해야하는것은 아님
// map()을 통해서 값의 비교를 하면서, 동시에 합을 구하는 방법도 생각해보자.
