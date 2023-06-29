/*
빈 배열에 추가, 삭제하기
https://school.programmers.co.kr/learn/courses/30/lessons/181860

문제 설명
아무 원소도 들어있지 않은 빈 배열 X가 있습니다. 길이가 같은 정수 배열 arr과 boolean 배열 flag가 매개변수로 주어질 때, flag를 차례대로 순회하며 flag[i]가 true라면 X의 뒤에 arr[i]를 arr[i] × 2 번 추가하고, flag[i]가 false라면 X에서 마지막 arr[i]개의 원소를 제거한 뒤 X를 return 하는 solution 함수를 작성해 주세요

*/

//for문, if문, push(), Array(), fill(), splice()
function solution(arr, flag) {
  let X = [];
  for (i = 0; i < flag.length; i++) {
    if (flag[i]) {
      X.push(...Array(arr[i] * 2).fill(arr[i]));
    } else {
      X.splice(X.length - arr[i], arr[i]);
    }
  }

  return X;
}

/*
공부내용 정리 블로그
https://hihiha2.tistory.com/134

X에 더할 값은 Array()를 통해 배열의 길이를 정하고 fill()을 통해 원하는 값으로 배열을 채워서 풀었다. 
X에서 제거할 값은 splice()를 통해 범위와 개수를 지정했다.

forEach를 통해서 flag를 돌면서 그안에서 for문을 통해서 각각의 범위를 지정하는 코드를 공부했는데, 각각의 범위가 따로 지정이 되어있어서 가독성 측면에서 좋은것같았다.
반복문은 중첩해서 돌지 않는것이 성능면에서 더 좋은 코드가 아닐까 생각했는데, 가독성도 중요하기때문에 어떻게 짜는것이 더 좋은코드인지는 공부를 더 해봐야할 것 같다.
*/
