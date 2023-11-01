/* 자바스크립트 100제 1 */

/*
// 1번 문제
var nums = [100, 200, 300, 400, 500];

// 풀이1
console.log(nums.slice(0, 3));
// 새 배열에 선택한 요소(추출한 요소)를 복사하는 작업을 수행한다.
// 추가 시간과 메모리 필요

// 풀이2
nums.pop();
nums.pop();
console.log(nums);
// 기존 배열에서 수정(제거)만 일어난다.

// 2번 문제
// 데이터
var arr = [200, 100, 300];
//배열 내장함수 사용하여 코드 채우기
console.log(arr);
// 출력 [200, 100, 10000, 300];

// 내 풀이
arr.pop();
arr.push(10000);
arr.push(300);
console.log(arr);

// 정답
arr.splice(2, 0, 10000);
// splice(start, deleteCount, item) 순서대로 변경을 시작할 인덱스, 삭제할 요소의 수, 추가할 요소
// 배열의 요소를 삭제하거나 새 요소를 추가하여 배열의 내용을 변경함
console.log(arr);

// 3번 문제
// 다음의 출력 값으로 옳은 것은?
var arr = [100, 200, 300];
console.log(typeof arr);
// 출력: object

// 4번 문제
// 다음 변수 a를 `typeof(a)`로 넣었을 때 출력될 값과의 연결이 알맞지 않은 것은?

// 1)  입력 : a =1,   출력 : number
// 2)  입력 : a = 2.22,   출력 : boolean
// 3)  입력 : a = 'p',   출력 : string
// 4)  입력 : a = [1, 2, 3],   출력 : object

// 정답: 2, boolean -> number

// 5번 문제
var a = 10;
var b = 2;

for (var i = 1; i < 5; i += 2) {
  a += i;
}

console.log(a + b);
//정답: 16


// 6번 문제
// 다음은 자바스크립트 문법 중에서 False로 취급하는 것들 입니다.
// 앗, False로 취급하지 않는 것이 하나 있네요! True를 찾아주세요.

// 1)  NaN
// 2)  1
// 3)  ""
// 4)  0
// 5)  undefined

// 정답: 2번, null, undefined, 0, 빈 문자열, NaN, false를 제외하고는 모두 참인 값으로 평가함


// 7번 문제
//다음 중 변수명으로 사용할 수 없는 것 2개를 고르시오.

// 1)  age
// 2)  Age
// 3)  let
// 4)  _age
// 5)  1age

// 정답: 3, 5번
// 이미 존재하는 예약어인 let은 변수명으로 사용될 수 없음. 숫자는 변수명의 첫 글자가 될 수 없으며 식별자는 문자, 밑줄 혹은 $로 시작해야 함.

*/

// 8번 문제
// var d = {
//   height: 180,
//   weight: 78,
//   weight: 84,
//   temperature: 36,
//   eyesight: 1,
// };

// console.log(d["weight"]);
// 출력값: 84, 객체의 키 값이 중복될 경우 마지막 키의 값을 가져옴.
// [](각괄호)로 객체 키에 접근할 때는 따옴표를 붙여주어야 함

// 9번 문제: concat을 활용한 출력 방법
// var year = "2019";
// var month = "04";
// var day = "26";
// var hour = "11";
// var minute = "34";
// var second = "27";

// var result = year.concat(
//   "/",
//   month,
//   "/",
//   day,
//   " ",
//   hour,
//   ":",
//   minute,
//   ":",
//   second
// );

// console.log(result);

//출력: 2019/04/26 11:34:27

// 10번 문제: 별 찍기
// 입력: 5

/*
출력
    *
   ***
  *****
 *******
*********
*/

/* 풀이
function getTree(n) {
  let tree = "";

  for (let i = 1; i <= n; i++) {
    tree += " ".repeat(n - i) + "*".repeat(i + (i - 1)) + "\n";
  }

  return tree;
}

console.log(getTree(5));
*/

// 11번 문제: 1부터 100까지 모두 더하는 Code를 <pass> 부분에 완성하세요. for를 사용해야 합니다.

/*
let s = 0;

//pass
for (let i = 1; i <= 100; i++) {
  s += i;
}

console.log(s);
*/

