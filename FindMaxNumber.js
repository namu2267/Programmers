// 가장 큰 수 찾기

// 문제 설명
// 정수 배열 array가 매개변수로 주어질 때, 가장 큰 수와 그 수의 인덱스를 담은 배열을 return 하도록 solution 함수를 완성해보세요.

//Math.max(), indexOf()
function solution(array) {
  return [Math.max(...array), array.indexOf(Math.max(...array))];
}

// 학습한것
// 1. Math.max() 배열을 인수로 받지 않는다. -> ...전개연산자를 이용해서 배열을 각각의 값으로 분리해야한다.
// 2. indexOf() array.indexOf(찾고싶은값)의 형태로 사용한다.
