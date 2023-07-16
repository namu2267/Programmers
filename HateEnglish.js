/*영어가 싫어요
https://school.programmers.co.kr/learn/courses/30/lessons/120894

문제 설명
영어가 싫은 머쓱이는 영어로 표기되어있는 숫자를 수로 바꾸려고 합니다. 문자열 numbers가 매개변수로 주어질 때, numbers를 정수로 바꿔 return 하도록 solution 함수를 완성해 주세요.
*/

// 객체리터럴, 정규식 생성자, Object.keys(), join(), replace()
function solution(numbers) {
  const obj = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };
  const reg = new RegExp(Object.keys(obj).join("|"), "g");
  const str = numbers.replace(reg, (match) => obj[match]);
  return Number(str);
}

/* 공부내용 정리 블로그
https://hihiha2.tistory.com/147

각각에 해당되는 문자열과 숫자를 연결하기 위해서 객체리터럴로 객체를 만들었다.
그리고 그 값을 replace()를 통해서 numbers배열에서 해당되는 key값을 만나면 그 값을 value값으로 대체했다.
replace()의 첫번째 매개변수에는 문자열과 정규식이 들어갈 수 있기 때문에 정규식 생성자를 통해서 정규식을 만들어서 replace를 통해서 해당값이 대체되도록 하였다. 그리고 일치하는 값을 만나면 두번째 매개변수인 함수를 통해서 그 값을 일치하는 value로 변경했다.
마지막으로 Number()를 통해서 숫자로 타입을 변경했다.

💻 학습한 것
1️⃣ replace의 형태
var newStr = str.replace(regexp|substr, newSubstr|function)
replace는 첫번째 매개변수에 바뀌어서 없어질 값을 넣고, 두번째 매개변수에 새롭게 대체되어 들어올 값을 넣는다.
첫번째 매개변수: 정규식 / 문자열
두번째 매개변수: 문자열 / 함수 
의 형태가 들어올 수 있다.

2️⃣  Object.keys(): 객체의 속성 이름들을 일반적인 반복문과 동일한 순서로 순회되는 열거할 수 있는 배열로 반환
Object.keys(obj)
Object.keys()를 통해서 객체의 key값들만 뽑아올수가 있다.

이외에도 split()과 join()을 통해서 replace()와 유사한 기능을 하도록 만드는 코드를 공부했다.
*/
