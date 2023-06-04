// 배열의 원소만큼 추가하기
// https://school.programmers.co.kr/learn/courses/30/lessons/181861

// 문제 설명
// 아무 원소도 들어있지 않은 빈 배열 X가 있습니다. 양의 정수 배열 arr가 매개변수로 주어질 때, arr의 앞에서부터 차례대로 원소를 보면서 원소가 a라면 X의 맨 뒤에 a를 a번 추가하는 일을 반복한 뒤의 배열 X를 return 하는 solution 함수를 작성해 주세요.

// 중첩for문, push()
function solution(arr) {
  let X = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i]; j++) {
      X.push(arr[i]);
    }
  }
  return X;
}

// 공부내용 정리 블로그
// https://hihiha2.tistory.com/102
// 중첩for문 대신 map()을 사용한 방법 공부
// reduce의 초기값으로 []을 넣고 만든 방법 공부
// 학습한것
// Array() / new Array(): 새로운 Array 객체를 생성할 때 사용
// Array 생성자에 인자가 1개들어가면 배열의 length이다.
