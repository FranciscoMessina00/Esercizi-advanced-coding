const canvas = document.getElementById('sine');
const ctx = canvas.getContext('2d');

var width = canvas.width;
var heigth = canvas.height;

var amplitude = 50;
var cycles = 10;
var period = (2 * Math.PI*cycles) / width;

// translate the y axis to the center of the canvas
ctx.translate(0, heigth / 2);

// Optional: draw a horizontal line for x axis

ctx.beginPath();
ctx.moveTo(0, 0);
ctx.lineTo(width, 0);
ctx.stroke();

// draw sine wave

ctx.beginPath();
ctx.strokeStyle = "#FF0000";

for(var x = 0; x < width; x++) {
    var y = -Math.sin(x * period) * amplitude;
    if(x == 0){
        ctx.moveTo(x, y);
    }else {
        ctx.lineTo(x, y);
    }
}
ctx.stroke();