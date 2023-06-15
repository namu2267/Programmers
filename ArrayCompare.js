// 배열 비교하기
// https://school.programmers.co.kr/learn/courses/30/lessons/181856

// 문제 설명
// 이 문제에서 두 정수 배열의 대소관계를 다음과 같이 정의합니다.

// 두 배열의 길이가 다르다면, 배열의 길이가 긴 쪽이 더 큽니다.
// 배열의 길이가 같다면 각 배열에 있는 모든 원소의 합을 비교하여 다르다면 더 큰 쪽이 크고, 같다면 같습니다.
// 두 정수 배열 arr1과 arr2가 주어질 때, 위에서 정의한 배열의 대소관계에 대하여 arr2가 크다면 -1, arr1이 크다면 1, 두 배열이 같다면 0을 return 하는 solution 함수를 작성해 주세요.

// if문, reduce()
function solution(arr1, arr2) {
  const arr1Sum = arr1.reduce((acc, cur) => acc + cur, 0);
  const arr2Sum = arr2.reduce((acc, cur) => acc + cur, 0);

  if (arr1.length === arr2.length) {
    if (arr1Sum > arr2Sum) {
      return 1;
    } else if (arr2Sum > arr1Sum) {
      return -1;
    } else {
      return 0;
    }
  }

  return arr1.length > arr2.length ? 1 : -1;
}

// 공부내용 정리 블로그
// https://hihiha2.tistory.com/118
