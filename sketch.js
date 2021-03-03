/***********************************************************************************
  Project 1: Gardening 101
  by Alex Kowalczuk

  Take tour around garden and learn something (VARY BASIC) information about planting.
***********************************************************************************/

// Array of images
var images = [];

// variable that is a function 
var drawFunction;

// offset from bottom of screen
var gTextOffset = 40;

// A Clickable object(s)
var beginButton;
var againButton;
var continueButton;
var strawberryButton;
var tomatoButton;
var endButton;

// Room images
function preload() {
  images[0] = loadImage('assets/start.png');
  images[1] = loadImage('assets/Question-1.png');
  images[2] = loadImage('assets/Question-2.png');
  images[3] = loadImage('assets/Question-3.png');
  images[4] = loadImage('assets/strawberry1.png');
  images[5] = loadImage('assets/END.png');
  images[6] = loadImage('assets/about.png');
  images[7] = loadImage('assets/tomato_2.png');
  images[8] = loadImage('assets/strawberry_2.png');
  images[9] = loadImage('assets/strawberry.png');
  images[10] = loadImage('assets/tomato.png');
  images[11] = loadImage('assets/drop.png');
  images[12] = loadImage('assets/pot.png');
  images[13] = loadImage('assets/seed.png');
  images[14] = loadImage('assets/ground.png');
  images[15] = loadImage('assets/sun.png');
  images[16] = loadImage('assets/strawberryfield.png');
  images[17] = loadImage('assets/tomatoes3.png');
  images[18] = loadImage('assets/theend.png');
  images[19] = loadImage('assets/tomatoFact.png');

}

// Center drawing, drawFunction will be one for default
function setup() {
  createCanvas(1200, 800);

  // Center our drawing objects
  imageMode(CENTER);
  textAlign(CENTER);
  textSize(24);

  // Splash screen as first screen
  drawFunction = drawStart;

  // makes buttons
  makeBeginButton();
  makeAgainButton();
  makeContinueButton();
  makeStrawberryButton();
  makeTomatoButtom();
  makeEndButtom();
}

// Very simple, sets the background color and calls your state machine function
function draw() {
  background(182, 124, 67);

  // will call your state machine function
  drawFunction();
}

// Function that makes BEGIN button
function makeBeginButton() {
  // Create the clickable object
  beginButton = new Clickable();
  
  beginButton.text = "Click to START";
  beginButton.textColor = "#365673"; 
  beginButton.textSize = 37; 


  // This would give it a white background
  beginButton.color = "#53B6FF";

  // set width + height to image size
  beginButton.width = 434;
  beginButton.height = 97;

  // set to middle of screen, since we are drawing from the corners, we need to make an
  // additional calculation here
  beginButton.locate( width/2 - beginButton.width/2 , height * (3/4) - 120);

  // Clickable callback functions, defined below
  beginButton.onPress = beginButtonPressed;
  beginButton.onHover = beginButtonHover;
  beginButton.onOutside = beginButtonOnOutside;
}

// Meow alert box when pressed (mouse down)
beginButtonPressed = function () {
  drawFunction = drawQuestion1; 
}

// tint when mouse is over
beginButtonHover = function () {
  this.color = "#F29199";
}

// return to normal when it is outside
beginButtonOnOutside = function () {
  this.color = "#53B6FF";
}

// Function that makes AGAIN button
function makeAgainButton() {
  // Create the clickable object
  againButton = new Clickable();
  
  againButton.text = "Click to start AGAIN";
  againButton.textColor = "#365673"; 
  againButton.textSize = 37; 


  // This would give it a white background
  againButton.color = "#53B6FF";

  // set width + height to image size
  againButton.width = 434;
  againButton.height = 97;

  // set to middle of screen, since we are drawing from the corners, we need to make an
  // additional calculation here
  againButton.locate( width/2 - againButton.width/2 , height * (3/4) - 120);

  // Clickable callback functions, defined below
  againButton.onPress = againButtonPressed;
  againButton.onHover = againButtonHover;
  againButton.onOutside = againButtonOnOutside;
}

// Meow alert box when pressed (mouse down)
againButtonPressed = function () {
  drawFunction = drawStart; 
}

// tint when mouse is over
againButtonHover = function () {
  this.color = "#F29199";
}

// return to normal when it is outside
againButtonOnOutside = function () {
  this.color = "#53B6FF";
}

// Function that makes CONTINUE button
function makeContinueButton() {
  // Create the clickable object
  continueButton = new Clickable();
  
  continueButton.text = "Click to CONTINUE";
  continueButton.textColor = "#365673"; 
  continueButton.textSize = 37; 


  // This would give it a white background
  continueButton.color = "#53B6FF";

  // set width + height to image size
  continueButton.width = 434;
  continueButton.height = 97;

  // set to middle of screen, since we are drawing from the corners, we need to make an
  // additional calculation here
  continueButton.locate( 760, 700);

  // Clickable callback functions, defined below
  continueButton.onPress = continueButtonPressed;
  continueButton.onHover = continueButtonHover;
  continueButton.onOutside = continueButtonOnOutside;
}

// Meow alert box when pressed (mouse down)
continueButtonPressed = function () {
  drawFunction = drawQuestion3; 
}

// tint when mouse is over
continueButtonHover = function () {
  this.color = "#F29199";
}

// return to normal when it is outside
continueButtonOnOutside = function () {
  this.color = "#53B6FF";
}

