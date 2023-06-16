// 간단한 식 계산하기
// https://school.programmers.co.kr/learn/courses/30/lessons/181865

// 문제 설명
// 문자열 binomial이 매개변수로 주어집니다. binomial은 "a op b" 형태의 이항식이고 a와 b는 음이 아닌 정수, op는 '+', '-', '*' 중 하나입니다. 주어진 식을 계산한 정수를 return 하는 solution 함수를 작성해 주세요.

// split(),배열구조분해할당, Number(), if문
function solution(binomial) {
  const [a, op, b] = binomial.split(" ");
  let Num1 = Number(a);
  let Num2 = Number(b);

  let result;
  if (op === "+") {
    result = Num1 + Num2;
  } else if (op === "-") {
    result = Num1 - Num2;
  } else if (op === "*") {
    result = Num1 * Num2;
  }
  return result;
}

// 공부내용 정리 블로그
// https://hihiha2.tistory.com/122
// eval()을 통해 간단하게 해결가능하지만 보안상의 이유로 지양해야함
// switch문을 사용한 방법공부 (케이스가 여러개인 경우 if문보다 가독성이 향사되지 않을까?)
// 객체의 property로 화살표함수를 통한 연산을 하고 key값을 통한 접근으로 해결한 방법 공부
// eval()은 보안상으로 좋지 않기때문에 간편해도 사용을 지양한다는 것, 배열의 구조분해할당, switch문, 객체를 이용한 case별 연산생성과 활용등 많은것을 배우고 또 알고 있는것은 더 정확하게 알도록 복습하였다.
