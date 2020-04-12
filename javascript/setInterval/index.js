function countFrom(a, b) {
	return new Promise((resolve, reject) => {
		var intervalId = setInterval(function () {
			console.log(a++);
			if (a-1 === b) {
				clearInterval(intervalId);
				resolve(true);
			}
		}, 1000);
	});
}


countFrom(1, 10).then(function () {
	console.log('Done');
});