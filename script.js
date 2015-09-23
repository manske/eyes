window.onload = function() {

	document.captureEvents(Event.MOUSEMOVE)

	document.onmousemove = mousePosition;

	window.onresize = resized;

	var eyes_ = document.getElementsByClassName('eyes');

	var mouseX = 0;
	var	mouseY = 0;

	var h = window.innerHeight;
	var w = window.innerWidth;

	var postX;
	var postY;

	var pupils_tare = document.getElementsByClassName('eye');
	var pupilPostX = [];
	var pupilPostY = [];

	for (var i = 0; i < 6; i++) {
			var f = pupils_tare[i];
			pupilPostX.push(parseInt(f.getAttribute("x")));
			pupilPostY.push(parseInt(f.getAttribute("y")));
	}
	//console.log(pupilPostX);

	function mousePosition() {

		mouseX = event.clientX;
		mouseY = event.clientY;

		for (var i = 0; i < eyes_.length; i++) {
			var pos = eyes_[i].getBoundingClientRect();
			var ePostX = (pos.left + 29) / w;
			var ePostY = (pos.top + 50) / h;
			var e = eyes_[i];
			follower(ePostX, ePostY, e);
		};

		postX = (mouseX / w);
		postY = (mouseY / h);

		
	};

	function resized() {
		h = window.innerHeight;
		w = window.innerWidth;
		return true;
	}

	function follower(ePostX, ePostY, e) {
		var moveY = 0;
		var moveX = 0;
		var quad = e.getAttribute('quad');
		//console.log(quad);
		//console.log("Element X: " + (ePostX  - 0.16666));
		//console.log("Cursor X:" + postX);
		if 
			//(postX > ePostX - 0.01 && postX < ePostX + 0.01 && postY > ePostY - 0.01 && postY < ePostY + 0.01 && quad != 0) 
		(false){
			e.setAttribute('quad', 0);
			moveX = 0;
			moveY = 0;
			move(e, moveX, moveY);	
			//console.log(e.getAttribute('quad'));
			return;
		} else if (postX < ePostX - 0.1666 && postY < ePostY && quad != 1) {
			e.setAttribute('quad', 1);
			moveX = -5;
			moveY = -5;
			move(e, moveX, moveY);	
			//console.log(1);
		} else if (postX > ePostX - 0.1666 && postX < ePostX + 0.1666 && postY < ePostY && quad != 2) {
			e.setAttribute('quad', 2);
			moveX = 0;
			moveY = -5;
			move(e, moveX, moveY);	
			//console.log(e.getAttribute('quad'));
		} else if (postX > ePostX + 0.16 && postY < ePostY && quad != 3) {
			e.setAttribute('quad', 3);
			moveX = 5;
			moveY = -5;
			move(e, moveX, moveY);	
			//console.log(e.getAttribute('quad'));
		} else if (postX > ePostX + 0.16 && postY > ePostY && quad != 4) {
			e.setAttribute('quad', 4);
			moveX = 5;
			moveY = 5;
			move(e, moveX, moveY);	
			//console.log(e.getAttribute('quad'));
		} else if (postX > ePostX - 0.16 && postX < ePostX + 0.1666 && postY > ePostY && quad != 5) {
			e.setAttribute('quad', 5);
			moveX = 0;
			moveY = 5;
			move(e, moveX, moveY);	
			//console.log(e.getAttribute('quad'));
		} else if (postX < ePostX - 0.16 && postY > ePostY && quad != 6) {
			e.setAttribute('quad', 6);
			moveX = -5;
			moveY = 5;
			move(e, moveX, moveY);	
			//console.log(e.getAttribute('quad'));
		}	
				
	};

	function move(e, moveX, moveY) {
		var pupils = e.getElementsByClassName('eye');
		//console.log(pupils);
		for (var i = 0; i < pupils.length; i++) {
				a = pupils[i];
				mx = pupilPostX[i] + moveX;
				my = pupilPostY[i] + moveY;
				//console.log(pupilPostX[i])
				a.setAttribute("x", mx);
				a.setAttribute("y", my);
			};
	}
}