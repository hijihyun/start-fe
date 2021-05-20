/*
==========HTTP==========
HTTP: HTML 문서와 같은 리소스들을 가져올 수 있도록 해주는 프로토콜(protocol)
url: 기본 포트는 생략되며 :80
요청 메소드: 보안상의 이유등으로 GET,POST,PUT,DELETE 주로 사용하고 get위주 실습할 예정
헤더: 안 보이는 부분이며 정보를 포함. 클라이언트쪽은 요청 헤더 서버쪽 응답 헤더
http 책으로 보는 걸 추천
캐싱: 성능최적화 목적으로 리소스를 따로 저장해두는 기술들. 속도↓ 비용↓
상태코드: 200번대 성공, 301 리다이렉트, 400번대 클라이언트에러, 500번대 서버에러

개발자도구의 네트워크 탭 :
js, css, 응답헤더 등 확인 가능
리소스들의 로딩, 호출 그래프
disable cache 수정 잘 안 될 수 있어 보통 캐시 없이 개발

테스트 도구들:
1. Postman: http request 간단 테스트 툴. 브라우저는 렌더링하지만 이건 그냥 날 것 가져온다.
헤더나 body 어떻게 보낼 지 정하는 도구. 백엔드에서 만든 api 테스트 가능
2. RequestBin: 서버 쪽에서 해당 요청들 테스트. 만들어주는 주소 요청하면 클라이언트 요청에 대한 정보. favicon.ico 브라우저 이미지 체크
(jsbin.com html, css, js 간단히 테스트해보는 툴)
3..0 http 확장자: 마켓플레이스 rest client 설치 후 test.http 파일 생성하면 vscode에서도 테스트 가능.
GET https://daum.net 쓰고 send request 클릭
4. curl: CLI툴. $ curl -v https://1boon.kakao.com 명령어
nodejs는 백엔드 프로그래밍을 할 수 있는 자바스크립트 플랫폼

==========HTTP스크립팅(Ajax, Asynchronous비동기 JavaScript and XML)==========
자바스크립트로 http 조작
순차적으로 쭉 내려오는게 동기, 이벤트를 등록하고 기다리는게 비동기
XMLHttpRequest 초창기 외부 리소스 가져오던 메소드
fetch() 가져오다 라는 뜻. 오늘날 표준

개발자도구 콘솔에 fetch('issue.json')치면 Promise와 404출력되는데 .then성공 콜백 붙이는, .catch실패했을때 붙이는 Promise(객체) 메소드
fetch('issue.json').then(res=>console.log(res)).catch(e=> console.log(1,e)) 치면 Response 확인 가능
fetch('http://sqdsfaxs.com').catch((e)=>console.log(11,e))하면 11 TypeError뜨며 에러 캐치 가능
const promise = fetch('fetch.html')
promise.then(res=>console.log(res.text()))
app.js에서 실습

==========JSON==========
xml 형태는 파싱 오래걸리고 커서 자바스크립트 오브젝트 형태로 데이터를 주고받게 되었다
JSON 이쁘게 볼 수 있는 크롬 확장 JSON viewer

fetch('https:daum.net') Error
보안상 해당 도메인 리소스가 아니면 자바스크립트로 불러올 수 없으므로 JSON이 아닌 JSONP(padding이 붙는)형태로 가져온다(크로스도메인 이슈 회피).
jsonp.js와 json.json 파일에서 실습
json은 쌍따옴표 필수

<script src="app.js"></script>
<script src="jsonp.js"></script>
2개 부를 수 있으며 윗줄부터 실행된다

<script sre="외부 리소스.js"></script> 방법 응답헤더에 따라 불가능할수도
window.close(), 비동기 window.open('url') 불가능해졌다.

<head>에 동적 삽입(API 사용 방법도 동일)
var head = document.getElementsByTagName("head")[0];
var script = document.createElement('script');
script.type = 'text/javascript';
script.src = 'http://api.facebook.com/method/links.getStats?format=json&urls=http://daum.net&callback=complate';
head.appendChild(script);
*/
