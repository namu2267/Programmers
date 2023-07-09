/*A로 B 만들기
https://school.programmers.co.kr/learn/courses/30/lessons/120886

문제 설명
문자열 before와 after가 매개변수로 주어질 때, before의 순서를 바꾸어 after를 만들 수 있으면 1을, 만들 수 없으면 0을 return 하도록 solution 함수를 완성해보세요.
*/

// sort(),join()
function solution(before, after) {
  return [...before].sort().join("") === [...after].sort().join("") ? 1 : 0;
}

/*
sort()를 사용하기 위해, ...연산자를 사용해서 펼쳐서 배열에 담아서 배열로 만들었다.
sort()를 사용해서 정렬을 해주고 다시 join('')을 통해서 하나의 문자열로 만든다.
after도 같은 방법을 사용하여 정렬하고 하나의 문자열로 만든다.
마지막으로 두개의 값을 비교한 뒤, 삼항연산자를 통해 값이 같으면 1, 다른면 0을 반환하도록 한다.

sort(): 기본정렬순러를 문자열의 유니코드 코드 포인트를 따른다.
*/
