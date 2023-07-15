/*추억 점수
https://school.programmers.co.kr/learn/courses/30/lessons/176963

문제 설명
사진들을 보며 추억에 젖어 있던 루는 사진별로 추억 점수를 매길려고 합니다. 사진 속에 나오는 인물의 그리움 점수를 모두 합산한 값이 해당 사진의 추억 점수가 됩니다. 예를 들어 사진 속 인물의 이름이 ["may", "kein", "kain"]이고 각 인물의 그리움 점수가 [5점, 10점, 1점]일 때 해당 사진의 추억 점수는 16(5 + 10 + 1)점이 됩니다. 다른 사진 속 인물의 이름이 ["kali", "mari", "don", "tony"]이고 ["kali", "mari", "don"]의 그리움 점수가 각각 [11점, 1점, 55점]]이고, "tony"는 그리움 점수가 없을 때, 이 사진의 추억 점수는 3명의 그리움 점수를 합한 67(11 + 1 + 55)점입니다.

그리워하는 사람의 이름을 담은 문자열 배열 name, 각 사람별 그리움 점수를 담은 정수 배열 yearning, 각 사진에 찍힌 인물의 이름을 담은 이차원 문자열 배열 photo가 매개변수로 주어질 때, 사진들의 추억 점수를 photo에 주어진 순서대로 배열에 담아 return하는 solution 함수를 완성해주세요.
*/

// 객체 할당하기, 중첩for문, push()
function solution(name, yearning, photo) {
  const nameAndYearning = {};
  const result = [];
  for (i = 0; i < name.length; i++) {
    nameAndYearning[name[i]] = yearning[i];
  }
  for (i = 0; i < photo.length; i++) {
    let point = 0;
    for (j = 0; j < photo[i].length; j++) {
      point += nameAndYearning[photo[i][j]] || 0;
    }
    result.push(point);
  }
  return result;
}

/* 공부내용 정리 블로그
https://hihiha2.tistory.com/146

각각 다른 배열의 값들을 연결하고, 그 value의 값을 이용하기 위해서 객체를 만들었다.
굳이 객체를 만들어야 풀수있는 문제는 아니었지만 이번 문제를 풀면서 객체를 조금 더 공부할 수 있었다.

배열의 인덱스와 indexOf를 통해서 간결하게 푼 코드도 공부해보았다. 생각도 못했던 방식이지만 효율적인것같아서 공부했다.
다음에는 이런 방식으로도 풀어봐야겠다고 생각했다.
*/
