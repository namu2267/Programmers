// 점의 위치 구하기

// 문제 설명
// 사분면은 한 평면을 x축과 y축을 기준으로 나눈 네 부분입니다. 사분면은 아래와 같이 1부터 4까지 번호를매깁니다.

// if문
function solution(dot) {
  if (dot[0] > 0 && dot[1] > 0) {
    return 1;
  }
  if (dot[0] > 0 && dot[1] < 0) {
    return 4;
  }
  if (dot[0] < 0 && dot[1] > 0) {
    return 2;
  }

  if (dot[0] < 0 && dot[1] < 0) {
    return 3;
  }
}

// 구조분해할당, 삼항연산자이용
function solution(dot) {
  const [num1, num2] = dot;
  const check = num1 * num2 > 0;
  return num1 > 0 ? (check ? 1 : 4) : check ? 3 : 2;
}
