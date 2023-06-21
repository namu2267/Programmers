/*
세로 읽기
https://school.programmers.co.kr/learn/courses/30/lessons/181904

문제 설명
문자열 my_string과 두 정수 m, c가 주어집니다. my_string을 한 줄에 m 글자씩 가로로 적었을 때 왼쪽부터 세로로 c번째 열에 적힌 글자들을 문자열로 return 하는 solution 함수를 작성해 주세요.
*/

//for문, +=복합할당연산자
function solution(my_string, m, c) {
  let result = "";

  for (i = c - 1; i < my_string.length; i += m) {
    result += my_string[i];
  }

  return result;
}

/*
공부내용 정리 블로그
https://hihiha2.tistory.com/127
m씩 증가하는 규칙: 인덱스가 m만큼씩 증가한다는 규칙을 이옹해서 풀었다.
공부한 것: 어차피 가로의 길이가 m으로 정해져있으므로 m으로 나눈 나머지를 통해서 열의 값을 구하는 방식이 좋은것 같아서 공부해보았다.
function solution(my_string, m, c) {
return [...my_string].filter((_, i) => i % m === c - 1).join('');
}
*/
