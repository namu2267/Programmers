function solution(n, k) {
  let total = 12000 * n + 2000 * k;
  let service = Math.trunc(n / 10);
  let result = total - service * 2000;
  return result;
}
