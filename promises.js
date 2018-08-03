function getFile(file) {
	return new Promise(function(resolve) {
		fakeAjax(file, resolve);
	});
}

// Request all files at once in
// "parallel" via `getFile(..)`.
var p1 = getFile('file1');
var p2 = getFile('file2');
var p3 = getFile('file3');

// Render as each one finishes,
// but only once previous rendering
// is done.
p1
	.then(output)
	.then(function() {
		return p2;
	})
	.then(output)
	.then(function() {
		return p3;
	})
	.then(output)
	.then(function() {
		output('Complete!');
	});

// **************************************
function output(text) {
	console.log(text);
}
