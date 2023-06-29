/*
주사위의 개수
https://school.programmers.co.kr/learn/courses/30/lessons/120845

문제 설명
머쓱이는 직육면체 모양의 상자를 하나 가지고 있는데 이 상자에 정육면체 모양의 주사위를 최대한 많이 채우고 싶습니다. 상자의 가로, 세로, 높이가 저장되어있는 배열 box와 주사위 모서리의 길이 정수 n이 매개변수로 주어졌을 때, 상자에 들어갈 수 있는 주사위의 최대 개수를 return 하도록 solution 함수를 완성해주세요.
*/

//parseInt()
function solution(box, n) {
  return parseInt(box[0] / n) * parseInt(box[1] / n) * parseInt(box[2] / n);
}

/*
공부내용 정리 블로그
https://hihiha2.tistory.com/135
상자와 주사위가 입체적이기때문에 머릿속으로 상상하면서 문제를 풀었다.
생각만해내고나면, 자바스크립트 코드로 옮기기는 어렵지 않은 문제
코드읙 가독성을 위해 배열의 구조분해할당을 이용할 것
정수만들기와 곱이 반복되기때문에 reduce를 이용해서도 풀 수 있다.
*/