// 12번 문제
/*
다음 소스코드에서 클래스를 작성하여 게임 캐릭터의 능력치와 '파이어볼'이 출력되게 만드시오.
주어진 소스 코드를 수정해선 안됩니다.
*/

//데이터
//<여기에 class를 작성하세요.>

/*
class Wizard {
  constructor(health, mana, armor) {
    this.health = health;
    this.mana = mana;
    this.armor = armor;
  }

  attack() {
    console.log("파이어볼");
  }
}

const x = new Wizard(545, 210, 10);
console.log(x.health, x.mana, x.armor);
x.attack();
*/

//출력
//545 210 10
//파이어볼

// 13번 문제:
// 우리 태양계를 이루고 있는 행성은 수성, 금성, 지구, 화성, 목성, 토성, 천왕성, 해왕성으로 총 8개 입니다. 저희는 우리 태양계의 n번째 행성이 무엇인지 알고 싶습니다.
// 입력으로 행성의 순서를 나타내는 숫자 n이 입력됩니다.
// 출력으로 그 순서에 해당하는 행성의 이름을 출력해 주세요.

/* 풀이
let solarSystem = ["수성", "금성", "지구", "화성", "목성", "천왕성", "해왕성"];

function getOrderPlanet(n) {
  console.log(solarSystem[n]);
}

getOrderPlanet(1);
*/

// 14번 문제: 3의 배수 369게임
// 만약 그 수가 3의 배수라면 '짝'이라는 글자를, 3의 배수가 아니라면 n을 그대로 출력해 주세요.

//const n = prompt('숫자를 입력하세요');

/* 풀이
let game = (n) => {
  if (n % 3 === 0) {
    console.log("짝");
  } else console.log(n);
};

game(6);
*/

// 15번 문제: 자기소개
// 만약 입력으로 김다정이라는 이름이 주어지면 "안녕하세요. 저는 김다정입니다."라고 출력하게 해주세요.

/* 풀이
const name = "김다정";

console.log(`안녕하세요. 저는 ${name}입니다.`);
*/

// 16번 문제: 문장을 입력하면 거꾸로 출력하기

/* 풀이
const reverse = (str) => {
  const sentence = str.split("");
  const length = sentence.length;
  let reverseStr = [];

  for (let i = length - 1; i >= 0; i--) {
    reverseStr.push(str[i]);
  }

  console.log(reverseStr.join(""));
};

reverse("로꾸거");
*/

/* 정답 코드
const reverseString = n.split('').reverse().join('');
*/

// 17번 문제
// 키가 주어지면 키가 150이 넘으면 YES를 틀리면 NO를 출력하는 프로그램을 작성하세요.

/* 풀이
function checkHeight(h) {
  if (h > 150) {
    console.log("YES");
  } else console.log("NO");
}

checkHeight(140);
*/

// 18번 문제
// 공백으로 구분하여 세 과목의 점수가 주어지면 전체 평균 점수를 구하는 프로그램을 작성하세요. 단, 소숫점 자리는 모두 버립니다.
// 입력 : 20 30 40
// 출력 : 30

/*
function average(score) {
  const scoreArr = score.split(" ");
  let sum = 0;

  for (let i = 0; i < scoreArr.length; i++) {
    add += Number(scoreArr[i]);
  }

  const result = Math.floor(sum / 3);
  console.log(result);
}

average("20 30 40");
*/

// 19번 문제
// 공백으로 구분하여 두 숫자 a와 b가 주어지면, a의 b승을 구하는 프로그램을 작성하세요.

/*
function pow(str) {
  const arr = str.split(" ");
  const result = arr[0] ** arr[1];
  console.log(result);
}

pow("2 3");
*/

// 20번 문제
// 공백으로 구분하여 두 숫자가 주어집니다.
// 두번째 숫자로 첫번째 숫자를 나누었을 때 그 몫과 나머지를 공백으로 구분하여 출력하세요.

/*
function paintNumber(str) {
  const arr = str.split(" ");
  const quota = arr[0] / arr[1];
  const remainder = arr[0] % arr[1];
  const answer = `${quota} ${remainder}`;

  console.log(answer);
}

paintNumber("10 2");
*/

