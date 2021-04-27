/*
Ecma 이크마 스크립트 자바스크립트 표준 관리
지금까지 es5정도 자바스크립트 배웠다 es6=2015
이제 es6 이상에서 많이 사용하는 것 배울 것
*/

// =========var 아닌 let, const==========
// let 지역변수 const 상수
// 요즘 상수가 아니어도 변수를 불변값으로 사용하는 패러다임으로 const 이용 권장
let a = 'A';
const b = 'B';
area = 1; // error

// =========템플릿 표현식==========
// str += '<img src="' + todayPhoto[i].img + '"> '; // 이랬던 코드를 아래와 같이
str = `<img src="${todayPhoto[i].img}">`; // 특정 문자열 템플릿화. 가독성↑, 줄바꿈 가능

// =========기본 매개변수==========
function sum(x, y = 1) { // 2번째 인자가 없을 시 1
    return x + y;
}
console.log(sum(1)); // 2

// =========화살표 함수==========
// 함수 표현식 간략하게
// caniuse.com에서 array.map 등 사용가능여부 확인 가능
const arr = [1, 2, 3];
const newArr = arr.map(item => item + 1); // [2, 3, 4]

document
    .getElementById('box')
    .addEventListener('click', event => console.log(1));

// =========전개 구문==========
function sum(x, y, z) {
    return x + y + z;
}
const numbers = [1, 2, 3];
console.log(sum(...numbers)); // ... 해주면 배열 펼쳐준다 sum(1, 2, 3)과 동일
const newNumbers = [...numbers]; // 배열 copy

// =========Rest 파라미터==========
function func(...param) { // 위의 전개 구문이 함수의 파라미터로
    console.log(param);
}
func(1, 2, 3);

function func2() {
    console.log(arguments); // es5에서는 arguments로 받을 수 있다.
}
func2(1, 2, 3);

// =========구조 분해 할당==========
var team = obj.team; //es5
var area = obj.area;

var col1 = cols[0];
var col2 = cols[1];
// ↓
const { team, area } = obj; //es6
const [col1, col2] = cols;
const [, cols2] = cols; // index값 1인 것만

const words = ['a', 'b'];
const [c1, c2] = words;
console.log(c1, c2); // "a", "b"

function getArea({ width, height }) {
    return width * height; // 바로 사용 가능
}

// =========향상된 객체 리터럴==========
const number = 1234;
const student = {
  // number: number 와 같이 프로퍼티와 밸류 이름 같을 때
  number, // 한 번만 언급해도 된다. student = {number : 1234}
};

const student = {
    number,
    // playGame:function(){ // 함수도
    // },
    playGame() {
        console.log('play');
    },
};

// callback이 겹겹이 쌓일 때 callback지옥