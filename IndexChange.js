// 인덱스 바꾸기

// 문제 설명

// 문자열 my_string과 정수 num1, num2가 매개변수로 주어질 때, my_string에서 인덱스 num1과 인덱스 num2에 해당하는 문자를 바꾼 문자열을 return 하도록 solution 함수를 완성해보세요.

// 스프레드연산자, array, join(')
function solution(my_string, num1, num2) {
  let arr = [...my_string];
  arr[num2] = my_string[num1];
  arr[num1] = my_string[num2];

  return arr.join("");
}