// Function that makes STRAWBERRY button
function makeStrawberryButton() {
  // Create the clickable object
  strawberryButton = new Clickable();
  
  strawberryButton.text = "Learn More";
  strawberryButton.textColor = "#365673"; 
  strawberryButton.textSize = 37; 


  // This would give it a white background
  strawberryButton.color = "#F29199";

  // set width + height to image size
  strawberryButton.width = 434;
  strawberryButton.height = 97;

  // set to middle of screen, since we are drawing from the corners, we need to make an
  // additional calculation here
  strawberryButton.locate( 400, 700);

  // Clickable callback functions, defined below
  strawberryButton.onPress = strawberryButtonPressed;
  strawberryButton.onHover = strawberryButtonHover;
  strawberryButton.onOutside = strawberryButtonOnOutside;
}

// Meow alert box when pressed (mouse down)
strawberryButtonPressed = function () {
  drawFunction = drawFact; 
}

// tint when mouse is over
strawberryButtonHover = function () {
  this.color = "#53B6FF";
}

// return to normal when it is outside
strawberryButtonOnOutside = function () {
  this.color = "#F29199";
}

// Function that makes TOMATO button
function makeTomatoButtom() {
  // Create the clickable object
  tomatoButton = new Clickable();
  
  tomatoButton.text = "Learn More";
  tomatoButton.textColor = "#365673"; 
  tomatoButton.textSize = 37; 


  // This would give it a white background
  tomatoButton.color = "#F29199";

  // set width + height to image size
  tomatoButton.width = 434;
  tomatoButton.height = 97;

  // set to middle of screen, since we are drawing from the corners, we need to make an
  // additional calculation here
  tomatoButton.locate( 400, 700);

  // Clickable callback functions, defined below
  tomatoButton.onPress = tomatoButtonPressed;
  tomatoButton.onHover = tomatoButtonHover;
  tomatoButton.onOutside = tomatoButtonOnOutside;
}

// Meow alert box when pressed (mouse down)
tomatoButtonPressed = function () {
  drawFunction = drawFact; 
}

// tint when mouse is over
tomatoButtonHover = function () {
  this.color = "#53B6FF";
}

// return to normal when it is outside
tomatoButtonOnOutside = function () {
  this.color = "#F29199";
}

// Function that makes END button
function makeEndButtom() {
  // Create the clickable object
  endButton = new Clickable();
  
  endButton.text = "THE END";
  endButton.textColor = "#365673"; 
  endButton.textSize = 37; 


  // This would give it a white background
  endButton.color = "#F29199";

  // set width + height to image size
  endButton.width = 434;
  endButton.height = 97;

  // set to middle of screen, since we are drawing from the corners, we need to make an
  // additional calculation here
  endButton.locate( 400, 700);

  // Clickable callback functions, defined below
  endButton.onPress = endButtonPressed;
  endButton.onHover = endButtonHover;
  endButton.onOutside = endButtonOnOutside;
}

// Meow alert box when pressed (mouse down)
endButtonPressed = function () {
  drawFunction = drawTheEnd; 
}

// tint when mouse is over
endButtonHover = function () {
  this.color = "#53B6FF";
}

// return to normal when it is outside
endButtonOnOutside = function () {
  this.color = "#F29199";
}

// Function that draw start animation
drawStart = function() {
   image(images[0],width/2, height/2);
   beginButton.draw();
}

// Function that draw Question 1
drawQuestion1 = function() {
   image(images[1],width/2, height/2);
}

// Function that draw Question 2
drawQuestion2 = function() {
   image(images[2],width/2, height/2);
}

// Function that draw end screen when user not interested
drawEND1 = function() {
  image(images[5],width/2, height/2);
  againButton.draw();

}

// Function that draw Question 3
drawQuestion3 = function() {
   image(images[3],width/2, height/2);

   image(images[7], 650, 283);
   image(images[8], 640, 442);
}

// Function that draw small tutorial and show what user need
drawHow = function() {
  image(images[6], width/2, height/2);

  image(images[14], 200, 640); // ground png
  image(images[12], 600, 670); // pot png
  image(images[11], 681, 388); // water drop png
  image(images[13], 383, 394); // seed png

  continueButton.draw();
}

// Function that draw info about tomato
drawTomato = function() {
  image(images[10], width/2, height/2);
  image(images[17], 200, 700);
  image(images[15], 200, 450);
  tomatoButton.draw();
}

// Function that draw info about strawberry
drawStrawberry = function() {
  image(images[9], width/2, height/2);

  image(images[4], 150, 370);
  image(images[15], 1000, 380);
  image(images[16], 600, 800);

  strawberryButton.draw();
}

// Function that draw "fun" fact about strawberry & tomatoe
drawFact = function() {
  image(images[19], width/2, height/2);
  endButton.draw();
}

// Function that draw the end slide
drawTheEnd = function() {
  image(images[18], width/2, height/2);
  againButton.draw();
}

// Keys for navigation between quizzes
function keyTyped() {

  if( drawFunction === drawQuestion1 ) {
    if(key === 'a') {
      drawFunction = drawQuestion2;
    }
    else if(key === 'b') {
      drawFunction = drawQuestion2;
    }
    else if(key === 'c') {
      drawFunction = drawQuestion2;
    }
    else if(key === 'd') {
      drawFunction = drawQuestion2;
  }
}

  else if( drawFunction === drawQuestion2 ) {
    if(key === 'a') {
      drawFunction = drawHow;
    }
    else if(key === 'b') {
      drawFunction = drawEND1;
    }
  }

  else if( drawFunction === drawQuestion3 ) {
    if(key === 'a') {
      drawFunction = drawTomato;
    }
    else if(key === 'b'){
      drawFunction = drawStrawberry;
    }
  }

}
