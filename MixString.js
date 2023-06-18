// 문자열 섞기
// https://school.programmers.co.kr/learn/courses/30/lessons/181942

// 문제 설명
// 길이가 같은 두 문자열 str1과 str2가 주어집니다.

// 두 문자열의 각 문자가 앞에서부터 서로 번갈아가면서 한 번씩 등장하는 문자열을 만들어 return 하는 solution 함수를 완성해 주세요.

// 초기값을 string으로 설정하기
function solution(str1, str2) {
  let result = "";

  for (i = 0; i < str1.length; i++) {
    result += str1[i] + str2[i];
  }

  return result;
}
// 초기값을 string으로 설정하기
function solution(str1, str2) {
  let result = [];

  for (i = 0; i < str1.length; i++) {
    result.push(str1[i] + str2[i]);
  }
  return result.join("");
}

// 공부내용 정리 블로그
// https://hihiha2.tistory.com/124
// 🔫 복합할당연산자 +=
// 변수의 현재값에 다른 값을 더한 후 그 결과를 다시 변수에 할당하는 역할
// 변수 += 표현식
// 어렵지 않은 문제지만, 배울것들이 있어서 정리해보았다.
// 다른 방식으로 초기값을 지정함으로써 추후 구현할 코드도 아예 달라지는 것을 느낌. ts를 쓸때 타입지정을 잘해줘야되는 이유인것 같다.
