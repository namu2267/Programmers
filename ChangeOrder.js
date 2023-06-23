/*
순서 바꾸기
https://school.programmers.co.kr/learn/courses/30/lessons/181891

문제 설명
정수 리스트 num_list와 정수 n이 주어질 때, num_list를 n 번째 원소 이후의 원소들과 n 번째까지의 원소들로 나눠 n 번째 원소 이후의 원소들을 n 번째까지의 원소들 앞에 붙인 리스트를 return하도록 solution 함수를 완성해주세요.
*/

// slice(), ...스프레드연산자
function solution(num_list, n) {
  let front_list = num_list.slice(0, n);
  let back_list = num_list.slice(n, num_list.length);

  return [...back_list, ...front_list];
}

/*
공부내용 정리 블로그
https://hihiha2.tistory.com/129
slice()와 splice()의 차이점 알기
원본을 변경하지 않는 slice()와 원본을 변경하는 splice()
...스프레드연산자의 다양한 사용법 알기
단순히 알고리즘을 푸는 것이 아니라, 자바스크립트에 대한 이해를 높이기 위해서 이 문제를 통해서 뭘 공부할 수 있을지 고민함 
*/
