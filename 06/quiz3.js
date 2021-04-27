/*
문제1
.add-red 클릭하면 .box class속성에 .red를 추가
<!-- 결과 -->
<div class="box red"></div>
문제2
.add-btn 클릭하면 .box 엘리먼트를 body 에 하나씩 추가
<!-- 결과 -->
<div class="box red"></div>
<div class="box red"></div>
문제3
.delete-btn 클릭하면 모든 .box 엘리먼트를 하나씩 삭제
문제4
.text-btn 클릭하면 .txt에 value값을 가져와서 .box에 가져온 value값 텍스트 추가
.box 엘리먼트가 여러개 있을경우 동일하게 추가
<!-- 결과 -->
<div class="box">hello</div>
문제5
.reset-btn 클릭하면 모든 .box 엘리먼트 제거
문제6
.toggle-btn 클릭하면 .box 엘리먼트 숨기고 다시 클릭하면 보이게 토글버튼 처리면
문제7
.image-btn 클릭하면 .box 엘리먼트에 이미지 출력
이미지 주소: https://i.imgur.com/69NjYBH.png
.box 엘리먼트가 없을경우 생성후 처리
문제8
위에서 작성한 코드들을 최대한 함수화, 재사용성 높임
*/

//========== 문제 1 ==========
const $add_red = document.querySelector('.add-red');

function add_red(event) {
    const $box = document.querySelector('.box');
    $box.classList.value += ' red';
}

$add_red.addEventListener('click', add_red);

//========== 문제 2 ==========
const $add_btn = document.querySelector('.add-btn');

function add_btn(event) {
    const div = document.createElement('div');
    div.className = "box red";
    document.body.appendChild(div);
}

$add_btn.addEventListener('click', add_btn);

//========== 문제 3 ==========
const $delete_btn = document.querySelector('.delete-btn');

function delete_btn(event) {
    const $del = document.querySelectorAll('.box'); 
    $del[0].remove();
}

$delete_btn.addEventListener('click', delete_btn);

//========== 문제 4 ==========
const $text_btn = document.querySelector('.text-btn');
const $txt = document.querySelector('.txt');

function text_btn(event) {
    const $boxs = document.querySelectorAll('.box');
    const boxsLength = $boxs.length;
    for (let i = 0; i < boxsLength; i++) {
        $boxs[i].append($txt.value);
    }
}

$text_btn.addEventListener('click', text_btn);

//========== 문제 5 ==========
const $reset_btn = document.querySelector('.reset-btn');

function reset_btn(event) {
    const $boxs = document.querySelectorAll('.box');
    const boxsLength = $boxs.length;
    for (let i = 0; i < boxsLength; i++) {
        $boxs[i].remove();
    }
}

$reset_btn.addEventListener('click', reset_btn);

//========== 문제 6 ==========
const $toggle_btn = document.querySelector('.toggle-btn');

function toggle_btn(event) {
    const $boxs = document.querySelectorAll('.box');
    const boxsLength = $boxs.length;

    for (let i = 0; i < boxsLength; i++) {
        if($boxs[i].style.display === 'none')  {
            $boxs[i].style.display = 'block';
        }else {
            $boxs[i].style.display = 'none';
        }
    }
}

$toggle_btn.addEventListener('click', toggle_btn);

//========== 문제 7 ==========
const $image_btn = document.querySelector('.image-btn');

function image_btn(event) {
    const $boxs = document.querySelectorAll('.box');
    const boxsLength = $boxs.length;

    if (boxsLength === 0) { // box div가 없을 경우
        // div 생성 후
        const div = document.createElement('div');
        div.className = "box";
        document.body.appendChild(div);
        // 이미지 추가
        const $box = document.querySelector('.box');
        const img = document.createElement('img');
        img.src = "test.png";
        $box.appendChild(img);
    } else { // box div가 있을 경우
        for (let i = 0; i < boxsLength; i++) {
            const img = document.createElement('img');
            img.src = "test.png";
            $boxs[i].appendChild(img);
        }
    }
}

$image_btn.addEventListener('click', image_btn);

//========== 문제  ==========
// 위에서 작성한 코드들을 최대한 함수화, 재사용성 높임