// 21번 문제
/*
다음 중 set을 만드는 방법으로 올바른 것을 모두 고르시오.

1)  var x = {1, 2, 3, 5, 6, 7};
2)  var x = {};
3)  var x = new Set('javascript');
4)  var x = new Set(range(5));
5)  var x = new Set();
*/

// 정답: 3, 5
// 3) 새 집합을 만들고 문자열 'javascript'의 문자로 초기화 함. >> { 'j', 'a', 'v' 'a', 's', 'c', 'r', 'i', 'p', 't'} 와 같은 고유한 문자로 집합을 생성
// 5) 초기 요소가 없는 새로운 빈 세트를 생성(인스턴스)

// 22번 문제
/*
다음 중 변수 i가 6의 배수인지 확인하는 방법으로 올바른 것은?

1)  i / 6 == 0
2)  i % 6 == 0
3)  i & 6 == 0
4)  i | 6 == 0
5)  i // 6 == 0
*/

// 정답: 2번

// 23번 문제: `console.log(10/3)`의 출력 결과는 **3**이다. (O/X)
// 정답: X, 3.3333333333333335

// 24번 문제
// 입력 : mary
// 출력 : MARY
/*
function intoUpperCase(str) {
  const changedStr = str.toUpperCase(str);
  console.log(changedStr);
}

intoUpperCase("mary");
*/

// 25번 문제: 입력으로 반지름의 길이 정수 n이 주어지면 원의 넓이를 반환하는 함수를 만들어 주세요.
/*
function areaOfCircle(n) {
  const area = n * n * Math.PI;
  console.log(area);
}

areaOfCircle(10);
*/

// 26번 문제: 행성의 한글 이름을 입력하면 영어 이름을 반환하는 프로그램을 만들어 주세요.
/*
  const planets = {
    수성: "Mercury",
    금성: "Venus",
    지구: "Earth",
    화성: "Mars",
    목성: "Jupiter",
    토성: "Saturn",
    천왕성: "Uranus",
    해왕성: "Neptune",
  };

  console.log(planets[name]);
*/

// 27번 문제
/*
입력
Yujin Hyewon
70 100

출력
{'Yujin': 70, 'Hyewon': 100}
*/

/*
const keys = "Shownu Hyungwon".split(" ");
const values = "70 100".split(" ");
const obj = {};

for (let i = 0; i < keys.length; i++) {
  obj[keys[i]] = parseInt(values[i]);
}

console.log(obj);
*/

// 28번 문제: 문자열이 주어지면 2-gram으로 출력하는 프로그램을 작성해 주세요.
/*
function twoGram(str) {
  for (let i = 0; i < str.length - 1; i++) {
    // <1>
    //console.log(str.slice(i, i + 2));
    
    // <2>
    //console.log(str[i], str[i + 1]);
  }
}
twoGram("javascript");
*/

// 29번 문제: 주어진 알파벳이 대문자이면 YES를 아니면 NO를 출력하는 프로그램을 만들어 주세요.
/*
const isUpper = (strValue) => {
  if (strValue.charCodeAt(0) >= 65 && strValue.charCodeAt(0) <= 90) {
    console.log("YES");
  } else console.log("NO");

  /* 가능한 조건식
  1. 대문자로 변환하여 기존의 문자열과의 일치 여부 따지기
  strValue.toUpperCase() === strValue
  2. match() 메서드와 정규식 사용하기: match() 메서드는 정규 표현식과 일치하는 문자열이 존재하면 배열을 반환하고 그렇지 않으면 null을 반환한다.
  strValue.match(new RegExp(/^[A-Z]/)) !== null
  3. 아스키코드 범위 활용하기
  문자열을 UTF-16 방식으로 인코딩하여 아스키코드 범위에 속하는지 확인한다.
  charCodeAt(index): 주어진 인덱스의 문자열을 UTF-16 코드를 나타내는 0~65535 사이의 정수로 변환한다.
  영어 대문자의 범위: A(65)부터 Z(90) / 소문자의 범위: a(97)부터 z(122)
  strValue.charCodeAt(0) >= 65 && strValue.charCodeAt(0) <= 90
};
isUpper("k");
*/

