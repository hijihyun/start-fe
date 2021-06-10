function saveData(data) {
	localStorage.setItem('data', JSON.stringify(data));
}
function loadData(callback) {
	const dataString = localStorage.getItem('data') || '[]'; // 처음에 빈값 []
	return JSON.parse(dataString);

	// fetch('http://localhost:3000/todos').then((response) => {
	// 	response.json().then((data) => {
	// 		callback(data);
	// 	});
	// });
}
export { saveData, loadData };
