// 부분 문자열 이어 붙여 문자열 만들기
// https://school.programmers.co.kr/learn/courses/30/lessons/181911

// 문제 설명
// 길이가 같은 문자열 배열 my_strings와 이차원 정수 배열 parts가 매개변수로 주어집니다. parts[i]는 [s, e] 형태로, my_string[i]의 인덱스 s부터 인덱스 e까지의 부분 문자열을 의미합니다. 각 my_strings의 원소의 parts에 해당하는 부분 문자열을 순서대로 이어 붙인 문자열을 return 하는 solution 함수를 작성해 주세요.

//초기값을 문자열로
function solution(my_strings, parts) {
  let result = ""; 

  for (i = 0; i < parts.length; i++) {
    result += my_strings[i].slice(parts[i][0], parts[i][1] + 1);
  }
  return result;
}

// 초기값을 배열로
function solution(my_strings, parts) {
  let result = [];

  for (i = 0; i < parts.length; i++) {
    result.push(my_strings[i].slice(parts[i][0], parts[i][1] + 1));
  }
  return result.join("");
}

// 공부내용 정리 블로그
// https://hihiha2.tistory.com/125
// 배열로 이루어진 데이터를 받아와서 특정한 수행을 하도록 함수를 짜는 연습을 하였다.
// 만약 이 문제와같이 데이터가 일일이 지정되지 않더라도, 조건에 따라 데이터를 직접 만들어서 가져다쓸수있게하는 연습도 해봐야겠다.
// 배열이나 객체를 데이터로 구조화시키고 그것을 가져다가 함수안에서 특정한 동작을 수행하도록 만드는 과정을 이해하였다.
