import { render } from './html-render';
import formInput from './form-input'; // object 형태로 불러와보기(함수가 아닌 영역으로 나눈 것)
import { loadData } from './data-manager';

import './todos.css';

const $result = document.querySelector('#result');
// console.log($inputForm);

// todoModel이 하나씩 추가될 배열
const todos = loadData();

$result.addEventListener('click', (event) => {
	console.log(event.target.className);
	const { className } = event.target;
	if (className === 'delete') {
		const { index } = event.target.parentElement.dataset;
		todos.splice(index, 1);
		render(todos);
	} else if (className === 'toggle-checked') {
		const { index } = event.target.parentElement.dataset;
		todos[index].isDone = !todos[index].isDone;
		render(todos);
	}
});

formInput.init(todos);
render(todos);
