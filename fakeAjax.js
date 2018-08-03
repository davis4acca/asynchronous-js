function fakeAjax(url, callback) {
	var response = {
		file1: 'First file data',
		file2: 'Second file data',
		file3: 'Third file data'
	};
	let randomDelay = Math.round(Math.random() * 1e4);

	setTimeout(function() {
		callback(responses[url]);
	}, randomDelay);
}
