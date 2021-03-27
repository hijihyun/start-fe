console.log('app.js');

// ==========BOM==========
// 가장 최상위 객체 window의 속성과 메소드들

console.log(window.outerWidth); // 현재 윈도우 브라우저 전체 해상도 사이즈
window.name // 아직 없음
window.open('http://www.daum.net'); // 회원가입 등 팝업
window.opener // 창 띄운 오프너
window.close(); // 사용자가 직접 연 브라우저는 닫지 못하고 window.open한 것만 동작

// location url에 대한 정보. window 하위 객체
location.href='http://www.daum.net'; // 이동. 자기 자신이므로 window. 생략 가능
location.reload(); // 현재 페이지 reload

// history 브라우저 정보
history.back(); // 앞으로
history.forward(); // 뒤로
history.go(1); // 앞으로 한 번
history.go(-1); // 뒤로 한 번

// screen 화면
screen.width
screen.availWidth

// navigator 브라우저 정보
navigator // 어떤 엔진을 쓰는지 어떤 플랫폼인지 현재 위치 등

// ==========dom 탐색(CRUD의 R)==========
// DOM(Document Object Model) : 자바스크립트를 가지고 html에 접근하는 방식
// F12의 elements 탭

// .getElementById()
console.log(document.getElementById('debug')); // id로 고유값을 주고 가지고 올 수 있다. id는 하나만 class는 여러개
var debug = document.getElementById('debug'); // 변수에 넣고 메소드로 값이나 위치변경 등 가능
console.log(debug);

// .querySelector() // 스타일 준 class 가져오기 
var box = document.querySelector('.box'); // 첫 번째 box 하나
var box2 = document.querySelectorAll('.box'); // 2개 다
console.log(box);
console.log(box2);

var debug = document.querySelector('#debug'); // idsms #으로 가져올 수 있다

document.querySelectorAll('div'); // <div>전부. daum에 쳐보면 157개

// ==========dom 생성(CRUD의 C)==========
// .createElement()
var div = document.createElement('div');
div.style.border = "1px solid #000"; // rgb
div.innerHTML = "hi";

document.body.appendChild(div); // body의 맨 마지막에 <div> 추가
// body를 가져오면 자식이나 부모, 형제 노드 또한 가져올 수 있다 다양한 메소드들
// body는 querySelector로 안쳐도 바로 가져올 수 있다

// ==========dom 삽입(CRUD의 U)==========
const span = document.createElement('span');
const textNode = document.createTextNode('객체'); 
span.appendChild(textNode);
document.querySelector('#debug').appendChild(span);
// F12 elements에 <span>이 동적으로 추가됐다. 우클릭해서 직접 삭제나 드래그로 태그들 위치 변경 및 수정 가능
// 페이지 소스보기에서는 렌더링된 html만 보이므로 보이지 않는다.

// ==========dom 제거(CRUD의 D)==========
// .remove()
var debug = document.getElementById('debug');
debug.remove();

// 자식 지우기
const list = document.getElementById('list'); 
list.removeChild(list.children[0]); // 첫 번째 자식 삭제

// ==========이벤트==========
// 문서에서 Element에 변화가 생기면서 발생하는 모든 사건. click, mouseover, load 등 돔에서 관리된다
// 이벤트 동작 시마다 함수 동작

// 이벤트 등록
document.body.addEventListener('click', function(){ // 함수를 인자로 주는 콜백 함수. 
  console.log("click");
});

// Callback 함수
function clickBody() {
  console.log("click"); 
}
document.body.addEventListener('click', clickBody); // 함수명도 인자로 가능. 모듈화, 가독성 향상

document.querySelector('.box').addEventListener('click', function(){ 
    console.log("click");
}); // box 클릭 시에만

var clickCount = 0;
function popup(event){ // event객체 클릭 정보 등
    console.log(++clickCount);
    console.log(arguments, event, event.type, event.currentTarget); // argumantes 넘어오는 인자 모두 볼 수 있는
}
document.body.addEventListener('click', popup);

// 이벤트 위임 패턴
// 이벤트 각각 3번 주기
var li = document.querySelector('#li');
console.log(li.children); // 3개
for (var i = 0; i < li.children.length; i++) {
  li.children[i].addEventListener('click', function(){
    console.log(1);
  });
}
// 직접 console.log하면서 디버깅할 수 도 있고
debugger; // F12 console에서 변수 엔터 or 코드에 마우스 올려 확인할 수 있다.

// 여러개 한 번에 등록
app.addEventListener("click", function(event) {
  if(event.target.nodeName == "LI"){
    console.log(2);
  }
});

// 이벤트 전파
// 이벤트에는 캡쳐링, 버블링 단계가 있다
// 캡쳐링(디폴트): li에도 body에도 이벤트 준다면 li먼저 찍히고 body 찍힌다
// 버블링: addEventListener 마지막 인자로 true를 주면 반대 순서로 찍힌다

// 이벤트 중지
// 이벤트가 중첩되어 있을 때 li만 잡았으면 좋겠다 싶을 때 
app.addEventListener("click", function(event) {
  if(event.target.nodeName == "LI"){
    console.log(2);
    event.stopPropagation(); // 이벤트 전파 중지
  }
});

// <a> 기본 동작이 있는 element
var link = document.querySelector('#link');
link.addEventListener('click', function(){ 
  console.log(11111); // preventDefault() 없다면 이거 찍히고 바로 이동
  event.preventDefault(); // 찍히고 이동하지 않음. 기본 행동 중지
});

