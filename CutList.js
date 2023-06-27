/*
리스트 자르기
https://school.programmers.co.kr/learn/courses/30/lessons/181897

문제 설명
정수 n과 정수 3개가 담긴 리스트 slicer 그리고 정수 여러 개가 담긴 리스트 num_list가 주어집니다. slicer에 담긴 정수를 차례대로 a, b, c라고 할 때, n에 따라 다음과 같이 num_list를 슬라이싱 하려고 합니다.

n = 1 : num_list의 0번 인덱스부터 b번 인덱스까지
n = 2 : num_list의 a번 인덱스부터 마지막 인덱스까지
n = 3 : num_list의 a번 인덱스부터 b번 인덱스까지
n = 4 : num_list의 a번 인덱스부터 b번 인덱스까지 c 간격으로
올바르게 슬라이싱한 리스트를 return하도록 solution 함수를 완성해주세요.
*/

function solution(n, slicer, num_list) {
  1;
  if (n === 1) {
    num_list = num_list.slice(0, slicer[1] + 1);
  }
  if (n === 2) {
    num_list = num_list.slice(slicer[0]);
  }
  if (n === 3) {
    num_list = num_list.slice(slicer[0], slicer[1] + 1);
  }
  if (n === 4) {
    num_list = num_list
      .slice(slicer[0], slicer[1] + 1)
      .filter((_, i) => i % slicer[2] === 0);
  }
  return num_list;
}

/*
공부내용 정리 블로그
https://hihiha2.tistory.com/133

n의 값에 따라서 잘라야하는 인덱스의 범위가 달라진다. if문을 통해서 각각의 경우를 나눠줬는데, case가 여러개인 경우이기 때문에 switch문으로 풀었으면 더 좋았을 것 같다.
n=1,2,3인 경우에는 slice()를 이용해서 범위를 지정해서 푼다.
n=4인 경우에만 slice()를 통한 범위지정에 추가로 filter()를 통해서 c간격인 값들만 남긴다.
개선할점: switch문을 통해서 case를 나누고, 배열의 구조분해할당을 통해서 가독성을 높이는 것도 좋았을 것 같다.
*/
