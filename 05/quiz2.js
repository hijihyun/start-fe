var $select = null; // 클릭할 때마다 저장되어야 하므로 전역변수로

function printBoards() { // 어떤 동작을 하는지 명확히 하기 위해 함수화
  var $board = document.getElementById('board'); // 함수 안에서 쓰는 변수는 함수 안으로
  var boardCount = 16;
  var isWhite = false;
  var className = '';
  var boardLineCount = 4;
  var str = '';

  for (var i = 0; i < boardCount; i++) {
    className = isWhite ? 'black' : 'white';
    // if (isWhite) className = 'black'; // 리팩토링
    // else className = 'white';

    str += '<span class="' + className + '"></span>';

    isWhite = !isWhite;
    // if (isWhite) isWhite = false;
    // else isWhite = true;

    if (i % boardLineCount === boardLineCount - 1) { // 4 네모마다 반전시켜주는 부분
      isWhite = !isWhite;
    }
    // if (i % 4 === 3)
    // isWhite = !isWhite;
  }
  $board.innerHTML = str;
}

function select(event) {
  if ($select) {
    $select.className = $select.className.replace(' select', ''); // replace로 className에서 select 제거
  }
  var el = event.currentTarget; // console하면 <span class="black"></span> 등 현재 엘리먼트 찍힌다
  el.className += ' select';
  $select = el; // 여기에 저장했다가 33 line에서 원상복구 하는 방법으로 color 초기화
}

function addEvent() {
  var $boards = document.querySelectorAll('span'); // 우선 모든 <span> 네모들 가져오기
  var boardsLength = $boards.length;
  for (var i = 0; i < boardsLength; i++) {
    $boards[i].addEventListener('click', select);
  }
}

printBoards();
addEvent();