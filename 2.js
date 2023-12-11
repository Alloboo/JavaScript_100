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
/*
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
*/

// 56번 문제: 객체의 함수 응용
//다음의 객체가 주어졌을 때 한국의 면적과 가장 비슷한 국가와 그 차이를 출력하세요.
/*
const nationWidth = {
   'korea': 220877,
   'Rusia': 17098242,
   'China': 9596961,
   'France': 543965,
   'Japan': 377915,
   'England' : 242900,
  }

const w = nationWidth['korea'];

delete nationWidth['korea'];

const entry = Object.entries(nationWidth); // 객체를 배열로
const values = Object.values(nationWidth); // 값들을 배열로

let gap = Math.max.apply(null, values); //  배열에서 최대값 찾기
let item = [];

for (let i in entry) {
  if (gap > Math.abs(entry[i][1] - w)) {
    gap = Math.abs(entry[i][1] - w);
    item = entry[i];
  }
}

console.log(item[0], item[1] - w);
*/

// 57번: 1의 개수
/*
0부터 1000까지 1의 개수를 세는 프로그램을 만들려고 합니다. 
예를 들어 0부터 20까지 1의 개수를 세어본다면 1, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19에 각각 1이 들어가므로 12개의 1이 있게 됩니다. 
11은 1이 2번 들어간 셈이죠.
그렇다면 0부터 1000까지의 수에서 1은 몇 번이나 들어갔을까요? 출력해 주세요.
*/
/*
let s = '';

for (let i = 0; i <= 1000; i++) {
  s += i;
}

console.log(s);
console.log(s.match(/1/g).length);
*/

// 58번 문제: 콤마 찍기
/*
const n = prompt('숫자를 입력해주세요.');
parseInt(n, 10);

console.log(n.toLocaleString());

// 재귀함수 사용
function comma(s) {
  if ( s.length <= 3 ) {
    return s;
  } else {
    return s.slice(0, s.length - 3) + ',' + s.slice(s.length - 3);
  }
}

const n = prompt('숫자를 입력해주세요.');
console.log(comma(n));
*/

// 59번 문제
// 총 문자열의 길이는 50으로 제한하고 사용자가 문자열을 입력하면
// 그 문자열을 가운데 정렬을 해주고,
// 나머지 빈 부분에는 '='을 채워 넣어주세요.
/*
const str = 'MONSTA X';
const totalStringLength = 50;

const totalPaddingLength = 50 - str.length;
const rightPadding = Math.floor(totalPaddingLength / 2);
const leftPadding = Math.ceil(totalPaddingLength / 2);

const paddedString = '='.repeat(leftPadding) + str + '='.repeat(rightPadding);

console.log(paddedString);
*/

// 60번 문제: 번호 매기기
/*
const students = ['강은지','김유정','박현서','최성훈','홍유진','박지호','권윤일','김채리','한지호','김진이','김민호','강채연'];
students.sort();

for (let i = 0, j = 1; i < students.length; i++, j++ ) {
  const num = j;
  const name = students[i];

  console.log('번호: ' + num + ', 이름: ' + name);
}

for ( let i in students ) {
  console.log(`번호: ${parseInt(i, 10)+1}, 이름: ${students[i]}`)
}
*/

// 61번 문제: 문자열 압축하기
/*
const str = "aaaabbbcdddd";
const user_s = new String(str);
let result_s = "";
let store_s = user_s[0];
let count = 0;

for (let i of user_s) {
  if (i === store_s) {
    count += 1;
  } else {
    result_s += store_s + String(count);
    store_s = i;
    count = 1;
  }
}

result_s += store_s + String(count);
console.log(result_s);
*/

