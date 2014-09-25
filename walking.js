window.onload = function(){
	var leftBorder = 10;
	var rightBorder = 900;
	var theWalker = document.getElementById("img");
	var direction = "left"

	

	theWalker.style.left = rightBorder + 'px';
	
	function moveLeft() {
		var pVal = parseInt(theWalker.style.left);
		theWalker.style.left = pVal - 100 +'px';
	}

	function moveRight() {
		var pVal = parseInt(theWalker.style.left);
		theWalker.style.left = pVal + 100 +'px';
	}

	function turn(){
		if (direction === "left") {
			theWalker.setAttribute('class', 'flip-img');
			direction = "right";
		}
		else{
			theWalker.setAttribute('class', '');
			direction = "left";
		}

	}

	function moveIt(){
			var xVal = parseInt(theWalker.style.left);

			if (direction === 'left' && xVal > leftBorder){
				moveLeft();
			}
			else if (direction === 'right' && xVal < rightBorder){
				moveRight();
			}
			else{
				turn();
			}
	}

	setInterval(moveIt, 500);

	theWalker.onclick = turn();
}

