(function (w) {
	var helloSpeaker = {};
	var speakWord = "Hello";

	helloSpeaker.speak = function (name) {
	  console.log(speakWord + " " + name);
	}

	w.helloSpeaker = helloSpeaker;
})(window);