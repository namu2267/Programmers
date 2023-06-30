/*중복된 문자 제거
https://school.programmers.co.kr/learn/courses/30/lessons/120888

문제 설명
문자열 my_string이 매개변수로 주어집니다. my_string에서 중복된 문자를 제거하고 하나의 문자만 남긴 문자열을 return하도록 solution 함수를 완성해주세요.
*/

// new Set(), join()
function solution(my_string) {
  return [...new Set(my_string)].join("");
}

/* 공부내용 정리 블로그
https://hihiha2.tistory.com/138
중복된 문자를 제거하기 위해서 new Set()을 사용했다. 사용법이 쉬워서 문제는 금방 풀었는데, set객체에 대해 이해하기 위해서 따로 공부하고 블로그에 정리하였다.
set은 중복된값을 허용하지 않는 특성을 지니고 있다. 이러한 특성을 이용하면 쉽게 중복값을 제거할 수 있다.
이터러블한 값을 new Set()을 이용해서 set객체로 만든 후, 다시 ...전개연산자를 사용해서 배열로 바꾸고 원하는 처리를 한다.
has나 delete와 같은 다른 메서드들도 있는데 나중에 이런것들도 사용해보고 싶다.
*/
