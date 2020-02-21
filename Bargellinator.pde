// VERSION HISTORY
//--- v7.5 ---
// created humping system + randomizes size of humps
//
//--- v8.1 --- 
// added # to color names in final color pallette
// stored colors in an array
//
//--- v8.2 ---
// turned stitch building into a cleaner for loop
//
//--- v8.3 ---
// color palllete is now dynamic based on number of colors
//
//--- v8.4 ---
// screenshot filename now "bargellinator"
// screenshot filename now uses correct hex reference #

//NOTES: TO DO
// make color pallete more pleasing 
// let some colors repeat vertically in the pattern so they create more solid bands
// build new color stacking so it doesn't just look like zigzags

// sets the placement of the stitch on the y axis
float y = 0;
float u = 0;

// randomizes the humps
int s = 0;
int r = int(random(2,10));

// sets the placement of the stitch on the x axis
float x = 0;

// number of colors for this stitch
int w = int(random(2,10));

int[] rainbow = new int[10]; {
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
}

void setup() {
 size(600,600);
 noStroke();
 //frameRate(14);
 textAlign(CENTER,CENTER);

}

void draw () {
  
// stitch width and height
float a = width*.0125;
float b = a*4;
  
  
  for (int t = 0; t < w; t++) {
    fill(rainbow[t]);
    
    // this creates a new stitch
      rect(x,(y+u),a,b,b);
 
   // this moves the needle down to a new stitch 
    y = y + b;
  
  }

 // this sets the new offset from the top on the next row
 if (y > (height - u)) {
   
   if (s >= 0 && s < r) {
     u = u - (b * .5);
     s = s + 1;
   }
   else if (s > 0 && s >= r) {
    r = (r * -1);
    s = (s * -1);
   }
   else if (s < 0 && r < 0) {
    u = u + (b * .5);
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
   for (int l = 0; l < w; l++) {
     
       // k is the width of the palette's color blocks
       float k = float(width/w);
       
       // sets the color + draws the color blocks
       fill(rainbow[l]);
       rect((0+(l*k)), height*.9, k, height);
       
       //add color names on top
       fill(#FFFFFF);
      
       text("#" + hex(rainbow[l],6), (l*k) + (k*.5), height*.95); 
      
   }
   
   noLoop();
   
   // saves the design with a hex value reference number
   String filename = "Bargellinator-#" + hex(rainbow[0],6) + ".png";
   println(filename);
   save(filename);
  
 }
 }
