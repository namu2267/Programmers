// 글자 이어 붙여 문자열 만들기
// https://school.programmers.co.kr/learn/courses/30/lessons/181915

// 문제 설명
// 문자열 my_string과 정수 배열 index_list가 매개변수로 주어집니다. my_string의 index_list의 원소들에 해당하는 인덱스의 글자들을 순서대로 이어 붙인 문자열을 return 하는 solution 함수를 작성해 주세요.

// map(), push(),join()
function solution(my_string, index_list) {
  const newList = [];
  index_list.map((a) => newList.push(my_string[a]));
  return newList.join("");
}

// 공부내용 정리 블로그
// https://hihiha2.tistory.com/90
//  map(): 배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환
// join(): 배열의 모든 요소를 연결해 하나의 문자열로 만든다.
// map은 새로운 배열을 반환하기 때문에 굳이 따로 배열을 만들어서 push()해줄 필요가 없었음
// 다음번에는 아래와 같이 코드를 짜도록 할것.
function solution(my_string, index_list) {
  return index_list.map((a) => my_string[a]).join("");
}
