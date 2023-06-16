// 0 떼기
// https://school.programmers.co.kr/learn/courses/30/lessons/181847

// 문제 설명
// 정수로 이루어진 문자열 n_str이 주어질 때, n_str의 가장 왼쪽에 처음으로 등장하는 0들을 뗀 문자열을 return하도록 solution 함수를 완성해주세요.

// while문, 정규식, test(), slice()
function solution(n_str) {
  while (/^0/.test(n_str)) {
    n_str = n_str.slice(1);
  }

  return n_str;
}

// 공부내용 정리 블로그
// https://hihiha2.tistory.com/120
//  / / : 정규식의 시작과 끝을 나타내는 구분기호
//  ^ : 문자열의 시작
// 또다른 방법들
// 1. number로 타입변환하여 앞의 0제거
// 2. replace()로 ''로 치환하여 제거한 효과내기
