/*369게임
https://school.programmers.co.kr/learn/courses/30/lessons/120891

문제 설명
머쓱이는 친구들과 369게임을 하고 있습니다. 369게임은 1부터 숫자를 하나씩 대며 3, 6, 9가 들어가는 숫자는 숫자 대신 3, 6, 9의 개수만큼 박수를 치는 게임입니다. 머쓱이가 말해야하는 숫자 order가 매개변수로 주어질 때, 머쓱이가 쳐야할 박수 횟수를 return 하도록 solution 함수를 완성해보세요.
*/

function solution(order) {
  let count = 0;
  let arr = String(order).split("");

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "3" || arr[i] === "6" || arr[i] === "9") {
      count += 1;
    }
  }
  return count;
}

/* 공부내용 정리 블로그
https://hihiha2.tistory.com/142
매개변수 order의 타입이 number이기때문에, 이터러블한 타입으로 변경하여야 반복문을 사용할 수 있다.
이를 위해서 string타입으로 변경하고, split("")을 통해서 각각 나뉘어진 배열로 다시 바꾸었다.
배열을 순회하는 것을 for으로 처리했는데, matchAll()과 정규식을 이용해서 풀거나 filter()를 통해서 369만 남기는 방법도 있다.
이 문제에서는 number타입으로 들어온 매개변수를 어떻게해서 반복문을 수행가능하게, 이터러블한 값으로 변경할 것인지가 핵심이라고 생각했다. 문제를 풀수록 적절한 메서드를 쓰기위해, 타입변환을 잘 해주는 것이 중요하다는 생각이 들었다.
*/
