// 접미사인지 확인하기
// https://school.programmers.co.kr/learn/courses/30/lessons/181908

// 문제 설명
// 어떤 문자열에 대해서 접미사는 특정 인덱스부터 시작하는 문자열을 의미합니다. 예를 들어, "banana"의 모든 접미사는 "banana", "anana", "nana", "ana", "na", "a"입니다.
// 문자열 my_string과 is_suffix가 주어질 때, is_suffix가 my_string의 접미사라면 1을, 아니면 0을 return 하는 solution 함수를 작성해 주세요.

// endsWith()
function solution(my_string, is_suffix) {
  return +my_string.endsWith(is_suffix);
}

// 공부내용 정리 블로그
// https://hihiha2.tistory.com/110
// 정말 빨리 푼 문제
// slice()와 length차를 이용해서 푼 코드가 재밌어서 공부해봄
// endsWith():  어떤 문자열에서 특정 문자열로 끝나는지를 확인할 수 있으며, 그 결과를 true 혹은 false로 반환
// slice(): 문자열의 일부를 추출하면서 새로운 문자열을 반환
// slice()의 여러 특징에 대해 정리