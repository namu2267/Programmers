/*qr code
https://school.programmers.co.kr/learn/courses/30/lessons/181903

문제 설명
두 정수 q, r과 문자열 code가 주어질 때, code의 각 인덱스를 q로 나누었을 때 나머지가 r인 위치의 문자를 앞에서부터 순서대로 이어 붙인 문자열을 return 하는 solution 함수를 작성해 주세요.
*/

// 방법1:for문사용
function solution(q, r, code) {
  let result = "";

  for (i = 0; i < code.length; i++) {
    if (i % q === r) {
      result += code[i];
    }
  }
  return result;
}

// 방법2:map사용
function solution(q, r, code) {
  let result = "";
  [...code].map((v, i) => (i % q === r ? (result += v) : result));
  return result;
}

/* 공부내용 정리 블로그
https://hihiha2.tistory.com/139
for문을 사용해서 풀었는데, 같은 코드를 map()을 사용하는 것으로도 바꿔보았다.
배열을 순회하면서 특정요소만을 남기는것은 filter()을 사용하면 간단한데, 문제를 풀면서 생각이 안났었다.
다음번에는 바로 떠올려야지 filter!
*/