// 62번 문제: 20231203 출력하기
/*
1. 코드 내에 숫자가 없어야 합니다.
    - 예) console.log(20190923)이라고 하시면 안됩니다.
2. 파일 이름이나 경로를 사용해서는 안됩니다.
3. 시간, 날짜 함수를 사용해서는 안됩니다.
4. 에러 번호 출력을 이용해서는 안됩니다.
5. input을 이용해서는 안됩니다.
*/
/*
const str = "aaccdddeffhhh";
let result = "";

console.log(
  `${str.match(/a/g).length}${Number(str.match(/b/g))}${
    str.match(/c/g).length
  }${str.match(/d/g).length}${str.match(/e/g).length}${
    str.match(/f/g).length
  }${Number(str.match(/g/g))}${str.match(/h/g).length}`
);
*/

// 63번 문제
// 어떤 입력이 주어지면 앞 글자만 줄여 출력하도록 해주세요.
// 입력은 한글 혹은 영어로 입력되며, 띄어쓰기를 기준으로 하여 짧은 형태로 출력합니다.
/*
const str = "복잡한 세상 편하게 살자";
const arrStr = str.split(" ");
let result = "";

for (let i in arrStr) {
  result += arrStr[i].slice(0, 1);
}

console.log(result);
*/

// 64번 문제
// 정량 N에 정확히 맞춰야만 움직이는 화물용 엘리베이터가 있습니다.
// 화물은 7kg, 3kg 두 가지이며 팔이 아픈 은후는 가장 적게 화물을 옮기고 싶습니다.
// 가장 적게 옮길 수 있는 횟수를 출력합니다.
// 만약 어떻게 해도 정량이 N이 되지 않는다면 -1을 출력합니다.
/*
let weight = 24;
let count = 0;

while (true) {
  if ( weight % 7 === 0) {
    count += weight / 7;
    console.log(count);
    break;
  }
  weight -= 3;
  count += 1;
  if ( weight < 0 ) {
    console.log(-1);
    break;
  }
}
*/

// 65번 문제
// a = [1, 2, 3, 4]
// b = [a, b, c, d]
// 이런 리스트가 있을 때 [[1, a], [b, 2], [3, c], [d, 4]] 이런 식으로 a, b 리스트가 번갈아가면서 출력되게 해주세요.
/*
const a = [1, 2, 3, 4];
const b = ['a', 'b', 'c', 'd'];

const result = [];

for (let i = 0; i < a.length; i++) {
  result.push([a[i], b[i]]);
}

console.log(result);
*/

// 66번 문제: 블럭탑쌓기
/*
const top = ["ABCDEF", "BCAD", "ADEFQRX", "BEDFG", "EFGHZ"];
const rule = "ABD";
const result = [];

const checkRule = (rule) => {
  const sort = {};

  for (let i in rule) {
    sort[i] = i+1;
  }

  console.log(sort);
  return sort;
}
const solution = (top, rule) => {

  const rule = checkRule(rule);


}
solution(top, rule);
*/

// 67번 문제: 민수의 악수
/*
function solution(actualHandshake) {
  let person = 0;
  let totalHandshake = 0;
  let mingyuHandshake = 0;

  while(true) {
    totalHandshake = parseInt((person*(person - 1))/2);

    // actualHandshake를 초과하는 만큼이 민수의 악수 횟수가 됨
    if ( actualHandshake < totalHandshake ) {
      break;
    }

    mingyuHandshake = totalHandshake;
    person += 1;
  }

  return [parseInt(actualHandshake-mingyuHandshake, 10), person];
}
const actualHandshake = 59;
console.log(solution(actualHandshake));
*/

// 68번 문제
/*
const getArrivalTime = (t, n) => {
  const answer = [];

  let now = n.split(':').map(a => parseInt(a, 10));
  now = now[0] * 60 + now[1];
  
  for ( let i in t ) {
    let time = t[i].split(':').map(a => parseInt(a, 10));
    time = time[0] * 60 + time[1]

    if ( now > time ) {
      answer.push("지나갔습니다.");
    } else {
      let remainingTime = time - now;
      const hours = Math.floor(remainingTime / 60);
      const minutes = remainingTime % 60;
      
      const formattedHours = String(hours).padStart(2, '0');
      const formattedMinutes = String(minutes).padStart(2, '0');
      
      const formattedTime = `${formattedHours}시간 ${formattedMinutes}분`;
      answer.push(formattedTime);
    }
  }
  return answer;
}
const timetable = ["12:30", "13:20", "14:13"];
const currentTime = "12:40";
console.log(getArrivalTime(timetable, currentTime));
*/

