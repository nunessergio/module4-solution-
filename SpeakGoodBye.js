(function (w) {
	var byeSpeaker = {};
	var speakWord = "Good Bye";

	byeSpeaker.speak = function (name) {
	  console.log(speakWord + " " + name);
	}

	w.byeSpeaker = byeSpeaker;

})(window);



