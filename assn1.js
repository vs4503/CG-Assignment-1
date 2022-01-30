function drawNameWithLines ()
{
  // insert your code here to draw the letters of your name 
  // using only lines()
  
  //Code for letter 'V'
  line(100, 100, 150, 250);
  line(150, 250, 200, 100);

  //Code for letter 'S'
  line(250, 100, 320, 100);
  line(250, 100, 250, 175);
  line(250, 175, 320, 175);
  line(320, 175, 320, 250);
  line(320, 250, 250, 250);
  
}

function drawNameWithTriangles ()
{
  // insert your code here to draw the letters of your name 
  // using only ltriangles()
  
  //Code for letter 'V'
  triangle(100, 300, 150, 450, 150, 400);
  triangle(150, 450, 200, 300, 150, 400);
  
  //Code for letter 'S'
  triangle(250, 300, 350, 300, 275, 340);
  triangle(250, 300, 250, 375, 275, 340);
  triangle(250, 375, 350, 375, 275, 340);
  triangle(250, 375, 350, 375, 325, 415);
  triangle(350, 375, 350, 450, 325, 415);
  triangle(350, 450, 250, 450, 325, 415);
  
}

// -----------------------------------------------------------
//
//  Do not edit below this lne
//
// -----------------------------------------------------------

let doLine;
let doTri;
let lineColor;
let fillColor;
let backgroundColor;

function setup() {
  createCanvas(500, 500);
  backgroundColor = color (150, 150, 150);
  background(backgroundColor);
  doLine = false;
  doTri = false;
  lineColor = color (0, 0, 0);
  fillColor = color (255, 0, 0);
}

function draw ()
{
  if (doLine) stroke(lineColor); else stroke (backgroundColor);
  drawNameWithLines();
  
  if (doTri) {
     fill(fillColor);
     stroke(fillColor);
  }
  else {
    fill(backgroundColor);
    stroke(backgroundColor);
  }
  drawNameWithTriangles();
}

function keyPressed()
{
  if (key == 'l') doLine = !doLine;
  if (key == 't') doTri = !doTri;
}