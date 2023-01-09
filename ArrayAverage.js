// 문제
// 정수 배열 numbers가 매개변수로 주어집니다. numbers의 원소의 평균값을 return하도록 solution 함수를 완성해주세요.

// for of 사용
function solution(numbers) {
  let sum = 0;
  for (i of numbers) {
    sum += i;
  }
  return sum / numbers.length;
}

// 이 경우, 일반적인 for문만을 사용할때보다 of를 사용하는것이 더 편리하고 가독성도 좋다.
