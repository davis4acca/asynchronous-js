// **************************************
// The old-n-busted callback way

function getFile(file) {
	fakeAjax(file, function(text) {
		fileReceived(file, text);
	});
}

function fileReceived(file, text) {
	// haven't received this text yet?
	if (!responses[file]) {
		responses[file] = text;
	}

	var files = [ 'file1', 'file2', 'file3' ];

	// loop through responses in order for rendering
	for (var i = 0; i < files.length; i++) {
		// response received?
		if (files[i] in responses) {
			// response needs to be rendered?
			if (responses[files[i]] !== true) {
				output(responses[files[i]]);
				responses[files[i]] = true;
			}
		} else {
			// can't render yet
			// not complete!
			return false;
		}
	}

	console.log('Complete!');
}

// hold responses in whatever order they come back
var responses = {};

// request all files at once in "parallel"
getFile('file1');
getFile('file2');
getFile('file3');
