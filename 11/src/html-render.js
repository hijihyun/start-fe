const $result = document.querySelector('#result');

export function render(data) {
	console.log('todos: ', data);

	// eslint-disable-next-line arrow-body-style
	const html = data.map((todo, index) => {
		return `<li data-index="${index}">
    <button class="delete">×</button>
    <input type="checkbox" class="toggle-checked" ${
		todo.isDone ? 'checked' : ''
	}>
    <span class="text">${todo.text}</span>
    </li>`;
	});

	$result.innerHTML = `<ul>${html.join('')}</ul>`;
}
