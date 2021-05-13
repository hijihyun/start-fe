const $box = document.getElementById('box');
let $btn = document.getElementById('btn');
let $min = document.getElementById('min').value;
let $max = document.getElementById('max').value;
let resultNum;
let startNum;
let timeId = 0;

function random(min, max) {
	return Math.round(Math.random() * (max - min) + min);
}

function result() {
	$min = document.getElementById('min').value;
	$max = document.getElementById('max').value;
	resultNum = random($min, $max);
	startNum = resultNum - 20;

	timeId = setInterval(effect, 30);
	$box.innerHTML = resultNum;
}

function effect() {
	if (startNum - 1 === resultNum) {
		$btn.disabled = '';
		clearInterval(timeId);
		return;
	}
	$btn.disabled = 'disabled';
	$box.innerHTML = startNum++;
}

$btn.addEventListener('click', result);
