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

*/
