/*
 * This is the main 'driver' of the program.
 * The main functionality of this file is to make calls to
 * the two shape classes and instantiate them on the canvas.
 */

// Global variables to represent objects of two specific types.
let aColoredTorus;
let aColoredBox;

// Declaring two arrays to hold both Torus objects and Box objects.
let arrOfBoxes = [];
let arrOfTorus = [];

function setup() {
  createCanvas(displayWidth, displayHeight, WEBGL); // WEBGL is needed for rendering 3D.
}

function draw() {
  background(0);

  // Nested for-loop structure allows the boxes to be drawn _inside_
  // each element of the previous array's.
  for (let i = 0; i < arrOfTorus.length; i++) {
    arrOfTorus[i].display();
    for (let j = 0; j < arrOfBoxes.length; j++) {
      arrOfBoxes[j].display();
    }
  }

}

/*
 * mouseClicked is a specific function allowed while using the p5.js
 * library. The function looks for events and executes the code
 * when the event is triggered.
 */
function mouseClicked() {
  arrOfTorus.pop();
  let aColoredBox = new cluelessBox(20);
  arrOfBoxes.push(aColoredBox);
}

/*
 * mouseDragged is a specific function allowed while using the p5.js 
 * library. The function looks for mouse events and executes the code
 * during the event.
 */
function mouseDragged() {
  let aColoredTorus = new coloredTorus(50, 15);
  arrOfTorus.push(aColoredTorus);
}

function keyPressed() {
  if (keyCode === DELETE) {
    background(0);
    clear();
  }
}