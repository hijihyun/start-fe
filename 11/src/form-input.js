import todoModel from './todo-model';
import { render } from './html-render';

const $inputForm = document.querySelector('#input-form');
const $input = document.querySelector('#input');

// 해당 모듈 초기화
function init(data) {
	$inputForm.addEventListener('submit', (event) => {
		// console.log(event);
		event.preventDefault(); // 넘어가지 않도록 하고 submit 이벤트 확인

		const text = $input.value;
		console.log(text);
		$input.value = ''; // 적고 나서 지우기

		data.push(
			Object.assign(todoModel, {
				// object 합쳐주는 함수
				text,
				inDone: false,
			}),
		); // todos에 push

		/*
        // 동일 코드
        data.push( 
            ... todoModel, { 
			text,
			inDone: false,
		});
        */

		render(data);
	});
}

export default {
	init,
};
