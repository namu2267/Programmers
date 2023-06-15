// 문자열 곱하기
// https://school.programmers.co.kr/learn/courses/30/lessons/181940

// 문제 설명
// 문자열 my_string과 정수 k가 주어질 때, my_string을 k번 반복한 문자열을 return 하는 solution 함수를 작성해 주세요.

// repeat()
function solution(my_string, k) {
  return my_string.repeat(k);
}

// 공부내용 정리 블로그
// https://hihiha2.tistory.com/117
// repeat(): 문자열을 주어진 횟수만큼 반복해 붙인 새로운 문자열을 반환

// 메서드를 사용하지 않고 for문으로 푼 방법
function solution(my_string, k) {
  let answer = "";

  for (let i = 0; i < k; i++) {
    answer += my_string;
  }

  return answer;
}
