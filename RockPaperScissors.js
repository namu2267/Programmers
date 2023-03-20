// 가위 바위 보

// 문제 설명

// 가위는 2 바위는 0 보는 5로 표현합니다. 가위 바위 보를 내는 순서대로 나타낸 문자열 rsp가 매개변수로 주어질 때, rsp에 저장된 가위 바위 보를 모두 이기는 경우를 순서대로 나타낸 문자열을 return하도록 solution 함수를 완성해보세요.

//객체, map(), join()
function solution(rsp) {
  let obj = {
    2: 0,
    0: 5,
    5: 2,
  };

  return [...rsp].map((a) => arr[a]).join("");
}

//map(),switch문
function solution(rsp) {
  return [...rsp]
    .map((a) => {
      switch (+a) {
        case 2:
          return 0;
        case 0:
          return 5;
        case 5:
          return 2;
      }
    })
    .join("");
}
