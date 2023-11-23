// 51번 문제: 병합정렬(merge sort) 구현
/*
function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let result = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  while (left.length) {
    result.push(left.shift());
  }
  while (right.length) {
    result.push(right.shift());
  }

  return result;
}

const array = prompt("배열을 입력하세요")
  .split(" ")
  .map((n) => parseInt(n, 10));

console.log(mergeSort(array));
*/

// 52번 문제: quick 정렬
/*
function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[0];
  const left = [];
  const right = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return quickSort(left).concat(pivot, quickSort(right));
}

const array = prompt("배열을 입력하세요")
  .split(" ")
  .map((n) => parseInt(n, 10));

console.log(quickSort(array));
*/



// 53번 문제: 괄호 문자열
function isCorrect(str) {
  
  let stack = [];
  const brackets = {
    ')':'(',
    '}':'{',
    ']':'['
  };

  // 괄호 문자열의 첫 괄호가 유효한 열린 괄호인지 확인
  if (brackets[str[0]] === undefined) {
    return console.log("NO");
  }

  // 괄호가 올바른 순서대로 짝 맞춰 있는지 확인
  for (let char of str) {
    if (brackets[char] !== undefined) {
      const topElement = stack.pop();
      if (brackets[char] !== topElement) {
        return console.log("NO");
      }
    } else stack.push(char);
  }

  return console.log("YES");
}
const bracket = '({)}[]';
isCorrect(bracket);