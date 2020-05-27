const capitalize = function(sentence) {
	sentence = sentence.charAt(0).toUpperCase() + sentence.slice(1);
	document.write(sentence);
};

let b = 'i am a web developer.<br>';
let c = 'this is a test. <br>';
capitalize(b);
capitalize(c);