// 69번 문제: 골드바흐의 추측
/*
function getPrime() {
  let prime = [];
  let isPrime = true;

  for (let i = 2; i < 100; i++) {
    for (let j = 2; j < i; j++) {
      if (i % j == 0) {
        isPrime = false;
      }
    }
    if (isPrime) {
      prime.push(i);
    }
    isPrime = true;
  }
  return prime;
}

function solution(n) {
  const prime = getPrime();

  const goldbachPartition = [];

  for (let p of prime) {
    if (prime.includes(n - p) && p <= (n - p)) {
      goldbachPartition.push([p, n - p]);
    }
  }

  let gap = goldbachPartition.map( e => e[1] - e[0]);
  let smallGap = goldbachPartition[gap.indexOf(Math.min.apply(null, gap))];
  let bigGap = goldbachPartition[gap.indexOf(Math.max.apply(null, gap))];

  console.log(goldbachPartition);
  console.log(smallGap);
  console.log(bigGap);

}

const n = 100;
solution(n);
*/

// 70번 문제: 행렬 곱셈
/*
function solution(a, b) {
    let c = []; // 결과 행렬을 담을 배열 초기화
    
    const len = a[0].length;
    if (len === b.length) {
       // a의 열과 b의 행이 같으면 행렬 곱셈 가능

        // 결과 행렬의 각 행 계산
        for (let i = 0; i < len; i++) {
            // 현재 행을 담을 배열 초기화
            let row = [];
            
            // 결과 행렬의 각 열 계산
            for (let j = 0; j < len; j++) {
                // 결과 행렬의 각 원소 초기화
                let x = 0;
                
                // a의 현재 행과 b의 현재 열 계산
                for (let k = 0; k < len; k++) {
                    x += a[i][k] * b[k][j];
                }

                row.push(x);
              }            
            c.push(row);
        }
        return c;
    } else {
        // 행렬 곱셈이 불가능한 경우
        return -1;
    }
}

const a = [[1, 2], [2, 4]];
const b = [[1, 0], [0, 3]];

solution(a, b);
*/

// 71번 문제: 깊이 우선 탐색
/*
const graph = {
  'A': ['E', 'C', 'B'],
  'B': ['A'],
  'C': ['A'],
  'D': ['E','F'],
  'E': ['D', 'A'],
  'F': ['D'],
};

function dfs(graph, start) {
  let visited = [];
  let stack = [start];

  while (stack.length !== 0) {
    let n = stack.pop();
    if (!visited.includes(n)) {
      visited.push(n);
      let sub = graph[n].filter(x => !visited.includes(x)).sort((a, b) => graph[n].indexOf(b) - graph[n].indexOf(a));
      for (let i of sub) {
        stack.push(i);
      }
    }
  }

  return visited;
}
console.log(dfs(graph, 'E'));
*/

// 72번 문제: 넓이 우선 탐색
/*
const graph = {
  'A': ['E', 'C', 'B'],
  'B': ['A'],
  'C': ['A'],
  'D': ['E','F'],
  'E': ['D', 'A'],
  'F': ['D'],
};

function bfs(graph, start) {
  let visited = [];
  let queue = [start];

  while (queue.length !== 0) {
    let n = queue.shift();
    if ( !visited.includes(n) ) {
      visited.push(n);
      let sub = graph[n].filter(x => !visited.includes(x));
      for ( let i of sub ) {
        queue.push(i);
      }
    }
  }
  return visited;
}
console.log(bfs(graph, 'E'));
*/

