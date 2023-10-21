const canvas = document.getElementById('tiltedRect');
const ctx = canvas.getContext('2d');
// rotate the canvas
ctx.translate(canvas.width / 2, canvas.height / 2);
ctx.rotate(Math.PI / 6);
// make rectangle
var x = -50;
var y = -50;
var width = 100;
var height = 100;

// using fillRect
ctx.fillStyle = "#0000FF";
ctx.rect(-width / 2, -height / 2 , width, height);
ctx.fillStyle = "blue";
ctx.fill();
ctx.strokeStyle = "black";
ctx.stroke();

// this method is used to set the transformation matrix of the canvas
ctx.setTransorm(1, 0, 0, 1, 0, 0);