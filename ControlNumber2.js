/*수 조작하기 2
https://school.programmers.co.kr/learn/courses/30/lessons/181925#

문제 설명
정수 배열 numLog가 주어집니다. 처음에 numLog[0]에서 부터 시작해 "w", "a", "s", "d"로 이루어진 문자열을 입력으로 받아 순서대로 다음과 같은 조작을 했다고 합시다.

"w" : 수에 1을 더한다.
"s" : 수에 1을 뺀다.
"d" : 수에 10을 더한다.
"a" : 수에 10을 뺀다.
그리고 매번 조작을 할 때마다 결괏값을 기록한 정수 배열이 numLog입니다. 즉, numLog[i]는 numLog[0]로부터 총 i번의 조작을 가한 결과가 저장되어 있습니다.

주어진 정수 배열 numLog에 대해 조작을 위해 입력받은 문자열을 return 하는 solution 함수를 완성해 주세요.
*/

//for문
function solution(numLog) {
  let result = "";
  for (i = 0; i < numLog.length; i++) {
    if (numLog[i + 1] - numLog[i] === 1) {
      result += "w";
    } else if (numLog[i + 1] - numLog[i] === -1) {
      result += "s";
    } else if (numLog[i + 1] - numLog[i] === 10) {
      result += "d";
    } else if (numLog[i + 1] - numLog[i] === -10) {
      result += "a";
    }
  }
  return result;
}

/* 공부내용 정리 블로그
https://hihiha2.tistory.com/145

for문을 이용해서 문제를 풀었는데, 다 풀고 보니 개선해야할 점들이 눈에 보였다.
1. i<numLog.length-1로 범위 수정
i=num.length-1가 된다면, 마지막값이 없어서 undefined이 생기는 오류가 발생할 가능성이 있다.
2. 반복되는 코드 변수에 담아서 가독성 높이기
numLog[i+1]-numLog[i]가 반복되므로 변수에 담아서 if문의 조건식에 넣어준다.
3. 객체를 활용하여 더 사용성이 높은 코드짜기

객체를 활용한 코드가 가독성이나 활용도 측면에서 훨씬 좋아보인다. 특히, 경우의 수가 매우 늘어나더라도 코드는 크게 늘지 않고 또 가독성도 크게 나빠지지 않는점이 매력적이다. 다음에는 이런 문제를 해결할 때 객체를 활용하여 코드를 짜야겠다고 생각했다.
*/