// 30번 문제
// 첫번째 입력에서는 문자열이 입력되고, 두번째에는 찾을 문자가 입력되어야 합니다.
// 그 문자가 시작하는 index를 반환하는 프로그램을 만들어 주세요
/*
const findIndexOfWord = (strValue, word) => {
  for (let i = 0; i < strValue.length; i++) {
    if (strValue.slice(i, word.length + i) === word) {
      console.log("index:", i);
    }
  }
};
findIndexOfWord("pineapple is yummy", "apple");
*/
// 나는 위와 같이 풀었으나 한 번에 해결할 수 있는 메서드가 있었다... 그것은 바로 indexOf()...
// 호출한 스트링 객체 또는 배열에서 주어진 값과 일치하는 값 혹은 요소의 첫 번째 인덱스를 반환하고 존재하지 않으면 -1을 반환한다.
// strValue.indexOf(word);

// 31번 문제
/*
다음 배열 내장함수의 시간 복잡도가 O(1)이 아닌 것을 모두 고르시오.

1)  arr[i]
-> 배열의 특정 인덱스에 저장된 값을 반환. 배열 내에서 해당 인덱스로 바로 접근하기 때문에 빠르게 접근 가능
2)  arr.push(5)
-> 배열의 끝에 새로운 요소를 추가. 배열의 크기가 커질 때마다 기존 요소들을 복사하여 새로운 공간에 저장해야 하므로 평균적으로 O(1) 시간 복잡도를 갖지만,
-> 배열의 크기에 따라 최악의 경우에는 O(n)의 시간 복잡도를 가질 수 있음. (n=배열의 길이)
3)  arr.slice() *
-> 배열의 일부분을 복사하여 새로운 배열을 생성. 복사해야 할 요소의 개수에 비례해서 시간이 걸리므로 O(k) 시간 복잡도를 가짐(k=복사할 요소의 개수)
4)  arr.pop()
-> 배열의 마지막 요소를 제거하고 반환. 배열의 크기에 따라 제거할 요소를 찾기 위해 인덱스를 찾는 과정이 필요하므로 O(1) 시간 복잡도를 갖지만,
-> 최악의 경우에는 O(n)의 시간 복잡도를 가질 수 있음
5)  arr.includes(5) *
-> 배열에 특정 요소가 있는지 여부 확인. 배열 전체를 순회하여 찾는 과정이 필요하므로 O(5) 시간 복잡도를 가짐.

시간복잡도란 알고리즘을 처리하는 데 얼마나 걸리는지를 설명하는 것으로 Big-O 표기법을 사용.
Big-O란, 알고리즘의 성능을 수학적으로 표현해주는 표기법
빅오 표기법은 알고리즘을 처리하는 실제 시간을 표시하는 것이 아님. 빅오 표기법은 데이터나 사용자의 증가율에 따른 알고리즘의 성능을 예측하기 위해 사용
O(1): Constant Time, 입력 데이터의 크기에 상관없이 일정한 시간이 걸리는 알고리즘
O(n): Linear Time, 입력 데이터의 크기에 따라 처리시간이 늘어나는 알고리즘
O(n^2): Quadratic Time, 입력 데이터 크기의 제곱 만큼 처리시간이 늘어나는 알고리즘
O(2^n): 피보나치 수열을 표현할 때
O(log n): 이진 탐색 등의 알고리즘을 표현할 때
Drop Constants
*/

// 32번 문제: 문자열을 입력받으면 단어의 갯수를 출력하는 프로그램을 작성해 주세요
/*
const countWords = (strValue) => {
  console.log(strValue.split(" ").length);
};
countWords("안녕하세요. 몬스타엑스의 유기현입니다.");
*/

// 33번 문제: 주어진 숫자를 역순으로 출력하는 프로그램을 작성하시오.
/*
const printReverse = (strValue) => {
  const arr = strValue.split("");
  let reverse = "";

  for (let i = strValue.length - 1; i >= 0; i--) {
    reverse += arr[i];
  }
  console.log(reverse);
};
printReverse("12345");
*/

