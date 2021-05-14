const $btn = document.querySelector('#search-btn');
const $text = document.querySelector('#search-text');
const $result = document.querySelector('#result');
const url = 'https://dapi.kakao.com/v2/search/web';
const headers = { Authorization: 'KakaoAK 9ac229859e9b13e1667fdaba85d84ce7' };
let value = '';
let more = '';

function success(data) {
	const { documents } = data;
	//console.log(documents[0]);
	const li = documents.map((doc) => {
		// 새로운 배열 리턴
		return `<li class="list-group-item"><a href="${doc.url}" target="_blank">${doc.title}</a><br>
		<button class="btn btn-info" type="button" id="more">내용 더보기</button>
		<div id="contents" style="display: none">${doc.contents}<div></li>
		`;
	});

	more = documents.map((doc) => {
		return `${doc.contents}`;
	});

	$result.innerHTML = `<ul class="list-group list-group-flush">${li.join(
		'', // 합친 것 뿌려주기
	)}</ul>`;
}
function error() {
	// eslint-disable-next-line no-alert
	alert('데이터를 가져올수 없습니다');
}
function search() {
	value = $text.value;

	if (value === '') {
		// eslint-disable-next-line no-alert
		alert('검색어를 입력하세요');
		return false;
	}

	fetchResult(value);

	return true;
}
function fetchResult(value) {
	fetch(`${url}?query=${value}`, { headers })
		.then((res) => res.json())
		.then(success) // 한번 더 .then 던지기
		.catch(error);
}

$btn.addEventListener('click', search);

// 새로 생성된 버튼에 동적 이벤트 추가
document.addEventListener('click', function (e) {
	if (e.target.id === 'more') {
		e.target.nextSibling.nextSibling.style.display = 'block';
		e.target.style.display = 'none';
	}
});
