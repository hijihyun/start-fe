function avg() {
	let all = 0;
	let nanCnt = 0;
	for (var i = 0; i < arguments.length; i++) {
		if (isNaN(arguments[i])) {
			if (isArray(arguments[i])) {
				arguments[i].forEach(function (el) {
					all += el;
				});
				arguments.length += arguments[i].length - 1;
				nanCnt -= arguments[i].length - 1;
				continue;
			} else {
				nanCnt++;
				continue;
			}
		}
		all += arguments[i];
	}
	const avg = all / (arguments.length - nanCnt);
	return avg;
}

function isArray(o) {
	return Object.prototype.toString.call(o) === '[object Array]';
}

export default avg;
