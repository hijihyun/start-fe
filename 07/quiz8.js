let $box = document.getElementById('box');
let $min = document.getElementById('min');
let $max = document.getElementById('max');
const $btn = document.getElementById('btn');
let randomNumber = Math.round(Math.random() * 1000);

function random(min, max) {
	while (min < randomNumber && randomNumber < max) {
		randomNumber = Math.round(Math.random() * 1000);
	}
	return randomNumber;
}

$btn.addEventListener('click', (event) => {
	$box.innerHTML = random(min, max);
});

//setInterval(random, 2000);
