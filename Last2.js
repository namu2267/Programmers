// 마지막 두 원소
// https://school.programmers.co.kr/learn/courses/30/lessons/181927

// 문제 설명
// 정수 리스트 num_list가 주어질 때, 마지막 원소가 그전 원소보다 크면 마지막 원소에서 그전 원소를 뺀 값을 마지막 원소가 그전 원소보다 크지 않다면 마지막 원소를 두 배한 값을 추가하여 return하도록 solution 함수를 완성해주세요.

// 배열의 인덱스, push()
function solution(num_list) {
  let last = num_list[num_list.length - 1];
  let last2 = num_list[num_list.length - 2];
  if (last > last2) {
    num_list.push(last - last2);
  } else {
    num_list.push(last * 2);
  }

  return num_list;
}

// 공부내용 정리 블로그
// https://hihiha2.tistory.com/87
// Push(): 배열의 끝에 하나 이상의 요소를 추가하고, 배열의 새로운 길이를 반환
// 주의할점: 배열의 값들을 원한다면 push를 해준 이후에 따로 그 배열을 리턴해주어야한다.
// 만약 배열의 길이를 원한다면 push를 하면서 바로 리턴을 해주면 된다
// reverse(), const를 이용하여 값을 추출해서 만드는 방법도 좋았음 참고!
