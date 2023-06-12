// 특정한 문자를 대문자로 바꾸기
// https://school.programmers.co.kr/learn/courses/30/lessons/181873

// 문제 설명
// 영소문자로 이루어진 문자열 my_string과 영소문자 1글자로 이루어진 문자열 alp가 매개변수로 주어질 때, my_string에서 alp에 해당하는 모든 글자를 대문자로 바꾼 문자열을 return 하는 solution 함수를 작성해 주세요.

// 정규식 생성자 (변수따로 선언)
function solution(my_string, alp) {
  const reg = new RegExp(alp, "g");
  return my_string.replace(reg, alp.toUpperCase());
}

// 정규식 생성자 (변수따로 선언하지 않음)
function solution(my_string, alp) {
  return my_string.replace(new RegExp(alp, "g"), (a) => a.toUpperCase());
}

// 공부내용 정리 블로그
// https://hihiha2.tistory.com/113
// 💻 학습한 것
// replace()와 replaceAll()의 활용
// - replace()는 'g' flag를 적어주기 위해서는 new RegExp()를 사용해서 따로 매개변수를 처리해줘야한다.
// - 반면 replaceAll()의 경우, 매개변수를 바로 이용할 수 있다 (flag를 처리해줄 필요가 없기 때문)
// 만약 한번만 수행해도 되는 경우라면 replace()도 따로 정규식 생성자를 만들 필요는 없다.
// 어려운 문제는 아니었지만 자바스크립트의 메서드를 더 정확하게 이해할 수 있었다.
