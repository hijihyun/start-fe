import { render } from './html-render';
import formInput from './form-input'; // object 형태로 불러와보기

import './todos.css';

// console.log($inputForm);

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

formInput.init(todos);
render(todos);
