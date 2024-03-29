// 숫자 문자열과 영단어
// https://school.programmers.co.kr/learn/courses/30/lessons/81301

// 네오와 프로도가 숫자놀이를 하고 있습니다. 네오가 프로도에게 숫자를 건넬 때 일부 자릿수를 영단어로 바꾼 카드를 건네주면 프로도는 원래 숫자를 찾는 게임입니다.

// 다음은 숫자의 일부 자릿수를 영단어로 바꾸는 예시입니다.

// 1478 → "one4seveneight"
// 234567 → "23four5six7"
// 10203 → "1zerotwozero3"
// 이렇게 숫자의 일부 자릿수가 영단어로 바뀌어졌거나, 혹은 바뀌지 않고 그대로인 문자열 s가 매개변수로 주어집니다. s가 의미하는 원래 숫자를 return 하도록 solution 함수를 완성해주세요.

// replace()
function solution(s) {
  s = s
    .replace(/zero/g, 0)
    .replace(/one/g, 1)
    .replace(/two/g, 2)
    .replace(/three/g, 3)
    .replace(/four/g, 4)
    .replace(/five/g, 5)
    .replace(/six/g, 6)
    .replace(/seven/g, 7)
    .replace(/eight/g, 8)
    .replace(/nine/g, 9);

  return Number(s);
}

// 공부내용 정리 블로그
// https://hihiha2.tistory.com/92
// replace():  어떤 패턴에 일치하는 부분 또는 모든 부분이 교체된 새로운 문자열을 반환
// .replace(/A/i, B): 대소문자 상관없이 replace
// .replace(/A/g,B): 전역적으로 replace
