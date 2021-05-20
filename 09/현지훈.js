/*
    2020 현지훈 학생 https://github.com/z-hoony/start-fe/tree/master/09
    더 보기 버튼을 클릭하면 다음 페이지가 추가되는 코드
    
    나는... 더 보기 버튼에 대해 잘못 이해하고 처음에 title 목록을 뿌려준 뒤
    더 보기 버튼을 클릭하면 해당 contents를 가져오도록 구현했다...ㅠㅠ
*/

const $btn = document.querySelector('#search-btn');
const $text = document.querySelector('#search-text');
const $result = document.querySelector('#result');
const $more = document.querySelector('#more-btn');
const url = 'https://dapi.kakao.com/v2/search/web';
const headers = {
	Authorization: 'KakaoAK 09dc9867e414a45e2b722e79e53e983e',
};

let currentPage = 1;
let currentSearchWord = '';

function success(data) {
	const { documents } = data;
	const li = documents.map((doc) => {
		return `<li class="list-group-item"><a href="${doc.url}" target="_blank">${doc.title}</a></li>`;
	});

	if (currentPage === 1) {
		$result.innerHTML = `<ul class="list-group list-group-flush">${li.join(
			'',
		)}</ul>`;
	} else {
		$result.children[0].innerHTML += li.join('');
	}
}

function error() {
	alert('데이터를 가져올 수 없습니다');
}

function search() {
	currentSearchWord = $text.value;
	if (currentSearchWord === '') {
		alert('검색어를 입력하세요');
		return false;
	}
	currentPage = 1;
	loadResult();

	return true;
}

function loadResult() {
	fetch(`${url}?query=${currentSearchWord}&page=${currentPage}`, { headers })
		.then((res) => res.json())
		.then(success)
		.catch(error);
}

function loadMore() {
	currentPage += 1;
	loadResult();
}

$btn.addEventListener('click', search);
$more.addEventListener('click', loadMore);
