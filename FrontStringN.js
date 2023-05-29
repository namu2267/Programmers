// 문자열의 앞의 n글자
// https://school.programmers.co.kr/learn/courses/30/lessons/181907

// 문제 설명
// 문자열 my_string과 정수 n이 매개변수로 주어질 때, my_string의 앞의 n글자로 이루어진 문자열을 return 하는 solution 함수를 작성해 주세요.

// slice()
function solution(my_string, n) {
  return my_string.slice(0, n);
}

// 공부내용 정리 블로그
// https://hihiha2.tistory.com/94
// slice(): 어떤 배열의 begin 부터 end 까지(end 미포함)에 대한 얕은 복사본을 새로운 배열 객체로 반환
// 문제를 풀면서 중요하다고 느낀 2가지
// 1. 앞의 n글자라는 것이 배열로 들어가면 n까지가 아니라, n-1번째까지의 인덱스를 포함한다는것
// 2. slice(begin, end) end는 미포함하는 특성이 있다.