// 34번 문제: 공백으로 구분되어 주어지는 숫자가 순서대로 정렬되어있는지 확인하는 프로그램을 작성해보자.
// 이슈: 계속해서 풀던 중, 분명 제대로 정렬된 것이 아닌데 정렬된 것으로 결과 값이 나왔음
// 원인: sort() 메서드는 정렬 후 새로운 배열을 반환하는 것이 아닌 기존의 배열을 변경하는 메서드이기 때문이었음
// 해결방법: 스프레드 구문을 사용하여 얕은 복사를 한다!

/*
const sortNumber = (strValue) => {
  const numbers = strValue.split(" ").map((str) => Number(str));
  const sorted = [...numbers].sort((a, b) => a - b);

  let result = numbers.length;

  for (let i = 0; i < numbers.length; i++) {
    if (sorted[i] === numbers[i]) {
      result -= 1;
    } else result += 1;
  }

  if (result == 0) {
    console.log("YES");
  } else console.log("NO");

  /* 근데! 좀 더 효율적인 코드는 해설에 주어진 코드였음.
  왜냐면 입력 문자열을 직접 sort() 메서드를 사용해서 정렬하고, 정렬된 문자열을 원본 문자열과 비교하기 때문에
  메모리를 더 효율적으로 사용하여 더 적은 연산 비용이 든다.
  
  let sorted = "";

  sorted = strValue
  .split(" ")
  .sort(function(a, b) {
    return a - b;
  })
  .join(" ");

  if (strValue === sorted) {
  console.log("Yes");
  } else {
  console.log("No");
  }
  
};
sortNumber("12 23 45 56 667");
*/

// 35번 문제
// 2제곱, 3제곱, 4제곱을 할 수 있는 Factory 함수를 만들려고 합니다.
// <pass>에 코드를 작성하여 two함수를 완성하세요.

/*
function one(n) {
  function two(value) {
    const sq = Math.pow(value, n);
    return sq;
  }
  return two;
}

const a = one(2);
const b = one(3);
const c = one(4);

console.log(a(10));
console.log(b(10));
console.log(c(10));
*/

// 36번 문제: 구구단 출력하기
/*
function gugudan(num) {
  let result = "";
  for (let i = 1; i <= 9; i++) {
    result += num * i + " ";
  }
  console.log(result.trim());
}
gugudan(2);
*/

// 37번 문제: 학생들이 뽑은 후보들을 입력받으면 뽑힌 학생의 이름과 받은 표 수를 출력하는 프로그램
/*
const vote = "기현 기현 기현 민혁 민혁 현우 현우 현우 현우 주헌 주헌 주헌";

function voteResult(str) {
  const arr = str.split(" ");
  let result = {};
  let winner = "";

  for (let i in arr) {
    let val = arr[i];

    result[val] =
      result[val] === undefined ? 1 : (result[val] = result[val] + 1);
    // 배열의 요소가 result에 undefined로 초기화되어 있으면 1, 이미 값이 있으면 +1
  }

  winner = Object.keys(result).reduce((a, b) => {
    // Object.keys(result): result 객체의 키를 포함하는 배열을 반환
    return result[a] > result[b] ? a : b;
    // 배열에서 두 개를 비교해서 큰 값을 리턴
  });

  console.log(`${winner}가 총 ${result[winner]}표로 반장이 되었습니다.`);
}
voteResult(vote);
*/

// 38번 문제: 호준이의 아르바이트
/*
const giveReward = (input) => {
  const calculrateTargets = (scores, arrScore) =>{
    let targets = 0;
    
    for ( let a of arrScore ) {
      if ( scores[2] <= a && a <= scores[0] ) {
        targets += 1;
      }
    }
    
    return targets;
  }
  const arrScore = input.split(' ').map((a) => parseInt(a, 10));
  const uniqueScores = [...new Set(arrScore)]; // Set: 중복된 값을 허용하지 않는 컬렉션 객체
  const sortedScores = uniqueScores.sort((a, b) => b - a);
  const targets = calculrateTargets(sortedScores, arrScore);
  
  console.log(targets);
  return targets;
}

input = '97 86 75 66 55 97 85 97 97 95';
giveReward(input);
*/

