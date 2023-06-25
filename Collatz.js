/*
콜라츠 수열 만들기
https://school.programmers.co.kr/learn/courses/30/lessons/181919

문제 설명
모든 자연수 x에 대해서 현재 값이 x이면 x가 짝수일 때는 2로 나누고, x가 홀수일 때는 3 * x + 1로 바꾸는 계산을 계속해서 반복하면 언젠가는 반드시 x가 1이 되는지 묻는 문제를 콜라츠 문제라고 부릅니다.
그리고 위 과정에서 거쳐간 모든 수를 기록한 수열을 콜라츠 수열이라고 부릅니다.
계산 결과 1,000 보다 작거나 같은 수에 대해서는 전부 언젠가 1에 도달한다는 것이 알려져 있습니다.
임의의 1,000 보다 작거나 같은 양의 정수 n이 주어질 때 초기값이 n인 콜라츠 수열을 return 하는 solution 함수를 완성해 주세요.
*/

//while문, if문, push()
function solution(n) {
  const result = [n];

  while (result[result.length - 1] !== 1) {
    if (n % 2 === 0) {
      n = n / 2;
    } else {
      n = 3 * n + 1;
    }
    result.push(n);
  }
  return result;
}

/*
if문을 통해서 주어진 조건에 맞는 식을 만들고 그 값을 result라는 배열에 push()하는 방식으로 풀었다.
반복문을 써야했는데 언제부터 언제까지 몇회를 반복할지는 모르기때문에 범위를 지정하는 for문 대신 while문을 이용했다.
개선할점: 베열의 마지막이 1이 아니게 만들기 위해서 result의 인덱스를 while문의 조건으로 이용했는데, 굳이 저렇게 풀 필요없이 n !==1로 쓰는게 좋았을 것 같다.
*/
