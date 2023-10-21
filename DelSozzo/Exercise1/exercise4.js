var startTime = 0; // This variable stores the animation start time

function drawRotatingSquare(currentTime){

  if(!startTime){
    startTime = currentTime;
  }
  
  var canvas = document.getElementById("tiltedRect");
  var ctx = canvas.getContext("2d");

  var width = canvas.width;
  var height = canvas.height;
  
  var rotationSpeed = 0.5 * 2 * Math.PI; // 0.5 rounds per second in radiants
  var elapsedTime = (currentTime - startTime) / 1000; // elapsed time in seconds
  var currentAngle = rotationSpeed * elapsedTime;

  var side = 100; // square side
  var centerX = width / 2;
  var centerY = height / 2;

  // clear the canvas
  ctx.clearRect(0, 0, width, height);
  // Move the origin to the center of the canvas
  ctx.translate(centerX, centerY);
  // Rotate the context
  ctx.rotate(currentAngle);

  // Draw the rotating square
  ctx.beginPath();
  ctx.rect(-side/2, -side/2, side, side); // The square is centered in the origin
  ctx.fillStyle = "blue";
  ctx.fill();
  ctx.strokeStyle = "black";
  ctx.stroke();

  // This method resets the transformation matrix to the identity matrix, and then runs transform() with the same arguments
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  requestAnimationFrame(drawRotatingSquare);
}

requestAnimationFrame(drawRotatingSquare);