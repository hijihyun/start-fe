import avg from './avg.js';
import random from './random.js';

const $avg_input = document.getElementById('avg_input');
const $avg_btn = document.getElementById('avg_btn');
const $random_input = document.getElementById('random_input');
const $random_btn = document.getElementById('random_btn');
const regex_space = / /gi;
const regex_other = /\[.*?\]/g;
let avg_str;
let random_str;

$avg_btn.addEventListener('click', () => {
	avg_str = $avg_input.value.replace(regex_space, '');
	avg_str = avg_str.split('[').join('');
	avg_str = avg_str.split(']').join('');
	avg_str = avg_str.split(',');
	console.log(avg_str);
	document.getElementById('avg').innerHTML = avg(avg_str);
});
$random_btn.addEventListener('click', () => {
	random_str = $random_input.value.replace(regex_space, '');
	random_str = random_str.split(',');
	console.log(random_str);
	document.getElementById('random').innerHTML = random(random_str);
});

//document.getElementById('avg').innerHTML = avg([1, 3, 5], 9, 5, 'a');
//document.getElementById('random').innerHTML = random(5);
