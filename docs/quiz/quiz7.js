const $box = document.querySelector('.box');
let $point = document.getElementById('point');
let $life = document.getElementById('life');
let $bug = document.getElementById('bug');

function random() {
	let randomNumber = Math.random() * 380;
	$bug.style.left = randomNumber + 'px';
	$bug.style.top = randomNumber + 'px';
}

$bug.addEventListener('click', (event) => {
	$point.innerHTML++;
	$life.innerHTML++;
});

$box.addEventListener('click', (event) => {
	if ($life.innerHTML === '1') {
		alert('gameover');
		location.reload(true);
		return;
	}
	$life.innerHTML--;
});

setInterval(random, 2000);
