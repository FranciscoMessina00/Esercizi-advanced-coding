const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// make rectangle
/* ctx.fillStyle = "#FF0000";
ctx.fillRect(0, 0, 150, 75); */

//draw line
/* ctx.beginPath();
ctx.moveTo(0, 0);
ctx.lineTo(150, 100);
ctx.stroke(); */

// make trapezoid

/* ctx.beginPath();
ctx.moveTo(10, 10);
ctx.lineTo(100, 10);
ctx.lineTo(150, 75);
ctx.lineTo(10, 75);
ctx.stroke();
*/

// draw circle
/* ctx.beginPath();
ctx.arc(95, 50, 50, 0, 2 * Math.PI);
ctx.stroke();
 */
// create linear gradient
/* const grd = ctx.createLinearGradient(0, 0, 200, 0);
grd.addColorStop(0, '#FF0000');
grd.addColorStop(1, '#FFFFFF');

ctx.fillStyle = grd;
ctx.fillRect(10, 10, 200, 100);
 */
// text
/* ctx.font = "30px Comic Sans MS";
ctx.fillStyle = "#FF0000";
ctx.fillText("Hello World!", 10, 50);
// or stroke text
ctx.strokeText("Hello World!", 10, 50);
 */

// animations
/* function animate() {
    // do stuff
    requestAnimationFrame(animate);
}
requestAnimationFrame(animate);
 */
