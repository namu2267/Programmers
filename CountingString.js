/*
문자열이 몇 번 등장하는지 세기
https://school.programmers.co.kr/learn/courses/30/lessons/181871

문제 설명
문자열 myString과 pat이 주어집니다. myString에서 pat이 등장하는 횟수를 return 하는 solution 함수를 완성해 주세요.
*/

// for문, push(), slice(), filter()
function solution(myString, pat) {
  const arr = [];

  for (i = 0; i < myString.length; i++) {
    arr.push(myString.slice(i, i + pat.length));
  }
  return arr.filter((v) => v === pat).length;
}

/*
공부내용 정리 블로그
https://hihiha2.tistory.com/130
for문과 slice()의 begin과 end를 이용하여, 인덱스를 이동하면서 나올 값들을 모두 arr배열에 담고 filter를 통해 pat과 일치하는 값만 남겨서 length를 통해 수를 세주었다.

arr에 push()하는 방법말고 count를 숫자로 만들어서 조건을 만족할때마다 +1을 하는 방법도 생각해보았다.

indexOf()의 특징을 이용해서 푸는 방법도 생각하면서, indexOf()에서 알아두면 좋을것같은 특징도 정리했다.
🔫 indexOf()의 특징
1. 일치하는 첫번째 인덱스만 찾는다
2. 일치하는 값이 없으면 -1을 반환한다.
3. 두번째 인자는 검색을 시작할 인덱스
*/
