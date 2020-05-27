function changeMe() {
	var back = document.getElementById('body');
	var colorArray = [];
	for (let i = 0; i < 3; i++) {
		colorArray.push(Math.floor(Math.random() * 255));
	}
	return (back.style.backgroundColor = 'rgb' + '(' + colorArray + ')');
}
