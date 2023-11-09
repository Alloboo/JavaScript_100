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
function quickSort(arr){
  if (arr.length <= 1){
    return arr;
  }

  const pivot = arr[0];
  const left = [];
  const right = [];

  for (let i=1; i<arr.length; i++){
    if(/*빈칸을 채워주세요*/){
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return /*빈칸을 채워주세요*/
}

const array = prompt('배열을 입력하세요').split(' ').map(n => parseInt(n, 10));

console.log(quickSort(array));