// fetch 이용해 http로 데이터 가져오기
/*
const promise = fetch('http');
console.log(promise); // Promise 객체 리턴

promise.then((res) => {
	console.log('res:', res); // Response 정보
	const testPromise = res.text(); // 텍스트로
	console.log('testPromise:', testPromise);

	testPromise.then((data) => console.log('data:', data)); // 한번 더 then
});
*/

// json 실습
/*
const promise = fetch('./json.json');
console.log(promise);

promise.then((res) => {
	console.log('res:', res);
	const testPromise = res.json();
	console.log('testPromise:', testPromise);

	testPromise.then((data) => console.log('fetch():', data));
});
*/

function callback(data) {
	console.log('callback:', data);
}
