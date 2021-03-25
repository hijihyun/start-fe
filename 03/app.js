// path확인
console.log('app.js');

//간단한 코드는 F12 console탭에서 테스트 가능

// ==========객체==========
var person = { 
  nick: 'FE',
  age: 28,
  area: 'jeju',
  hobby: ['js', 'html'],
}; // 변수명 뺀 부분이 JSON. 백엔드와 프론트엔드 통신하는 모양

console.log(person.constructor); //constructor 생성자 함수
console.log(person.hasOwnProperty('nick')); // hasOwnProperty 객체가 프로퍼티를 소유(상속이 아닌)하고 있는지
console.log(person.hasOwnProperty('nick1')); // false
console.log(person.toString()); // 문자열로. 결과는 [object Object]

// 브라우저 상에서 기본으로 가지고 있는 내장 객체 : 가장 최상위 객체 window,  Date, Math, 패턴매칭 RegExp

// ==========배열==========
var arr = [1, 2, 3];

for (var i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// pop, push, join, concat, unshift, shift, splice, slice, forEach, map, reverse, sort, findIndex, every, some, filter, reduce 등의 다양한 배열 메소드들이 있다.

// ===많이하는 CRUD 작업===

// Create(생성)
var todos = ['운동'];
var todo = '게임';
todos.push(todo);
console.log(todos);

// Read(읽기)
var todos = ['운동', '게임'];
todos.forEach(function(todo) {
  console.log(todo);
});

// Update(갱신) 방법1 인덱스 이용
var todos = ['운동', '게임'];
var updateTodo = '게임';
var updateIndex = todos.findIndex(function(todo) { // 인덱스 값 알아야 바꾸므로 찾기
  return todo === updateTodo;
});
console.log(updateIndex); // 1
todos[updateIndex] = '공부';
console.log(todos);

// Update(갱신) 방법2 map 이용

// map (모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환)
var words = ['a', 'b', 'c'];
var newWords = words.map(function(word) {
  return word + ' ok';
});
console.log(newWords); // ["a ok", "b ok", "c ok"]

var todos = ['운동', '게임'];
var updateTodo = '게임';

var newTodos = todos.map(function(todo) {
  if (todo === updateTodo) {
    return '공부';
  }
  return todo;
});

console.log(newTodos);

// Delete(삭제) 방법1 인덱스로 splice
var todos = ['운동', '공부', '목욕'];
var deleteTodo = '공부';
var deleteIndex = todos.findIndex(function(todo) {
  return todo === deleteTodo;
});
todos.splice(deleteIndex, 1); // deleteIndex부터 1만큼 잘라라
console.log(todos);

// Delete(삭제) 방법2 필터 이용
var todos = ['운동', '공부'];
var deleteTodo = '공부';
var newTodos = todos.filter(function(toods) {
  return todo !== deleteTodo; // 조건에 맞는 애들만 배열의 새 요소
});
console.log(newTodos);

// ==========타입변환==========
// 동적 타이핑. 다른 타입값을 요구하는 곳에서 사용될때 필요에 따라 알아서 변환
var foo = 42;    // foo 는 Number
var foo = "bar"; // 이제 String
var foo = true;  // 이제 Boolean

// ==========원시,참조타입==========
// 데이터 타입은 값(value)이 저장되는 원시타입과 데이터에 대한 참조(reference)만 저장하는 참조타입으로 나눌 수 있다.
// 원시 타입 Number, String, Boolean, null, undefined
// 참조 타입 Object, Array, Function
var a = [1];
var b = a; // 값이 아닌 메모리의 특정 주소만 copy
b[0] = [2];
console.log(a, b); // b만 바꿨는데 a도 같이 바뀜

// 함수 또한 다룰 때 원본 데이터가 바뀔 수 있어 조심

// ==========구문==========

// if
var isMan = false;
var isHero = true;
if (isMan) {
  console.log('1');
} else if (!isMan && isHero) {
  console.log('2');
} else {
  console.log('3');
}

// for, while, 함수, try / catch / finally 등의 구문이 있다.

// ==========주요전역함수==========
// 자주 쓰는 브라우저 내장 기본 함수들
alert('안녕하세요'); // 모든 코드가 멈추고 창을 띄운다
window.alert('1'); // 윈도우에서 작성하기 때문에 현재 위치 window. 생략 가능

var who = prompt('당신은 누구세요?');
console.log(who);

var isDelete = confirm('정말 삭제하시겠습니까?');
console.log(isDelete); // true or false

var enc = encodeURIComponent('카카오'); // 문자열을 uri에 맞게 인코딩
decodeURIComponent(enc); // 디코딩

isNaN('1'); // not a number 숫자가 아닐 때만 true. '1' 자동형변환되어 false

parseInt('12'); // 문자열을 숫자값으로 바꿔 더하기 등 가능
parseInt('09', 10); // 두번째 인자는 10진수라는 뜻으로 습관화
parseFloat('10.33');

// 특정 주기마다 반복하는 setTimeout, setInterval
function test() {
  console.log('test()');
}

var id = setTimeout(test, 1000); // 1초후 단 1번실행
var id = setInterval(test, 1000); // 1초마다 계속 실행
clearInterval(688) // stop

// =========스코프==========
// 함수를 쓸 때 함수 내부 전용 변수를 쓰는 게 낫고, 외부 변수 쓰려면 인자로 옮기도록
var nick = 'aji'; //전역변수

function test() {
  var age = 30; //지역변수
  console.log(nick, age); // aji 30
}

test(); 
console.log(age); // 함수 안의 변수 function scope 가지므로 불가능

// 호이스팅: 항상 상단에서 변수 선언 사용 권장

// =========함수==========
// 메서드는 어떤 객체의 속성으로 저장된 javascript 함수를 일컬음
// 인자가 input, return이 output. return 문의 값이 있으면 그 값을 반환 아니면 undefined을 반환

function sum(a, b) {
  return a + b;
}
console.log(sum(1, 2));

// 함수도 데이터타입이기 때문에 객체 속성의 값으로 들어갈 수 있다
var car = {
  year: '2014',
  starting: function() { 
    console.log('starting..');
  },
};
car.starting();

// 익명 함수표현식
var car = function() {
  // 코드
};

//중첩함수

// 익명 즉시실행함수. 내부 변수 외부에서 사용할 수 없어 스코프 보호(캡슐화) 장점
(function() {
  // 코드
})();

// 생략 가능한 전달인자
function sum(x, y) {
  if (!y) y = 1; // y가 없으면 1로 세팅
  console.log(x + y);
}
sum(3);

// 가변 길이 전달인자 : arguments 이용해 함수 안에서 전달 인자를 가변 길이로 받을 수 있다
function sum() {
  var size = 0;
  for (var i = 0; i < arguments.length; i++) {
    size += arguments[i]; 
  }
  console.log(size);
}
sum(1, 2, 3, 4, 5, 6, 7);

function test(x, y) {}
console.log(test.length); //함수가 전달받기 기대하는 인자갯수 2

// =========표현식==========
// Literal, var name = 'FE'; 등 코드상에서 데이터를 표현하는 방식

// =========정규표현식==========
// 특정 패턴을 찾고 바꿔주는 등  대응시키기 위해 사용되는 패턴

// .test()
var text = 'abc def ghi jkl abc def'; // 대상 문자열
var testReg = /abc/; // 찾을 문자열. 항상 //로
var result = testReg.test(text);

console.log(result); // true

// .match()
var text = 'abc def ghi jkl abc def'; // 대상 문자열
var matchReg = /abc/; // 찾을 문자열
var result = text.match(matchReg);

console.log(result); // 배열로 리턴 ["abc", index: 0, input: "abc def ghi jkl abc def"]해 주므로 찾은 문자열을 바꿀 수도 있다

// .replace()
var text = 'abc def ghi jkl abc def'; // 대상 문자열
var replaceReg = /def/; // 찾을 문자열
var result = text.replace(replaceReg, '가나다');

console.log(result); // 'abc 가나다 ghi jkl abc def'

// 이메일 등 찾아내는 키워드 다양

// =========자바스크립트 특징==========
// 객체 등 다양한 타입 전달인자로 사용
function area(options) { // 전달 인자가 많을 때 가독성 향상
  console.log(options.width * options.height);
}
