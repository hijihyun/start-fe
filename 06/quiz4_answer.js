// 변수, 함수 선언 위에서 정의 권장(호이스팅)

const $box = document.getElementById('box');
let offset = { x: 0, y: 0 }; // 마우스 위치 계산

// 매번 이벤트를 만들지 않아도 이벤트는 한번만 만들고 변수를 하나 두어 박스를 누르면 true일때만 이동되게끔 하면 효율적일 것
let isDown = false;

// 브라우저 console에서 $box.offsetLeft 구해볼 수 있다

$box.addEventListener('mousedown', (event) => {
	//console.log('mousedown');
	isDown = true;
	offset.x = $box.offsetLeft - event.clientX;
	offset.y = $box.offsetTop - event.clientY;
});

$box.addEventListener('mouseup', (event) => {
	isDown = false;
	//console.log('mouseup');
});

document.body.addEventListener('mousemove', (event) => {
	//console.log('mousemove');
	if (!isDown) return;

	// offset은 하나씩 get해오고 getBoundingClientRect()는 전부
	// $box.offsetLeft = 0;

	//console.log(event.clientX, event.clientY);
	$box.style.left = event.clientX + offset.x;
	$box.style.top = event.clientY + offset.y;
});
