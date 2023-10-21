const canvas = document.getElementById('rect');
const ctx = canvas.getContext('2d');

// make rectangle
var x = 50;
var y = 50;
var width = 200;
var height = 100;

// using fillRect
ctx.fillStyle = "#0000FF";
ctx.fillRect(x, y, width, height);
