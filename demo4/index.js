var WINDOW_WIDTH = 1024;
var WINDOW_HEIGHT = 768;

window.onload = function(){
	var canvas = document.getElementById('canvas')
	var context = canvas.getContext('2d')

	canvas.width = WINDOW_WIDTH
	canvas.height = WINDOW_HEIGHT

	context.beginPath()
	context.arc(40,10,10,0,2*Math.PI)
	context.fillStyle = 'green'
	context.fill()
	context.closePath()

	context.beginPath()
	context.arc(60,10,10,0,2*Math.PI)
	context.fillStyle = 'blue'
	context.fill()
	context.closePath()

	context.beginPath()
	context.arc(80,10,10,0,2*Math.PI)
	context.fillStyle = 'red'
	context.fill()
	context.closePath()

	context.beginPath()
	context.arc(20,30,10,0,2*Math.PI)
	context.fillStyle = 'red'
	context.fill()
	context.closePath()

	context.beginPath()
	context.arc(20,50,10,0,2*Math.PI)
	context.fillStyle = 'red'
	context.fill()
	context.closePath()

}

function matrix(context) {
	
}