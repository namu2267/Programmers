// 접두사인지 확인하기
// https://school.programmers.co.kr/learn/courses/30/lessons/181906

// 문제 설명
// 어떤 문자열에 대해서 접두사는 특정 인덱스까지의 문자열을 의미합니다. 예를 들어, "banana"의 모든 접두사는 "b", "ba", "ban", "bana", "banan", "banana"입니다.
// 문자열 my_string과 is_prefix가 주어질 때, is_prefix가 my_string의 접두사라면 1을, 아니면 0을 return 하는 solution 함수를 작성해 주세요.

// startsWith()
function solution(my_string, is_prefix) {
  if (my_string.startsWith(is_prefix)) {
    return 1;
  } else {
    return 0;
  }
}

// 공부내용 정리 블로그
// https://hihiha2.tistory.com/104
// startsWith(): 어떤 문자열이 특정 문자로 시작하는지 확인하여 결과를 true 혹은 false로 반환
// 학습한것
// 1. startsWith(): 어떤 문자열이 특정 문자로 시작하는지 확인하여 결과를 true 혹은 false로 반환
// 반대의 역할을 하는 메서드도있을것같아서 찾아보니 endsWith()가 있었다.
// endsWith(): 어떤 문자열에서 특정 문자열로 끝나는지를 확인할 수 있으며, 그 결과를 true 혹은 false로 반환
// 2. + 연산자는 Boolean 값을 0 또는 1의 숫자로 강제 변환
// 3. indexOf는 Array, String 모두 사용가능
