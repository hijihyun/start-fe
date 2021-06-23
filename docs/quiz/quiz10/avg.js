function avg() {
	let all = 0;
	let nanCnt = 0;

	for (var i = 0; i < arguments[0].length; i++) {
		if (isNaN(arguments[0][i])) {
			if (isArray(arguments[0][i])) {
				arguments[0][i].forEach(function (el) {
					all += el;
				});
				arguments[0].length += arguments[0][i].length - 1;
				nanCnt -= arguments[0][i].length - 1;
				continue;
			} else {
				nanCnt++;
				continue;
			}
		}
		all += parseInt(arguments[0][i]);
	}
	const avg = all / (arguments[0].length - nanCnt);
	console.log(all);
	return avg;
}

function isArray(o) {
	return Object.prototype.toString.call(o) === '[object Array]';
}

export default avg;
