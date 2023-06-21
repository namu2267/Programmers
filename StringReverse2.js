/*
문자열 뒤집기
https://school.programmers.co.kr/learn/courses/30/lessons/181905

문제 설명
문자열 my_string과 정수 s, e가 매개변수로 주어질 때, my_string에서 인덱스 s부터 인덱스 e까지를 뒤집은 문자열을 return 하는 solution 함수를 작성해 주세요.
*/

// slice(), split(),reverse(),join()
function solution(my_string, s, e) {
  let string1 = "";
  let string2 = "";
  let string3 = "";

  string1 = my_string.slice(0, s);
  string2 = my_string
    .slice(s, e + 1)
    .split("")
    .reverse()
    .join("");
  string3 = my_string.slice(e + 1, my_string.length);

  return string1 + string2 + string3;
}

/*
공부내용 정리 블로그
https://hihiha2.tistory.com/128
slice()를 통해서 범위를 정확하게 지정하기 (end는 미포함)
reverse()는 array에만 쓸수있으므로 문자열을 배열로, 배열을 다시 문자열로 바꾸기 (split(),join()이용)
replace()를 이용하는 방법도 공부
*/
