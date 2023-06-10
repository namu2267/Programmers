// 정수를 나선형으로 배치하기
// https://school.programmers.co.kr/learn/courses/30/lessons/181832b

// 문제 설명
// 양의 정수 n이 매개변수로 주어집니다. n × n 배열에 1부터 n2 까지 정수를 인덱스 [0][0]부터 시계방향 나선형으로 배치한 이차원 배열을 return 하는 solution 함수를 작성해 주세요.

// Array(), Array.from(), 즁첩for문
function solution(n) {
  const result = Array.from(Array(n), () => Array(n).fill(0)); // n x n 배열 생성

  let num = 1; // 시작 숫자
  let row = 0; // 행의 시작 인덱스
  let col = 0; // 열의 시작 인덱스

  for (let i = n; i > 0; i -= 2) {
    // 오른쪽으로 이동
    for (let j = 0; j < i; j++) {
      result[row][col] = num++;
      col++;
    }
    col--;
    row++;

    // 아래로 이동
    for (let j = 0; j < i - 1; j++) {
      result[row][col] = num++;
      row++;
    }
    row--;
    col--;

    // 왼쪽으로 이동
    for (let j = 0; j < i - 1; j++) {
      result[row][col] = num++;
      col--;
    }
    col++;
    row--;

    // 위로 이동
    for (let j = 0; j < i - 2; j++) {
      result[row][col] = num++;
      row--;
    }
    row++;
    col++;
  }

  return result;
}

// 공부내용 정리 블로그
// https://hihiha2.tistory.com/112
// 학습한 것
// ✔️ Array()와 Array.from()의 차이점
// Array()는 간단한 배열 생성이나 초기화에 사용되고, Array.from()은 기존 배열이나 이터러블 객체를 변환하거나 새로운 배열을 생성
// ✔️ n x n 2차원 배열만들기
// Array.from(Array(n), () => Array(n))
