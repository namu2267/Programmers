// 옹알이 (1)
// https://school.programmers.co.kr/learn/courses/30/lessons/120956

// 문제 설명
// 머쓱이는 태어난 지 6개월 된 조카를 돌보고 있습니다. 조카는 아직 "aya", "ye", "woo", "ma" 네 가지 발음을 최대 한 번씩 사용해 조합한(이어 붙인) 발음밖에 하지 못합니다. 문자열 배열 babbling이 매개변수로 주어질 때, 머쓱이의 조카가 발음할 수 있는 단어의 개수를 return하도록 solution 함수를 완성해주세요.

// replaceAll(), filter()
function solution(babbling) {
  return babbling
    .map((word) => word.replaceAll(/aya|ye|woo|ma/gi, ""))
    .filter((a) => a === "").length;
}

// 공부내용 정리 블로그
// https://hihiha2.tistory.com/106
// 정규식을 이용해서 푼 코드를 공부하면서 정규식에 대해서 공부
function solution(babbling) {
  var answer = 0;
  const regex = /^(aya|ye|woo|ma)+$/;

  babbling.forEach((word) => {
    if (regex.test(word)) answer++;
  });

  return answer;
}

// 정규식:패턴을 정의하고 이를 이용하여 문자열을 비교하거나 조작하게 해준다. 패턴은 특정문자나 문자열의 조합, 특정패턴의 반복등을 표현할 수 있다. 문자열의 검색, 대체, 추출등 다양한 작업을 할 수 있다.
