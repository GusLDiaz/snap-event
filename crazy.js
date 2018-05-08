// var n1 = 1;
// var n2 = 1;



function random(number) {
	return Math.floor(Math.random() * (number + 1));
	// return n1 = Math.floor(Math.random() * (number + 1));
}
let blue = document.getElementById('red');
	blue.onclick = function() {
		let sizeRandomHeight = '' + random(700) + 'px';
		let sizeRandomWidth = '' + random(700) + 'px';
		btn.height = sizeRandomHeight;
		btn.width = sizeRandomWidth;
	};