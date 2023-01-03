// 1. if문
function solution(num1, num2) {
  if (num1 === num2) {
    return 1;
  } else {
    return -1;
  }
}

// 2. 3항연산자
function solution2(num1, num2) {
  let result = num1 === num2 ? 1 : -1;
  return result;
}

// 3. 화살표함수 + 3항연산자
const solution3 = (num1, num2) => (num1 === num2 ? 1 : -1);
