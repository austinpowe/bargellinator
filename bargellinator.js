//NOTES: TO DO
// make color pallete more pleasing 
// let some colors repeat vertically in the pattern so they create more solid bands
// build new color stacking so it doesn't just look like zigzags
// if the color is really bright, the text label in the palette should be dark
// add watermark?

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

function setup() {
createCanvas(windowWidth,windowHeight);
 noStroke();
 textAlign(CENTER,CENTER);
  
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

}

function draw () {
  
// stitch width and height
let a = width*0.0125;
let b = a*4;
  
  console.log("rainbow[1]=", rainbow[1]);
  
  
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
      
       text("#" + hex(rainbow[l],6), (l*k) + (k*0.5), height*0.95); 
      
   }
   
   noLoop();
   
   // saves the design with a hex value reference number
   let filename = "Bargellinator-#" + hex(rainbow[0],6) + ".png";
   print(filename);
   save(filename);
  
 }
 }
