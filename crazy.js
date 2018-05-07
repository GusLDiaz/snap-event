// var n1 = 1;
// var n2 = 1;
var btn = document.getElementsByName('button');


function random(number) {
	return Math.floor(Math.random() * (number + 1));
	// return n1 = Math.floor(Math.random() * (number + 1));
}
	btn.onclick = function() {
		var sizeRandomHeight = '' + random(100) + 'px';
		var sizeRandomWidth = '' + random(100) + 'px';
		document.body.style.height = sizeRandomHeight;
		document.body.style.width = sizeRandomWidth;
	}
