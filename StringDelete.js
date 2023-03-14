//특정 문자 제거하기

//문자열 my_string과 문자 letter이 매개변수로 주어집니다. my_string에서 letter를 제거한 문자열을 return하도록 solution 함수를 완성해주세요.

//filter(), join()
function solution(my_string, letter) {
  const arr = [...my_string];
  return arr.filter((a) => a !== letter).join("");
}

//문자를 배열로 바꾸는 방법
// 1. spread 연산자 [...str]
//2. Array.from()
//3. split(): 구분자를 기준으로 문자열을 분리 -> 배열로 반환