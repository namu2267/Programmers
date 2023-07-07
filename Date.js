/*날짜 비교하기
https://school.programmers.co.kr/learn/courses/30/lessons/181838

문제 설명
정수 배열 date1과 date2가 주어집니다. 두 배열은 각각 날짜를 나타내며 [year, month, day] 꼴로 주어집니다. 각 배열에서 year는 연도를, month는 월을, day는 날짜를 나타냅니다.

만약 date1이 date2보다 앞서는 날짜라면 1을, 아니면 0을 return 하는 solution 함수를 완성해 주세요.
*/

// 배열구조분해, if문
function solution(date1, date2) {
  const [year1, month1, day1] = [...date1];
  const [year2, month2, day2] = [...date2];

  if (year1 < year2) {
    return 1;
  } else if (year1 === year2) {
    if (month1 < month2) {
      return 1;
    } else if (month1 === month2) {
      if (day1 < day2) {
        return 1;
      } else {
        return 0;
      }
    } else {
      return 0;
    }
  } else {
    return 0;
  }
}

/* 공부내용 정리 블로그
https://hihiha2.tistory.com/143
가독성을 위해서 배열의 구조분해할당을 하고, if문을 통해서 경우를 나누어서 풀었다.
new Date()를 통해서 date객체를 생성하여 값을 비교하여 푸는 방법과, join('')을 통해서 배열을 string으로 만들고 뺄셈을 통해 값을 비교하는 방법도 공부했다.

💻 학습한 것
new Date(): 날짜와 시간을 나타내는 객체인 Date 객체를 생성하는 데 사용되는 내장 생성자
*/
