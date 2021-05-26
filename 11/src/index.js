import './todos.css';

const $inputForm = document.querySelector('#input-form');
const $input = document.querySelector('#input');
const $result = document.querySelector('#result');

// console.log($inputForm);

// 데이터 모델(하나의 덩어리, 모이면 collection) 정의
const todoModel = {
	id: '', // db 등에 저장시 key
	text: '',
	isDone: false, // 체크 했는지 여부
};

// todoModel이 하나씩 추가될 배열
const todos = [
	{
		text: 'js1',
		isDone: false,
	},
	{
		text: 'js2',
		isDone: true,
	},
];

$inputForm.addEventListener('submit', (event) => {
	// console.log(event);
	event.preventDefault(); // 넘어가지 않도록 하고 submit 이벤트 확인

	const text = $input.value;
	console.log(text);
	$input.value = ''; // 적고 나서 지우기
});

// eslint-disable-next-line arrow-body-style
const html = todos.map((todo, index) => {
	return `<li>
    <button class="delete">×</button>
    <input type="checkbox" class="toggle-checked" ${
		todo.isDone ? 'checked' : ''
	}>
    <span class="text">${todo.text}</span>
  </li>`;
});

$result.innerHTML = `<ul>${html.join('')}</ul>`;
