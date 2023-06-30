/* 배열 조각하기
https://school.programmers.co.kr/learn/courses/30/lessons/181893

문제 설명
정수 배열 arr와 query가 주어집니다.

query를 순회하면서 다음 작업을 반복합니다.

짝수 인덱스에서는 arr에서 query[i]번 인덱스를 제외하고 배열의 query[i]번 인덱스 뒷부분을 잘라서 버립니다.
홀수 인덱스에서는 arr에서 query[i]번 인덱스는 제외하고 배열의 query[i]번 인덱스 앞부분을 잘라서 버립니다.
위 작업을 마친 후 남은 arr의 부분 배열을 return 하는 solution 함수를 완성해 주세요. */

// forEach, if문, splice()
function solution(arr, query) {
  let result = [...arr];

  query.forEach((v, i) => {
    if (i % 2 === 0) {
      result.splice(query[i] + 1);
    } else {
      result.splice(0, query[i]);
    }
  });
  return result;
}

/* 공부내용 정리 블로그
https://hihiha2.tistory.com/136
문제를 푸는데에는 시간이 많이 걸리지 않았지만 forEach와 map의 차이점을 이해하려고 공부하는데에 시간이 많이 들었다.
전부터 궁금했던점이라서 정리하고 이해하려고 노력했다. 
특히, 리액트에서의 두 메서드의 차이점과 활용법에 대해서 중점적으로 공부했다.
forEach는 순회하면서 단순반복작업을 하기 위해 주로 사용하고 map은 새로운 배열을 반환하는 특성이 있기때문에 새로운 값을 만들어낼때 사용한다. (forEach는 반환값이 없기때문에 JSX안에서는 map을 사용해야한다)
리액트는 불변성을 유지해야하는 특징이 있기때문에 어차피 새로운 값을 생성해야 정상적으로 상태변화가 업데이트된다. 따라서 console.log처럼 단순한 작업이 아닌경우, 거의 대부분의 작업이 새로운 값을 생성해야 할것이다. ➡️ forEach보다 map을 사용도가 더 높을것
직접 공부하고 이해한 내용을 바탕으로 정리하여서 정확하지 않은 부분이 있을 수 있지만, 나름대로 머릿속에서 두개의 개념이 정리된 것 같아서 좋다. 앞으로 공부하면서 또 부족한 부분을 채워나가야겠다.
*/
