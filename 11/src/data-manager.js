function saveData(data) {
	localStorage.setItem('data', JSON.stringify(data));
}
function loadData() {
	const dataString = localStorage.getItem('data') || '[]'; // 처음에 빈값 []
	return JSON.parse(dataString);
}
export { saveData, loadData };
