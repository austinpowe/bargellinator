// sets the placement of the first stitch
let y = 0;
let u = 0;

// randomizes the humps
let s = 0;

// sets the placement of the stitch on the x axis
let x = 0;

// introduces colors + color cycling
var rainbow = new Array(10);
let r;
let w;
let doublecolor;
let snakeycurves;
let snakeycounter = 0;
let snakeylimit;
let menunavcolor;

// here's how the menu works
let menuheader;
let savebutton;
let againbutton;
let menuover = false;
let saveover = false;
let againover = false;

function setup() {
createCanvas(windowWidth,windowHeight);
noStroke();
textAlign(CENTER,CENTER);
textStyle(BOLD);
resetSketch();
menucolorchange();
}

function menucolorchange() {
  document.getElementById("menunavigator").style.backgroundColor=menunavcolor;
}

function draw () {

  // sets dynamic stitch width and height
  let a = width*0.0125;
  let b = a*4;
    
  // a loop to draw stitches + change colors each time
  // doublecolor lets the color repeat sometimes
  for (let t = 0; t < w; t++) {

    if (t == doublecolor) {
    
      // this creates a new stitch
      rect(x,(y+u),a,b,b);

      // this moves the needle down to a new stitch 
      y = y + b;

    }
    else {

      //this sets the color of the next stitch
      fill(rainbow[t]);
      
      // this creates a new stitch
      rect(x,(y+u),a,b,b);
   
      // this moves the needle down to a new stitch 
      y = y + b;
    }
   }

  // this sets the new offset from the top on the next row
  if (y > (height - u) && snakeycurves == s) {

       //this sets it to the top
       y = 0;
       
       // this moves everything over to the right one stitch 
       x = x + a;

       if (snakeycounter < snakeylimit) {
         snakeycounter = snakeycounter + 1;

       }
       else {
        snakeycounter = 0;

          if (s >= 0 && s < r) {
             u = u - (b * 0.5);
             s = s + 1;
           }
          else if (s < 0 && r < 0) {
            u = u + (b * 0.5);
            s = s + 1;
           }
       }

  }
  else if (y > (height - u) && snakeycurves != s) {
   
           if (s >= 0 && s < r) {
             u = u - (b * 0.5);
             s = s + 1;
           }
           else if (s > 0 && s >= r) {
            r = (r * -1);
            s = (s * -1);
           }
           else if (s < 0 && r < 0) {
            u = u + (b * 0.5);
            s = s + 1;
           }
           else if (s >= 0 && r < 0) {
            r = (r * -1);
            s = (s * -1);
           }
       
       //this sets it to the top
       y = 0;
       
       // this moves everything over to the right one stitch 
       x = x + a;
  }
 
  // triggers if we've filled up the screen with stitches
  if (x > width) {
   
   // displays a color pallete at the bottom
   for (let l = 0; l < w; l++) {
     
       // k is the width of the palette's color blocks
       let k = width/w;
       
       // sets the color + draws each color block
       fill(rainbow[l]);
       rect((0+(l*k)), height*0.9, k, height);
       
       //add hex color names to each block
       fill(256,256,256);
       textSize(18);
       text(rainbow[l].toString('#rrggbb'), (l*k) + (k*0.5), height*0.95); 
     
    }
    
    noLoop();
  }
 }

function resetSketch() { // builds the environment from scratch 
  fill(255);
  rect(0,0,width,height);
  
  // resets variables
  y = 0;
  u = 0;
  s = 0;
  x = 0;
  menuover = false;
  saveover = false;
  againover = false;

  // builds new color palette and hump #s
  rainbow[0] = color(random(256),random(256),random(256));
  rainbow[1] = color(random(256),random(256),random(256));
  rainbow[2] = color(random(256),random(256),random(256));
  rainbow[3] = color(random(256),random(256),random(256));
  rainbow[4] = color(random(256),random(256),random(256));
  rainbow[5] = color(random(256),random(256),random(256));
  rainbow[6] = color(random(256),random(256),random(256));
  rainbow[7] = color(random(256),random(256),random(256));
  rainbow[8] = color(random(256),random(256),random(256));
  rainbow[9] = color(random(256),random(256),random(256));
  r = Math.round(random(2, 10));
  w = Math.round(random(2, 8));
  doublecolor = Math.round(random(2,7));
  snakeycurves = Math.round(random(2,8));
  snakeylimit = Math.round(random(0,4));
  menunavcolor = rainbow[0];

  loop();
}
