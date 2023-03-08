//자릿수 더하기

// 문제 설명
// 정수 n이 매개변수로 주어질 때 n의 각 자리 숫자의 합을 return하도록 solution 함수를 완성해주세요

// reduce()
function solution(n) {
  let str = n.toString();
  let arr = str.split("");
  let sum = arr.reduce((acc, cur) => acc + Number(cur), 0);
  return sum;
}

// reduce() 설명
// const array1 = [1, 2, 3, 4];

// // 0 + 1 + 2 + 3 + 4
// const initialValue = 0;
// const sumWithInitial = array1.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   initialValue
// );

// console.log(sumWithInitial);
// Expected output: 10
