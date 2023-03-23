// 세균 증식

// 문제 설명

// 어떤 세균은 1시간에 두배만큼 증식한다고 합니다. 처음 세균의 마리수 n과 경과한 시간 t가 매개변수로 주어질 때 t시간 후 세균의 수를 return하도록 solution 함수를 완성해주세요.

// for문
function solution(n, t) {
  for (let i = 0; i < t; i++) {
    n *= 2;
  }
  return n;
}

// new Array(), fill(), reduce()
function solution(n, t) {
  return new Array(t).fill(n).reduce((a, b) => a * 2, n);
}

// new Array(arrayLength)
// -> new Array(t) t개의 요소를 가지는 배열을 생성

// fill(n) -> 배열의 모든요소를 n으로 채움
