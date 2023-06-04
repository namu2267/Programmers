// 배열에서 문자열 대소문자 변환하기
// https://school.programmers.co.kr/learn/courses/30/lessons/181875

// 문제 설명
// 문자열 배열 strArr가 주어집니다. 모든 원소가 알파벳으로만 이루어져 있을 때, 배열에서 홀수번째 인덱스의 문자열은 모든 문자를 대문자로, 짝수번째 인덱스의 문자열은 모든 문자를 소문자로 바꿔서 반환하는 solution 함수를 완성해 주세요.

// 방법1: 원본변경됨
function solution(strArr) {
  for (let i = 0; i < strArr.length; i++) {
    if (i % 2 === 1) {
      strArr[i] = strArr[i].toUpperCase();
    } else {
      strArr[i] = strArr[i].toLowerCase();
    }
  }
  return strArr;
}

// 방법2:원본유지
function solution(strArr) {
  return strArr.map((str, i) => {
    if (i % 2 === 0) {
      return str.toLowerCase();
    } else {
      return str.toUpperCase();
    }
  });
}


// 공부내용 정리 블로그
// https://hihiha2.tistory.com/103
// 원본을 유지해야하는지, 변경해야하는지는 상황에 따라 다르기때문에 알맞게 사용하기
// map()을 이용한 코드를 삼항연산자로 바꾸기
// reduce의 초기값에 빈배열을 넣어서 만든방법 공부