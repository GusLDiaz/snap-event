// var n1 = 1;
// var n2 = 1;
var blue = document.getElementById('red');


function random(number) {
	return Math.floor(Math.random() * (number + 1));
	// return n1 = Math.floor(Math.random() * (number + 1));
}
	blue.onclick = function() {
		let sizeRandomHeight = '' + random(700) + 'px';
		let sizeRandomWidth = '' + random(700) + 'px';
		#red.style.height = sizeRandomHeight;
		#red.body.style.width = sizeRandomWidth;
	};