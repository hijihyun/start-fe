/*
※ 위치
절대위치는 시작점으로 부터 떨어진 크기 값(컨텐츠 시작점으로부터 떨어진 거리)
상대위치는 어떤 기준으로 부터 떨어진 크기 값

※ 좌표는 3종류
clientX, clientY 현재 문서 기준 위치
offsetX, offsetY 현재 오브젝트 기준 위치 (브라우저에서 얼마나 스크롤해서 이동했는지)
screenX, screenY 현재 모니터 기준 위치
    var x1 = event.clientX;
    var y1 = event.clientY;
    var x2 = event.offsetX;
    var y2 = event.offsetY;
    var x3 = event.screenX;
    var y3 = event.screenY;
    console.log(x1,y1,x2,y2,x3,y3);

※ 특정 HTML 태그 요소의 좌표 구하기
var target = document.getElementById("top");
var targetTop = target.getBoundingClientRect().top;
const absoluteTop = window.pageYOffset + target.getBoundingClientRect().top;

※ 드래그 앤 드롭의 기본 알고리즘
1. mousedown에서는 움직임이 필요한 요소를 준비합니다. 이때 기존 요소의 복사본을 만들거나, 해당 요소에 클래스를 추가하는 등 원하는 형태로 작업할 수 있습니다.
2. 이후 mousemove에서 position:absolute의 left∙top을 변경합니다.
3. mouseup에서는 드래그 앤 드롭 완료와 관련된 모든 작업을 수행합니다.
https://ko.javascript.info/mouse-drag-and-drop
*/

const $box = document.querySelector('#box');

//========== 1. mousedown 이벤트 ==========
$box.onmousedown = function(event) {
    // (개선) 마우스 클릭값과 박스 좌표 간의 거리 계산하여 박스를 이동
    let shiftX = event.clientX - $box.getBoundingClientRect().left;
    let shiftY = event.clientY - $box.getBoundingClientRect().top;

    // set the position
    $box.style.position = 'absolute';
    document.body.append($box);

    // 박스 이동
    moveAt(event.pageX, event.pageY);

    function moveAt(pageX, pageY) {
        // (개선 전)포인터 아래로 박스를 이동시켜 드래그하는 코드
        //$box.style.left = pageX - $box.offsetWidth / 2 + 'px';
        //$box.style.top = pageY - $box.offsetHeight / 2 + 'px';
    
        // (개선) 마우스 클릭값과 박스 좌표 간의 거리 계산하여 박스를 이동
        $box.style.left = pageX - shiftX + 'px';
        $box.style.top = pageY - shiftY + 'px';
    }

    //========== 2. mousemove 이벤트 ==========
    function mousemove(event) {
        moveAt(event.pageX, event.pageY);
    }
    document.addEventListener('mousemove', mousemove);

    //========== 3. mouseup 이벤트 ==========
    $box.onmouseup = function() {
    document.removeEventListener('mousemove', mousemove);
    $box.onmouseup = null;
    };
};