// 39번 문제: 오타 수정하기(글자바꾸기)
/*
const replaceWord = (input) => {
  // replaceAll(searchStr, replaceStr)
  console.log(input.replaceAll('q', 'e'));
  return input.replaceAll('q', 'e');
}
input = 'hqllo my namq is hyqson'
replaceWord(input);
*/
/*
const word = 'hqllo my namq is hyqson';
//1. 함수 사용
function replaceAll(str, searchStr, replaceStr) {
   return str.split(searchStr).join(replaceStr);
}
console.log(replaceAll(word,"q","e"));

//2. 정규식 사용
console.log(word.replace(/q/gi, 'e'));
*/

// 40번 문제
/*
let total = 0;
let count = 0;
const limit = 50;
const n = 2;

for (let i=1; i<=n; i++){
  total += parseInt(prompt('무게를 입력해주세요.'), 10);
  if (total <= limit){
		count = i;
  }
}

console.log(count);
*/

// 41번 문제: 소수판별
/*
const value = 2

const isPrime = (value) => {
  const num = Number(value);

  if (num <= 1) {
    console.log('NO');
    return false;
  }
  if (num === 2) {
    console.log('YES');
    return true;
  }

  // 효율적인 소수 판별을 위해 주어진 수의 제곱근까지의 모든 수로 나누기
  // 소수가 아니라면 어떤 인수는 반드시 주어진 수의 제곱근보다 작거나 같음
  // 제곱근보다 큰 숫자로 나누어도 이미 작은 수로 나누었을 때의 결과가 반복됨
  // 시간복잡도를 줄일 수 있음
  for ( let i=2; i<=Math.sqrt(num); i++) {
    if (num % i === 0) {
      console.log('NO');      
      return false;
    }    
  }

  console.log('YES');
  return true;
}
isPrime(value);
*/

// 42번 문제: 2020년 1월 1일은 수요일입니다. 2020년 a월 b일은 무슨 요일일까요?
/*
const month = 5;
const date = 24;

const getDayOfWeek = (month, date) => {
  const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

  if ( month === 0 || month > 13 || date === 0 || date > 31 ) {
    console.log('날짜를 올바르게 입력해주세요.')
    return false;
  }

  // Date 객체에서 월은 0부터 시작하므로 a-1
  // getDay: 요일을 0~6까지의 정수로 반환
  const dayOfWeek = new Date(2020, month - 1, date).getDay();

  console.log(days[dayOfWeek]);
  return days[dayOfWeek];
}
getDayOfWeek(month, date);
*/

// 43번 문제
/*
우리가 흔히 사용하는 숫자 1, 8, 19, 28893 등등...은 10진수 체계입니다.
이를 컴퓨터가 알아 들을 수 있는 2진수로 바꾸려고 합니다. 어떻게 해야할까요?
*/
// 10진수 -> 다른 진수: toString()
// 다른 진수 -> 10진수: parseInt()
// 2진수 -> 8진수: 2진수 -> 10진수 -> 8진수
/*
const num = Number(prompt("숫자를 입력해주세요."));
console.log(num.toString(2));
*/

// 44번 문제
//사용자가 입력한 양의 정수의 각 자리수의 합을 구하는 프로그램을 만들어주세요

//const num = prompt("숫자를 입력해주세요."));
/* 1번 풀이
function sum(n) {
  let result = 0;

  for (let i = 0; i < n.length; i++) {
    result += Number(n[i]);
  }
  console.log(result);
}
sum("1234");
*/
/*2번 풀이(가 더 빠름)
let num = 1234;
let sum = 0;

while (num !== 0) {
  sum += num % 10;
  num = Math.floor(num / 10);
}

console.log(sum);
*/

// 45번 문제
// Date객체의 메소드 중 하나인 getTime()은 1970년 1월 1일 0시 0분 0초 이후로부터 지금까지 흐른 시간을 천분의 1초 단위(ms)로 반환합니다.
// 이를 이용하여 현재 연도를 출력해보세요.
const d = new Date();
let year = d.getTime();
year = Math.floor(year / (3600 * 24 * 365 * 1000)) + 1970; //밀리초를 연도단위로 변환하기: 3600초, 24일, 365일, 1000밀리초
console.log(year);
