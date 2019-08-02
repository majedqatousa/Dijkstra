	window.onload = function() {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    var img = document.getElementById("scream");
    ctx.drawImage(img, 10, 10,730,1200);
	ctx.beginPath();
	ctx.moveTo(20, 20);	
	ctx.lineTo(20, 200);
	ctx.lineTo(90, 100);
	ctx.stroke();
	
	}
			
			
	