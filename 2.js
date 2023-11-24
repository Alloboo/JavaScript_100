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
/*
function isCorrect(str) {
  
  let stack = [];
  const brackets = {
    ')': '(',
    '}': '{',
    ']': '['
  };

  // 괄호 문자열의 첫 괄호가 유효한 열린 괄호인지 확인
  if (brackets[str[0]] !== undefined) {
    return false;
  }

  // 괄호가 올바른 순서대로 짝 맞춰 있는지 확인
  for (let char of str) {
    if (brackets[char] !== undefined) {
      const topElement = stack.pop();
      if (brackets[char] !== topElement) {
        return false;
      }
    } else stack.push(char);
  }

  return stack.length === 0;
}

function solution(bracket) {
  if (isCorrect(bracket) === true) {
    console.log("YES");
    return true;
  } else {
    console.log("NO");
    return false;
  } 
}

solution('(){}[]');
solution('({}[])');
solution('(({})))');
solution('}{()[]');
solution('({)}[]'); 
*/



// 54번 문제: 연속되는 수 판별
/*
const checkConsecutive = (str) => {

  const nums = str.split(' ').sort((a, b) => { return a-b });
  console.log(nums);

  for (let i = 0; i < nums.length - 1; i++) {
    if ((parseInt(nums[i+1]) - parseInt(nums[i])) !== 1) {
      console.log(nums[i+1], nums[i])
      return false;
    }
  }

  return true;

}

const solution = (str) => {

  if (checkConsecutive(str) === true) {
    console.log("YES");
    return true;
  } else {
    console.log("NO");
    return false;
    }

}

solution('1 2 3 4 5'); // expected 'YES'
solution('1 4 2 6 3'); // expected 'NO'
*/



// 55번 문제: 하노이의 탑
const route = [];

const hanoi = (n, start, end, temp) => {

  if (n === 1) {
    route.push([start, end]);
    return;
  } else {
    hanoi(n-1, start, temp, end);
    route.push([start, end]);
    hanoi(n-1, temp, start, end);
  }

}

hanoi(3, 'A', 'B', 'C');
console.log(route);
console.log(route.length);