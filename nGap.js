// n개 간격의 원소들
// https://school.programmers.co.kr/learn/courses/30/lessons/181888

// 문제 설명
// 정수 리스트 num_list와 정수 n이 주어질 때, num_list의 첫 번째 원소부터 마지막 원소까지 n개 간격으로 저장되어있는 원소들을 차례로 담은 리스트를 return하도록 solution 함수를 완성해주세요.

//for문, push()
function solution(num_list, n) {
  let list = [];
  for (let i = 0; i < num_list.length; i += n) {
    list.push(num_list[i]);
  }
  return list;
}

// 공부내용 정리 블로그
// https://hihiha2.tistory.com/107
// filter()를 사용한 방법도 생각해봄
// 학습한것: _ (언더스코어) : 사용되지 않는 매개변수 이름을 관례적으로 나타냄
// 해당 매개변수를 사용하지 않고자 할 때 _를 사용하여 "무시"한다는 의미를 표현
// 인덱스의 값이 특정패턴으로 증가할때: +패턴 / n의 배수인지 검사
// n의 배수인지 검사: n으로 나눴을때 나머지가 0인지, n으로 나눈 나머지가 존재하는지 Boolean값으로.
// 같은 문제도 여러가지 방향으로 생각해보는것이 좋다.
