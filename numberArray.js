// 문제
// 정수가 담긴 리스트 num_list가 주어질 때, num_list의 원소 중 짝수와 홀수의 개수를 담은 배열을 return 하도록 solution 함수를 완성해보세요.

// filter 사용
function solution(num_list) {
  let evenNumber = num_list.filter((n) => n % 2 === 0).length;
  return [evenNumber, num_list.length - evenNumber];
}

// 동일하게 filter를 사용했지만 좀 더 가독성이 좋은경우
function solution(num_list) {
  return [
    num_list.filter((n) => n % 2 === 0).length,
    num_list.filter((n) => n % 2 === 1).legth,
  ];
}
