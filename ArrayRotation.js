// 배열 회전시키기

// 문제 설명

// 정수가 담긴 배열 numbers와 문자열 direction가 매개변수로 주어집니다. 배열 numbers의 원소를 direction방향으로 한 칸씩 회전시킨 배열을 return하도록 solution 함수를 완성해주세요.

// unshift(),push(), shift(), pop()
function solution(numbers, direction) {
  if (direction === "right") {
    numbers.unshift(numbers.pop());
  } else {
    numbers.push(numbers.shift());
  }
  return numbers;
}

// unshift() 새로운 요소를 배열의 맨 앞쪽에 추가하고, 새로운 길이를 반환
// push() 배열의 끝에 하나 이상의 요소를 추가하고, 배열의 새로운 길이를 반환
// shift() 배열에서 첫 번째 요소를 제거하고, 제거된 요소를 반환
// pop() 배열에서 마지막요소를 제거하고 그 요소를 반환
