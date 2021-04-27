const $box = document.querySelector('#box');

/*
좌표는 3종류
clientX, clientY 현재 문서 기준 위치
offsetX, offsetY 현재 오브젝트 기준 위치
screenX, screenY 현재 모니터 기준 위치
*/

//========== mousedown 이벤트 ==========
function mousedown(event) {
    // box를 클릭하면 드래그를 시작
    var x1 = event.clientX;
    var y1 = event.clientY;
    var x2 = event.offsetX;
    var y2 = event.offsetY;
    var x3 = event.screenX;
    var y3 = event.screenY;

    console.log(x1,y1,x2,y2,x3,y3);
}

$box.addEventListener('mousedown', mousedown);
document.body.addEventListener('mousedown', mousedown);

//========== mousemove 이벤트 ==========
function mousemove(event) {
    // 움직이는동안 div를 계속 새로 그려준다
}

$box.addEventListener('mousemove', mousemove);

//========== mouseup 이벤트 ==========
function mouseup(event) {
    // 마지막 좌표에 내려놓는다
}

$box.addEventListener('mouseup', mouseup);

