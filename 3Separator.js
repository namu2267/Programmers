/* 
세 개의 구분자
https://school.programmers.co.kr/learn/courses/30/lessons/181862

문제 설명
임의의 문자열이 주어졌을 때 문자 "a", "b", "c"를 구분자로 사용해 문자열을 나누고자 합니다.
예를 들어 주어진 문자열이 "baconlettucetomato"라면 나눠진 문자열 목록은 ["onlettu", "etom", "to"] 가 됩니다.
문자열 myStr이 주어졌을 때 위 예시와 같이 "a", "b", "c"를 사용해 나눠진 문자열을 순서대로 저장한 배열을 return 하는 solution 함수를 완성해 주세요.
단, 두 구분자 사이에 다른 문자가 없을 경우에는 아무것도 저장하지 않으며, return할 배열이 빈 배열이라면 ["EMPTY"]를 return 합니다.
*/

// split(), filter()
function solution(myStr) {
  myStr = myStr.split(/a|b|c/).filter((v) => v);
  return myStr.length === 0 ? ["EMPTY"] : myStr;
}

/*
공부내용 정리 블로그
https://hihiha2.tistory.com/132

split()을 통해서 구분자를 기준으로 문자열을 자르고 배열로 바꾼다. 
여러개의 구분자를 정규식을 통해서 만든다.
구분자가 문자열의 맨끝에 있는 경우, 빈문자열로 바뀌는 split()의 특징때문에 발생하는 배열안의 빈문자열은 filter를 통해 거른다.
삼항연산자를 통해서 []의 경우에는 ["EMPTY"]를, 값이 있을때는 값을 리턴하도록 한다.

match()를 통해서 푸는 방법도 공부함
match()와 ||연산자에 대해서도 공부하였다.
🔫 match()의 특징
1. 배열로 반환
2. 일치하는 부분을 잘라서 각각 담는다
3. 일치하는 값이 없으면 null을 반환한다
➡️ 일치하는 값이 없으면 null을 반환하는 특징과 ||연산자를 이용하여 삼항연산자를 사용하지 않고 ["EMPTY"]값을 반환한다.
➡️ match()는 split()과 유사한 기능을 하는것같다.

🔫 || 연산자
|| 연산자는 논리 OR (또는) 연산자로, 주어진 피연산자 중 하나 이상이 참이면 결과를 참으로 평가
동작수행 순서
1. 왼쪽 피연산자를 평가
2. 왼쪽 피연산자가 참(Truthy)인 경우, 왼쪽 피연산자의 값이 결과로 반환₩
3. 왼쪽 피연산자가 거짓(Falsy)인 경우, 오른쪽 피연산자를 평가하고 그 값을 결과로 반환

*/
