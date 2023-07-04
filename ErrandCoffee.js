/* 커피 심부름
https://school.programmers.co.kr/learn/courses/30/lessons/181837

문제 설명
팀의 막내인 철수는 아메리카노와 카페 라테만 판매하는 카페에서 팀원들의 커피를 사려고 합니다. 아메리카노와 카페 라테의 가격은 차가운 것과 뜨거운 것 상관없이 각각 4500, 5000원입니다. 각 팀원에게 마실 메뉴를 적어달라고 하였고, 그 중에서 메뉴만 적은 팀원의 것은 차가운 것으로 통일하고 "아무거나"를 적은 팀원의 것은 차가운 아메리카노로 통일하기로 하였습니다.

각 직원이 적은 메뉴가 문자열 배열 order로 주어질 때, 카페에서 결제하게 될 금액을 return 하는 solution 함수를 작성해주세요. order의 원소는 아래의 것들만 들어오고, 각각의 의미는 다음과 같습니다 */

// switch문/for문
function solution(order) {
  let result = 0;

  for (let i = 0; i < order.length; i++) {
    switch (order[i]) {
      case "iceamericano":
      case "americanoice":
      case "hotamericano":
      case "americanohot":
      case "americano":
      case "anything":
        result += 4500;
        break;
      case "icecafelatte":
      case "cafelatteice":
      case "hotcafelatte":
      case "cafelattehot":
      case "cafelatte":
        result += 5000;
        break;
    }
  }
  return result;
}

/* 공부내용 정리 블로그
https://hihiha2.tistory.com/141
case가 여러가지인 경우라서, 명시적으로 어떤 경우에 4500원을 더하고 어떤경우에 5000원을 더하는지를 나타내기 위해서 switch문을 사용해서 풀었다.

답이 정해져있는 것은 아니지만, latte인지 americano를 포함하는지에 따라 가격이 2가지로 달라지는 경우이기때문에 각각의 포함하는지에 따라서 얼마를 더할지로 경우를 나누는 것이 코드도 짧고 함수형프로그래밍에도 적합한것같다. 다음에는 이런 방식으로도 풀어봐야겠다.
*/
