// 꼬리 문자열
// https://school.programmers.co.kr/learn/courses/30/lessons/181841

// 문제 설명
// 문자열들이 담긴 리스트가 주어졌을 때, 모든 문자열들을 순서대로 합친 문자열을 꼬리 문자열이라고 합니다. 꼬리 문자열을 만들 때 특정 문자열을 포함한 문자열은 제외시키려고 합니다. 예를 들어 문자열 리스트 ["abc", "def", "ghi"]가 있고 문자열 "ef"를 포함한 문자열은 제외하고 꼬리 문자열을 만들면 "abcghi"가 됩니다.

// 문자열 리스트 str_list와 제외하려는 문자열 ex가 주어질 때, str_list에서 ex를 포함한 문자열을 제외하고 만든 꼬리 문자열을 return하도록 solution 함수를 완성해주세요.

// filter(), includes(), join()
function solution(str_list, ex) {
  return str_list.filter((a) => !a.includes(ex)).join("");
}

// 공부내용 정리 블로그
// https://hihiha2.tistory.com/105
// 같은 기능을 하는것도 다른방법들을 이용하는 것이 흥미로웠음
// 배열의 각 요소를 이어붙이면서 string으로 바꾸는 방법이 내가 쓴 방법말고도 다른 방법들도 흥미로워서 공부해봄
// 학습한것
// 배열을 String으로 바꾸면서 이어붙이는 방법
// 1. join()
// 2. reduce()의 acc활용
// 3. + 연산자 이용
