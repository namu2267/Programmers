/* 7의 개수
https://school.programmers.co.kr/learn/courses/30/lessons/120912

문제 설명
머쓱이는 행운의 숫자 7을 가장 좋아합니다. 정수 배열 array가 매개변수로 주어질 때, 7이 총 몇 개 있는지 return 하도록 solution 함수를 완성해보세요.
*/

// join(), split(), filter()
function solution(array) {
  return array
    .join("")
    .replace(/7/g, "a")
    .split("")
    .filter((v) => v === "a").length;
}

/*
문제는 엄청 빨리 풀었는데, 문제를 다 풀고나서 중간에 replace()를 굳이 할 필요가 없는 것을 깨달았다.
그래서 아래와 같이 더 간결하게 코드를 바꾸었다.
*/

function solution(array) {
  return array
    .join()
    .split("")
    .filter((v) => v === "7").length;
}

// 이렇게하면 굳이 replace()를 사용하지 않아도 7의 값만을 찾아서 몇개인지를 구할 수 있다
