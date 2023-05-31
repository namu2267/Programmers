// 배열 만들기 1
// https://school.programmers.co.kr/learn/courses/30/lessons/181901

// 문제 설명
// 정수 n과 k가 주어졌을 때, 1 이상 n이하의 정수 중에서 k의 배수를 오름차순으로 저장한 배열을 return 하는 solution 함수를 완성해 주세요.

// Math.floor(), for문, push()
function solution(n, k) {
  let num = Math.floor(n / k);
  let list = [];
  for (i = 1; i <= num; i++) {
    let num2 = k * i;
    list.push(num2);
  }
  return list;
}

// 공부내용 정리 블로그
// https://hihiha2.tistory.com/98
// Math.floor(): 항상 내림하고 주어진 숫자보다 작거나 같은 가장 큰 정수를 반환
// Push():  배열의 끝에 하나 이상의 요소를 추가하고, 배열의 새로운 길이를 반환

// 학습한것
// 🔫 JavaScript에서 소수점을 버리고 정수 부분만을 얻을 수 있는 방법
// 1. Math.floor(): 소수점 이하를 버리고 내림하여 정수를 반환
// 2. Math.trunc(): 소수점 이하를 버리고 정수 부분만을 반환합니다. 양수와 음수에 동일하게 적용
// 3. parseInt(): 문자열을 정수로 변환합니다. 소수점 이하는 자동으로 버려집니다. 기본적으로 10진수로 해석
// 4. 비트 연산자 사용: 비트 연산자인 ~~, | 0, << 0 등을 사용하여 숫자를 정수로 변환할 수 있다.
// 비트 NOT 연산자 ~~가 일반적으로 사용되지만, 코드의 가독성과 혼동을 피하기 위해 다른 방법을 사용하는 것이 좋다.
