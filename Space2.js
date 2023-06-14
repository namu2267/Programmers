// 공백으로 구분하기 2
// https://school.programmers.co.kr/learn/courses/30/lessons/181868

// 문제 설명
// 단어가 공백 한 개 이상으로 구분되어 있는 문자열 my_string이 매개변수로 주어질 때, my_string에 나온 단어를 앞에서부터 순서대로 담은 문자열 배열을 return 하는 solution 함수를 작성해 주세요.


// split(),filter()
function solution(my_string) {
  return my_string.split(' ').filter(a=> a!=='')

// split(), trim()
function solution(my_string) {
  return my_string.trim().split(/\s+/)
}

// split(/\s+/),filter()
function solution(my_string) {
return my_string.split(/\s+/).filter(a=>a !=="")
}


// 공부내용 정리 블로그
// https://hihiha2.tistory.com/115
// split(" ")에 대해 공부
// 💻 split(/\s+/) 과 split(" ")의 차이점
//  학습한 것  
// split(" "): 연속된 공백문자가 아니라, 공백 문자 하나(" ")를 구분자로 사용하여 분할
// (/\s+/): 연속된 공백문자를 구분자로 인식하여 분할