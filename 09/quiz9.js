const $url = document.getElementById('url').value;
const $btn = document.getElementById('btn');
const $log = document.getElementById('log').value;

$btn.addEventListener('click', (event) => {
	if ($url === '') {
		alert('url을 입력해주세요.');
		return;
	}
});
