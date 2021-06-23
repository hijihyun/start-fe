const $result = document.getElementById('result');
let $num = document.getElementById('num').value;
const $btn = document.getElementById('btn');
let times = ''; // feedback: times보다는 resultHtml같이 명확한 변수명

function timesTable($num) {
    for (var i = 1; i <= 9; i++) {
        times += `${$num} x ${i} = ${$num * i} <br>`;
    }

    $result.innerHTML = times;
    times = '';
}

$btn.addEventListener('click', (event)=>{
    $num = document.getElementById('num').value;
    if(isNaN($num)) {
        $num.innerHTML = "";
        alert('숫자를 입력해주세요.');
        location(true);
        return;
    }
    $result.innerHTML = times;
    timesTable($num);
});

timesTable($num); 
