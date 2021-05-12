const $num = document.getElementById('num');
const $btn = document.getElementById('btn');
const $result = document.getElementById('result');

function print() {
	const result = [];
	const num = parseInt($num.value, 10); // input number타입이므로 문자로 넘어오니 parseInt

	if (Number.isNaN(num)) {
		// eslint-disable-next-line no-alert
		alert('숫자를 입력하세요');
		return;
	}

	for (let i = 1; i <= 9; i += 1) {
		result.push(`${num} x ${i} = ${num * i}`);
	}
	$result.innerHTML = result.join('<br>'); // ,를 <br>로 합치기
}

$btn.addEventListener('click', print);
