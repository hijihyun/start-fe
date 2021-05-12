const $point = document.querySelector('#point'); // 다 querySelector로 하는게 안 헷갈리는데 도움
const $life = document.querySelector('#life');
const $bug = document.querySelector('#bug'); // relative 위치라서 0px주면 부모에 div에 붙는다
const $box = document.querySelector('.box'); // F12에서 Store as global variable눌러 temp1.offsetwidth 확인 가능
const bugSpeed = 3000; // 변수화. 점수 높아질때마다 speed up 할수도

let point = 0;
let life = 10;
let timerId = 0; // clear하기 위한 변수

function showBug() {
	$bug.style.display = 'block';
}
function hideBug() {
	$bug.style.display = 'none';
}
function getRandom(max) {
	return Math.floor(Math.random() * max); // 내림
}

function move() {
	// F12 콘솔에서 move() 엔터로 테스트
	showBug();
	const x = getRandom($box.offsetWidth - $bug.offsetWidth); // box 벗어나지 않게 bug의 width 빼준다
	const y = getRandom($box.offsetHeight - $bug.offsetHeight);

	$bug.style.left = `${x}px`;
	$bug.style.top = `${y}px`;
}

function start() {
	clearInterval(timerId); // 2개 타이머가 되지 않도록 제거
	timerId = setInterval(move, bugSpeed);
}

function hit(event) {
	point += 1;
	$point.innerHTML = point;
	hideBug(); // 죽은 버그 숨겨야
	start(); // 잡고 1초 후 다시 버그 출현
	event.stopPropagation(); // 이벤트 전파 중지
}

const minusLife = () => {
	life -= 1;
	$life.innerHTML = life;
	setTimeout(() => {
		// 생명이 1아닌 0 된 뒤 alert 뜨도록 setTimeout()에 해당 부분 넣어주기
		if (life === 0) {
			// eslint-disable-next-line no-alert
			alert('gameover!');
			clearInterval(timerId);
		}
	}, 0);
};

start();
$box.addEventListener('click', minusLife);
$bug.addEventListener('click', hit); // => 우클릭>리팩터링>global const로 추출
