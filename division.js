// 문제
// 정수 num1과 num2가 매개변수로 주어질 때, num1을 num2로 나눈 값에 1,000을 곱한 후 정수 부분을 return 하도록 soltuion 함수를 완성해주세요.

// 1.
function solution(num1, num2) {
  let result = parseInt((num1 / num2) * 1000);
  return result;
}

// 2. 화살표함수
const solution2 = (num1, num2) => parseInt((num1 / num2) * 1000);

// 이용가능 함수들
// * parseInt() = 정수 반환
// * Math.floor = 소수점 이하 버림
// 따라서, 위의 식에 parseInt 대신 Math.floor를 이용해도 된다.
