const offset = { x: 0, y: 0 };
let isDown = false; // down이 될 때 해당 DOM을 저장시켜 이용
let dragDom = null;

function startDragDom(el) {
	el.addEventListener('mousedown', (event) => {
		isDown = true;
		dragDom = el; // 밑에서도 쓸 수 있게끔 저장
		offset.x = el.offsetLeft - event.clientX;
		offset.y = el.offsetTop - event.clientY;
	});
}

function addEvent() {
	// body 영역이 작으므로 document에 처리
	document.addEventListener('mouseup', () => {
		isDown = false;
	});

	document.addEventListener('mousemove', (event) => {
		if (!isDown) return;

		dragDom.style.left = `${event.clientX + offset.x}px`; // getElementById는 px없어도 동작
		dragDom.style.top = `${event.clientY + offset.y}px`;
	});
}

addEvent();

startDragDom(document.querySelector('.box'));
startDragDom(document.querySelector('.box1'));
// const $box = document.querySelector('.box');
