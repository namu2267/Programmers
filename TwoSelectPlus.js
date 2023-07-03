/* 두 개 뽑아서 더하기
https://school.programmers.co.kr/learn/courses/30/lessons/68644

문제 설명
정수 배열 numbers가 주어집니다. numbers에서 서로 다른 인덱스에 있는 두 개의 수를 뽑아 더해서 만들 수 있는 모든 수를 배열에 오름차순으로 담아 return 하도록 solution 함수를 완성해주세요.
*/

//중첩for문, push(), Set객체, sort()
function solution(numbers) {
  let result = [];

  for (i = 0; i < numbers.length; i++) {
    for (j = i + 1; j < numbers.length; j++) {
      result.push(numbers[i] + numbers[j]);
    }
  }
  return [...new Set(result)].sort((a, b) => a - b);
}

// flatMap(), map(),slice(), Set객체, sort()
function solution(numbers) {
  const result = numbers.map((value, i) => {
    return numbers.slice(i + 1).map((otherValue) => value + otherValue);
  });

  return Array.from(new Set(result)).sort((a, b) => a - b);
}

/* 공부내용 정리 블로그
https://hihiha2.tistory.com/140
중복제거를 위해서 Set객체, 정렬을 위해서 sort()는 금방 떠올랐는데 각각 다른 인덱스를 어떻게 더할까를 고민했다.
중첩 for문을 통해서 위의 고민을 해결했는데, 아무래도 리액트로 작업할때는 map()을 많이 이용하기 때문에 위의 코드를 map으로 짜는 법이 궁금해서 공부했다.

💻 학습한 것
flatMap(): 매핑함수를 사용해 각 엘리먼트에 대해 map 수행 후, 결과를 새로운 배열로 평탄화
map은 새로운 배열을 생성하는 특징이 있기때문에 중첩map을 사용하면 배열안에 배열들이 담기는 형태가 된다. 이것을 평탄화해주기 위해서 바깥쪽의 map은 flatMap()으로 만들어야한다.
✔️ 주의할점: 내부 map은 return처리를 해주어야 한다.
map은 생성만할뿐, 자동으로 return되는 것은 아니기때문에 반드시 return을 해주어야한다. 안쪽에서 사용하는 map도 반드시 return처리를 하도록한다.
*/
