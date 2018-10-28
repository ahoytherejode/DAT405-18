function setup() {
  // Create the canvas
  createCanvas(700, 400);
  background(125);

  strokeWeight(10);

  // Line - Left Vertical
  stroke(0, 255, 255);
  line(40, 40, 40, 360);

  // Line - Right Vertical
  stroke(255, 125, 0);
  line(660, 40, 660, 360);

  // Line - Bottom Horizontal
  stroke(125, 200, 0);
  line(40, 360, 660, 360);

  // Line - Top Horizontal
  stroke(255, 0, 255);
  line(40, 40, 660, 40);

  // Line - Top to Bottom Diagonal
  stroke(0, 255, 0);
  line(40, 40, 660, 360);

  // Line - Bottom to Top Diagonal
  stroke(255, 255, 0);
  line(40, 360, 660, 40);

  noStroke();

  // Ellipse - Top left
  fill(0, 0, 255);
  ellipse(40, 40, 80, 80);

  // Ellipe - Top right
  fill(255, 0, 0);
  ellipse(660, 40, 80, 80);

  // Ellipse - Bottom left
  fill(0, 255, 0);
  ellipse(40, 360, 80, 80);

  // Ellipse - Bottom right
  fill(255, 255, 0);
  rect(660, 360, 80, 80);

}

function draw() {

}
