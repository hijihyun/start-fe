const $url = document.getElementById('url');
const $btn = document.getElementById('btn');
const $log = document.getElementById('log');

function fetchUrl() {
	const url = document.getElementById('url').value;
	if (url === '') {
		alert('url을 입력해주세요.');
		return;
	}

	const promise = fetch(url);
	let promiseCatch = fetch('https://daum.net');

	promise.then((res) => {
		const testPromise = res.text();
		testPromise
			.then((data) => ($log.value = data))
			.catch(promiseCatch.then((data) => ($log.value = data)));
	});
}

$btn.addEventListener('click', fetchUrl);

$url.addEventListener('keydown', (event) => {
	if (event.keyCode == 13) {
		fetchUrl();
	}
});
