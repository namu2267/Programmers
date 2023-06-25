/*
글자 지우기
https://school.programmers.co.kr/learn/courses/30/lessons/181900

문제 설명
문자열 my_string과 정수 배열 indices가 주어질 때, my_string에서 indices의 원소에 해당하는 인덱스의 글자를 지우고 이어 붙인 문자열을 return 하는 solution 함수를 작성해 주세요.
*/

//filter(), includes(), join()
function solution(my_string, indices) {
  return [...my_string].filter((_, i) => !indices.includes(i)).join("");
}

/*
공부내용 정리 블로그
https://hihiha2.tistory.com/131

1.filter의 두번째매개변수로 인덱스를 사용하는 점을 이용해서 문제를 풀었다.
요소의 값자체는 이용하지 않을것이기때문에 _언더스코어로 처리했다.
includes()를 통해 indices에 i가 포함되어있는지를 검사하고 filter를 통해 포함하지 않는 값만 남겼다.
배열이기때문에 join("")을 통해서 다시 하나의 문자열로 만들었다.

2.for문을 이용해서 푸는 방법도 공부

3.for...of를 통해서 반복가능한 객체를 간편하게 순환하는 것을 공부
🔫 for...of
반복문은 iterable 객체의 요소를 처음부터 끝까지 순차적으로 순회하면서 반복 작업을 수행
for...of 반복문은 ES6(ECMAScript 2015)에서 도입된 기능
iterable: 반복 가능한 객체(예: 배열, 문자열, Set, Map 등)
element: 각 요소의 값이 할당되는 변수
👍장점
for...of 반복문을 사용하면 반복 과정에서 인덱스를 직접 다룰 필요가 없다
간결하고 가독성이 좋은 코드 작성가능
*/