// 73번 문제: 최단 경로 찾기
/*
const graph = {
  'A': ['B', 'C'],
  'B': ['A', 'D', 'E'],
  'C': ['A', 'F'],
  'D': ['B'],
  'E': ['B', 'F'],
  'F': ['C', 'E']
};
const path = `A F`;

function minDistance(graph, path) {
  const start = path.split(' ')[0];
  const end = path.split(' ')[1];

  let queue = [start];
  let visited = [start];

  let count = -1;
  
  while (queue.length !== 0) {
    count += 1;

    let size = queue.length;
    for (let i = 0; i < size; i++) {
      let node = queue.shift();
      if (node === end) {
        return count;
      }

      for (let next_node in graph[node]) {
        if (!visited.includes(graph[node][next_node])) {
          visited.push(graph[node][next_node]);
          queue.push(graph[node][next_node]);
        }
      }
    }
  }
}
console.log(minDistance(graph, path));
*/

// 74번 문제: 최장 경로 찾기
/*
const graph = {
  1: [2, 3, 4],
  2: [1, 3, 4, 5, 6],
  3: [1, 2, 7],
  4: [1, 2, 5, 6],
  5: [2, 4, 6, 7],
  6: [2, 4, 5, 7],
  7: [3, 5, 6]
};
const path = '1 7';

function maxDistance(graph, path) {
  const start = parseInt(path.split(' ')[0]);
  const end = parseInt(path.split(' ')[1]);

  let maxLen = 0;

  function dfs(node, visited, length) {
    if (node === end) {
      maxLen = Math.max(maxLen, length);
      return;
    }

    visited.add(node);

    for (const neighbor of graph[node]) {
      if (!visited.has(neighbor)) {
        dfs(neighbor, new Set(visited), length + 1);
      }
    }
  }

  dfs(start, new Set(), 0);

  return maxLen;
}
console.log(maxDistance(graph, path));
*/

// 75번 문제
/*
function countClap(number) {
  let count = "";
  let clap = "";
  const claps = ["3", "6", "9"];

  for (let i = 1; i <= number; i++) {
    const n = String(i).padStart(2, "0");

    if (n.charAt(0) === "0" && claps.includes(n.charAt(1))) {
      count++;
      clap += n + " ";
    } else if (claps.includes(n.charAt(0)) && claps.includes(n.charAt(1))) {
      count++;
      clap += n + " ";
    }
  }
  console.log(clap);
  return count;
}
const number = "93";
console.log(countClap(number));
*/

// 76번 문제

let 사각형 = 5;
let 탐색가능지역 = 3;
let 지뢰밭 = [
  [1, 0, 0, 1, 0],
  [0, 1, 0, 0, 1],
  [0, 0, 0, 1, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0]
];

let iadd = 0;
let jadd = 0;
let value = 0;
let valueArray = [];

for ( let iadd = 0; iadd <= 사각형 - 탐색가능지역; iadd++ ) {
  for (let jadd = 0; jadd <= 사각형 - 탐색가능지역; jadd++) {
    
    for (let i = iadd; i <= 탐색가능지역 - 1 + iadd; i++) {
      for (let j = jadd; j <= 탐색가능지역 - 1 + jadd; j++) {
        //console.log(`지뢰밭 좌표 (${i}, ${j})`);
        value += 지뢰밭[i][j];
      }
    }
    valueArray.push(value);
    // console.log("---------"); // 단순 구분선
    value = 0; // value 초기화
  }
  // console.log("!!!!!!!!!"); // 단순 구분선
}

console.log(valueArray);
console.log(Math.max.apply(null, valueArray));


// 77번 문제
/*
function caseCommon(str1) {
  let result = [];
  for (let i = 1; i <= str1.length + 1; i++) {
    for (let j = 0; j < i; j++) {
      result.push(str1.slice(j, j + str1.length - i + 1));
    }
  }
  return result;
}

function solution(str1, str2) {
  const arrStr1 = caseCommon(str1);
  const arrStr2 = caseCommon(str2);

  let intersection = arrStr1.filter((x) => arrStr2.includes(x));
  intersection.sort((a, b) => {
    return b.length - a.length;
  });

  return intersection[0].length;
}
const str1 = "THISISSTRINGS";
const str2 = "THISIS";
console.log(solution(str1, str2));
*/



