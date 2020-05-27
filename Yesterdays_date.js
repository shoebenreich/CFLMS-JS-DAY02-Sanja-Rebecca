const yesterday = function(string) {
	string = new Date(string);
	string.setDate(string.getDate() - 1);
	console.log(string.toDateString())
	}
	

yesterday("Mar 11, 2017")