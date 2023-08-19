/* 가운데 글자 가져오기
https://school.programmers.co.kr/learn/courses/30/lessons/12903

문제 설명
단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요. 단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.*/

function solution(s) {
  if (s.length % 2 !== 0) {
    return s[Math.floor(s.length / 2)];
  } else {
    return s[s.length / 2 - 1] + s[s.length / 2];
  }
}

// 변수를 사용하여 개선
function solution(s) {
  const middleIndex = s.length / 2;

  if (s.length % 2 !== 0) {
    return s[Math.floor(middleIndex)];
  } else {
    return s[middleIndex - 1] + s[middleIndex];
  }
}

/* 공부내용 정리 블로그
https://hihiha2.tistory.com/156
*/
