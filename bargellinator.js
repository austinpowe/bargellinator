//NOTES: TO DO
// make color pallete more pleasing 
// let some colors repeat vertically in the pattern so they create more solid bands
// build new color stacking so it doesn't just look like zigzags
// if the color is really bright, the text label in the palette should be dark

// sets the placement of the stitch on the y axis
let y = 0;
let u = 0;

// randomizes the humps
let s = 0;

// sets the placement of the stitch on the x axis
let x = 0;

var rainbow = new Array(10);

let r;
let w;

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

}

function draw () {
  
// stitch width and height
let a = width*0.0125;
let b = a*4;
  
  
  for (let t = 0; t < w; t++) {
    fill(rainbow[t]);
    
    // this creates a new stitch
      rect(x,(y+u),a,b,b);
 
   // this moves the needle down to a new stitch 
    y = y + b;
  
  }

 // this sets the new offset from the top on the next row
 if (y > (height - u)) {
   
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
   
   y = 0;
   
  // this moves everything over to the right one stitch and resets color
  x = x + a;
 }
 
// we've filled up the screen with stitches!
if (x > width) {
   
   // displays a color pallete at the bottom
   for (let l = 0; l < w; l++) {
     
       // k is the width of the palette's color blocks
       let k = width/w;
       
       // sets the color + draws the color blocks
       fill(rainbow[l]);
       rect((0+(l*k)), height*0.9, k, height);
       
       //add color names on top
       fill(256,256,256);
       textSize(18);
       text(rainbow[l].toString('#rrggbb'), (l*k) + (k*0.5), height*0.95); 
     
   }
  
// MENU and NAV  

fill(255); 
strokeWeight(3);
stroke(rainbow[0]);

// bargellinator circle
menuheader = ellipse(width*0.1, width*0.1, width*0.1);

// save circle
savebutton = ellipse(width*0.1, width*0.2, width*0.05);

// again circle
againbutton = ellipse(width*0.1, width*0.275, width*0.05);

  noStroke();

textSize(10);
fill(rainbow[1]);

// bargellinator text
text("bargellinator.io", width*0.1, width*0.1);

// save text
text("save", width*0.1, width*0.2);

// again text
text("again", width*0.1, width*0.275);
  
   noLoop();
  
 }
 }

function mouseClicked() {
    if (
    (mouseX > width*0.05) &&
    (mouseY > width*0.15) &&
    (mouseX < width*0.15) &&
    (mouseY < width*0.25) 
    )  {
    saveover = true;
  }
  else {
   saveover = false; 
  }
  
  if (
    (mouseX > width*0.05) &&
    (mouseY > width*0.225) &&
    (mouseX < width*0.15) &&
    (mouseY < width*0.325) 
    )  {
    againover = true;
  }
  else {
   againover = false; 
  }

    
  if (saveover == true) {
   let filename = "Bargellinator-" + rainbow[0].toString('#rrggbb') + ".png";
   print(filename);
   save(filename);
  }
  if (againover == true) {
    resetSketch();
  }
}

function resetSketch() {
  fill(230);
  rect(0,0,width,height);
  
  y = 0;
  u = 0;
  s = 0;
  x = 0;
  menuover = false;
  saveover = false;
  againover = false;
 
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
  loop();
}