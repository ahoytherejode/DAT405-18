function setup() {
  // Create the canvas
  createCanvas(700, 400);
  background(125);

  // Line - Left Vertical
  stroke(0, 255, 255);
  strokeWeight(10);
  line(50, 50, 50, 350);

  // Line - Right Vertical
  stroke(255, 125, 0);
  strokeWeight(10);
  line(650, 50, 650, 350);

  // Line - Bottom Horizontal
  stroke(125, 200, 0);
  strokeWeight(10);
  line(50, 350, 650, 350);

  // Line - Top Horizontal
  stroke(255, 0, 255);
  strokeWeight(10);
  line(50, 50, 650, 50);

  // Line - Top to Bottom Diagonal
  stroke(0, 255, 0);
  strokeWeight(10);
  line(50, 50, 650, 350);

  // Line - Bottom to Top Diagonal
  stroke(255, 255, 0);
  strokeWeight(10);
  line(50, 350, 650, 50);

  // Ellipse - Top left
  fill(0, 0, 255);
  noStroke();
  ellipse(50, 50, 80, 80);

  // Ellipe - Top right
  fill(255, 0, 0);
  noStroke();
  ellipse(650, 50, 80, 80);

  // Ellipse - Bottom left
  fill(0, 255, 0);
  noStroke();
  ellipse(50, 350, 80, 80);

  // Ellipse - Bottom right
  fill(255, 255, 0);
  noStroke();
  ellipse(650, 350, 80, 80);

}

function draw() {

}
