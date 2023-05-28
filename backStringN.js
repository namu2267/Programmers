// 문자열의 뒤의 n글자
// https://school.programmers.co.kr/learn/courses/30/lessons/181910

// 문제 설명
// 문자열 my_string과 정수 n이 매개변수로 주어질 때, my_string의 뒤의 n글자로 이루어진 문자열을 return 하는 solution 함수를 작성해 주세요.

// for문,push(),join()
function solution(my_string, n) {
  let list = [...my_string];
  let list2 = [];
  let idx = list.length - n;
  for (let i = idx; i < list.length; i++) {
    list2.push(list[i]);
  }
  return list2.join("");
}

// 공부내용 정리 블로그
// https://hihiha2.tistory.com/84
// Push(): 배열의 끝에 하나 이상의 요소를 추가하고, 배열의 새로운 길이를 반환
// for문: 어떤 특정한 조건이 거짓으로 판별될 때까지 반복
// join(): 배열의 모든 요소를 연결해 하나의 문자열로 만든다.
// 썼으면 좋았을 메서드: slice()
// slice()를 사용했다면 엄청 쉽게 풀렸을 문제!
// slice():  문자열의 일부를 추출하면서 새로운 문자열을 반환
