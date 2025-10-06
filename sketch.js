// You can use the p5.js Web Editor for this too which is linked below!

// (Copy here)
// https://editor.p5js.org/

// Remember, you should always end your lines with ";" because if you
// don't, the code has a chance to not work just because of that
// for some reason, the only exceptions being things like the if
// statement structure itself (eg. line 49 & 51 and not 50 as that's
// what happpens if the conditions are all met)

// Lets the variables exist, get it?
// It also uses an equals symbol to tell the variables
// what their value is
let rX = 200;
let rY = 200;


function setup() {  // This function gets run once at the start of the program

  // Decides how big the appearance of the page is
  createCanvas(600, 400);

  // Draws a color onto the canvas once
  background(240);
  // ellipseMode(CORNER);

  // These are functions that change it so the shapes
  // are placed exactly where their X and Y is since
  // by default the X and Y is where the top left corner
  // of the shape will be placed
  ellipseMode(CENTER);
  rectMode(CENTER);
}

function draw() { // Everything in here runs every single frame

  // Constantly draws a color onto the canvas (instead of just one time)
  background(220);

  // Rect Movement

  // These just frame check if certain keys are pressed and alter
  // Variables as long as all the conditions are met

  // It just checks for keycode here specifically if it's held down
  // NOT simply pressed, if it were to be pressed it would
  // only run ONCE every time you press it and not continue
  // to run if it's held down
  if (keyIsDown(LEFT_ARROW) === true) {
    rX -= 5;
  }
  if (keyIsDown(RIGHT_ARROW) === true) {
    rX += 5;
  }
  if (keyIsDown(UP_ARROW) === true) {
    rY -= 5;
  }
  if (keyIsDown(DOWN_ARROW) === true) {
    rY += 5;
  }


  // Rect Design
  // Assigns the variables from the top of the code
  // to the shapes X and Y positions, this helps alter
  // the positions of things constantly
  rect(rX, rY, 80, 80);

  // Oval Loop
  // Creates an Index and sets it to 0
  // Constantly frame checks if the Index Value is less than or equal to 10
  // Constantly adds 1 to the Value of Index each frame
  // This will run as long as all the conditions are met
  for (let index = 0; index <= 10; index += 1) {
    // Will do this however much times the Index value equals
    ellipse(random(0, 600), random(0, 400), 25, 12.5)
  }

  // Ellipse Design
  // Uses RGB (Red, Green, Blue) which cosists of those 3 values
  // by using the first value of RGB, that being red, it allows
  // us to morph the shapes color into the red color it is when
  // you run it
  fill(255, 0, 0);
  // Constantly sets the position to the mouse each frame
  ellipse(mouseX, mouseY, 100, 50);
}

