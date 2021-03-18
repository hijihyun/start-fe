console.log('app.js');

// ==========변수==========
// 변수는 특정 값 할당할 때 사용, var 사용 권장/첫번째 문자로 숫자 불가능/변수명 대소문자 구분/어떤 값도 넣기 가능, 자동 타입을 변환/예약어는 사용불가
// 가장 참고할만한게 모질라의 JS 레퍼런스 사이트. 구글 검색시 자바스크립트 + ㅇㅇ + mdn
var name = '김지현';
var Name = '김지현';

console.log(name);
console.log(Name);

var var = 'test'; // 예약어 불가
console.log(var);

// ==========주석==========
// //는 한줄, /* 여러줄 */, 단축키 Ctrl+/

// ==========데이터타입==========
var name  = 'FE'; // 스트링 '이나 "이용
var age = 28; // 숫자형 따옴표 없이
var message = 'hello ' + name;

var isBoolean = true; // 부울
var isBoolean = "true"; // 스트링
console.log(isBoolean, true);

// 함수는 값 리턴하거나 처리. 2가지 선언 방법
function log(str) { // 로그 찍어주는 함수
  console.log(str);
}
var log = function(str) { // 함수도 데이터 타입
  console.log(str);
};
log("Hi");

// 객체도 데이터타입. 객체에 맵처럼 속성을 붙여줄 수 있다. 따로 선언할 수 있으나 묶어 사용
var image = {
    width: 100,
    height: 100,
    name: "1.png",
}; 

//배열은 대괄호 객체는 중괄호. 인덱스로도 선언 가능
var image1 = [1,2,3,'a',{}]; // 한 가지 데이터 타입이 좋다
image1[0]= 'a';
console.log(image, image1);

var data = null; // 아무런 값이 없음
var data1 = ''; // 아무런 값이 없음
var data2; // 정의되지 않음
console.log(data, data1, data2);

// ==========주요연산자==========
console.log(1 + '4'); // 자동 형변환 이뤄지며 "14"로 에러 안나나 최대한 지양
console.log(0 == '', 0 === ''); // true, false. 둘 다 false로 형변환. ===, !== 데이터타입까지 일치하는지
if(true && false) { // 논리곱 and
    console.log(1);
}
if(true || false) { // 논리곱 or
    console.log(1);
}
if(!true) { // 논리부정 !
    console.log("hero");
}

console.log('width' in image); //true. //in 객체에 해당 속성이 있는지
delete image.width; //delete var로 선언한 거 말고 객체의 프로퍼티 삭제 
console.log(typeof 1); console.log(typeof []); //어떤 타입인지
console.log(a instanceof Array); //true. 인스턴스인지