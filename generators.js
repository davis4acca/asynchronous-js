// requires Asynquence library

ASQ()
	.runner(function* loadFiles() {
		// Request all files at once in
		// "parallel" via `getFile(..)`.
		var p1 = getFile('file1');
		var p2 = getFile('file2');
		var p3 = getFile('file3');

		// Render as each one finishes,
		// but only once previous rendering
		// is done.
		output(yield p1);
		output(yield p2);
		output(yield p3);
	})
	.val(function() {
		output('Complete!');
	});

// *****************************
function output(text) {
	console.log(text);
}

function getFile(file) {
	return ASQ(function(done) {
		fakeAjax(file, done);
	});
}
