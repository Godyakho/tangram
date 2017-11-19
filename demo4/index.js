var WINDOW_WIDTH = 1024;
var WINDOW_HEIGHT = 768;

var MARGIN_LEFT = 30;
var MARGIN_TOP = 300 ;
var RADIUS = 8;

var END = new Date()
END.setTime(END.getTime() + 3601000)



window.onload = function(){
	var canvas = document.getElementById('canvas')
	var context = canvas.getContext('2d')
	canvas.style.background = 'black'
	canvas.width = WINDOW_WIDTH
	canvas.height = WINDOW_HEIGHT
	setInterval(function(){render(context)},200)
}

function render(context){
    context.clearRect(0,0,canvas.width,canvas.height);
	var NOW = new Date()
	var Countdown = END - NOW
	var hour = parseInt(Countdown/3600000)
	var min =  parseInt((Countdown - hour*3600000)/60000)
	var sec =  parseInt((Countdown-hour*3600000-min*60000)/1000)
	//冒号索引为10
	var colon = 10;

	draw(MARGIN_LEFT,MARGIN_TOP,parseInt(hour/10),context)
	draw(MARGIN_LEFT+8*2*(RADIUS+1),MARGIN_TOP,parseInt(hour%10),context)

	draw(MARGIN_LEFT+15*2*(RADIUS+1),MARGIN_TOP,colon,context)

	draw(MARGIN_LEFT+19*2*(RADIUS+1),MARGIN_TOP,parseInt(min/10),context)
	draw(MARGIN_LEFT+27*2*(RADIUS+1),MARGIN_TOP,parseInt(min%10),context)

	draw(MARGIN_LEFT+34*2*(RADIUS+1),MARGIN_TOP,colon,context)

	draw(MARGIN_LEFT+38*2*(RADIUS+1),MARGIN_TOP,parseInt(sec/10),context)
	draw(MARGIN_LEFT+46*2*(RADIUS+1),MARGIN_TOP,parseInt(sec%10),context)
}

function draw(x,y,num,context){
		digit[num].forEach(function (_item,Yindex){
			_item.forEach(function(tar,Xindex){
				if(tar == 1){
					context.beginPath()
					context.arc(x+Xindex*2*(RADIUS+1)+RADIUS,y+Yindex*2*(RADIUS+1)+RADIUS+1,RADIUS,0,2*Math.PI,false)
					context.fillStyle = 'white'
					context.closePath()
					context.fill()
				}
			})
		})
}

