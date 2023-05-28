// 공백으로 구분하기 1
// https://school.programmers.co.kr/learn/courses/30/lessons/181869

// 문제 설명
// 단어가 공백 한 개로 구분되어 있는 문자열 my_string이 매개변수로 주어질 때, my_string에 나온 단어를 앞에서부터 순서대로 담은 문자열 배열을 return 하는 solution 함수를 작성해 주세요.

// split()
function solution(my_string) {
  return my_string.split(" ");
}

// 공부내용 정리 블로그
// https://hihiha2.tistory.com/89
// split(): String 객체를 지정한 구분자를 이용하여 여러 개의 문자열로 나눈다.
// 알아둘것! 1. split("") ➡️ 값을 일일이 자른다.
// 2. split() ➡️ 값을 아예 자르지 않고 배열에만 넣는다
