let cx;
let cy;
let fill9;
let spill;
let pt;
let nine;
let cup; 
let d;
let run;
let filled;
let filled9;
let spilled9;
let filled2;
let spilled2;
let filled8;
let spilled8;
let filled91;

let overCup = false;
let lockedc = false;
let overTap = false;
let lockedt = false;
let matched = false;
let lockedl = false;

let cxOffset = 0.0;
let cyOffset = 0.0;

function preload() {
   spill = loadImage('spill.gif');
   spill2 = loadImage('spill.gif');
   spill8 = loadImage('spill.gif');
   spill91 = loadImage('spill.gif');
   
   fill9 = loadImage('fill9.gif');
   fill2 = loadImage('fill2.gif');
   fill8 = loadImage('fill8.gif');
   fill91 = loadImage('fill9.gif');
}

function setup() {
 let canvas = createCanvas(600, 600);
 canvas.parent('sketch-container');
  cx = 20;
  cy = 502;
  pt = 0;
  d = 0;
  run = 0;
  lockc = 0;
  filled = 0;
  filled9 = 0;
  spilled9 = 0;
  filled2 = 0;
  spilled2 = 0;
  filled8 = 0;
  spilled8 = 0;
  filled91 = 0;
  
  bg = loadImage('bg.png');
  cup = loadImage('winecup.png');
  cup2 = loadImage('winecup.png');
  fill9 = loadImage('fill9.gif');
  spill = loadImage('spill.gif');
  nine = loadImage('nine.png');
  two = loadImage('two.png');
  eight = loadImage('eight.png');
  
  input = createInput();
  input.position(0, 600);

  button = createButton('submit');
  button.position(input.x + input.width, 600);
  button.mousePressed(greet);

  greeting = createElement('h2');
  textAlign(CENTER);
  textSize(50)

function greet() {
  password = input.value(); 
   if (password == "9289") {
      greeting.html('Congratulations! Puzzle #650 Solved');
      } else {
      greeting.html('Not Correct')
      textSize(50)}
    input.value('');
 }  
}

function draw() {
  image(bg,0,0,600,600);
  
if (!filled9)
 {image(cup, cx, cy,150,150); 
  }
   
if (
    mouseX > cx + 20 &&
    mouseX < cx + 140 &&
    mouseY > cy + 20 &&
    mouseY < cy + 100 && !filled9
  ) {overCup = true;
    if (!lockedc) {}
  } else {
    overCup = false;
  }
  
if (
    cx > 400 &&
    cx < 500 &&
    cy > 450 &&
    cy < 550 
  ) {matched = true;}
   else {
    matched = false;
  }

  if (matched && d<1) 
   { image(bg,0,0,600,600);
     image(cup2, 443, 500,150,150);
         } 
 
 if (filled9==1)
         {image(nine,0,0,600,600)} 

if (
    mouseX > 487 &&
    mouseX < 526 &&
    mouseY > 223 &&
    mouseY < 243 
  ) {overTap = true;
    if (!lockedt) {}
    }
  else {
    overTap = false
  }

if (lockedt && matched)
     {image(fill9, 0, 0, 600, 600); 
      filled9 = 1;
    }  
if (d == 1 && matched && filled9 ==1)
     {
   image(spill, 0, 0, 600, 600);
       spilled9 = 1
  }
  
if (filled2==1)
         {image(two,0,0,600,600)}
if (lockedt && matched && spilled9 ==1)
     { image(fill2, 0, 0,600,600); 
      filled2 = 1;
    }  
if (d == 2 && matched && filled2 ==1)
     { image(spill2, 0, 0, 600, 600);
       spilled2 = 1
  }
  
if (filled8==1)
         {image(eight,0,0,600,600)}  
  if (lockedt && matched && spilled2 ==1)
     {image(fill8, 0, 0,600,600); 
      filled8 = 1;
    } 
  if (d == 3 && matched && filled8 ==1)
     {
   image(spill8, 0, 0, 600, 600);
       spilled8 = 1
  }
  
if (filled91==1)
         {image(nine,0,0,600,600)} 
   if (lockedt && matched && spilled8 ==1)
     {image(fill91, 0, 0,600,600); 
      filled91 = 1;
    }  
   if (d == 4 && matched && filled91 ==1)
     {
   image(spill91, 0, 0, 600, 600)
  }
} 
  
function mousePressed() {
  if (overTap && matched)
     {pt = 1}}
  
function mousePressed() {
  if (overCup) {
    lockedc = true;
  } else {
    lockedc = false;
  }
  cxOffset = mouseX - cx;
  cyOffset = mouseY - cy;
 
  if (overTap) {
    lockedt = true;
  } else {
    lockedt = false;
  }    
}


function mouseDragged() {
  if (lockedc) {
    cx = mouseX - cxOffset;
    cy = mouseY - cyOffset;
  }
 }

function doubleClicked() {
  if (
    mouseX > 440 &&
    mouseX < 567 &&
    mouseY > 524 &&
    mouseY < 600 && filled9
   ) { 
    d = 1;
  }
  
  if (
    mouseX > 440 &&
    mouseX < 567 &&
    mouseY > 524 &&
    mouseY < 600 && filled2
   ) { 
    d = 2;
  }
  
  if (
    mouseX > 440 &&
    mouseX < 567 &&
    mouseY > 524 &&
    mouseY < 600 && filled8
   ) { 
    d = 3;
  }
  
  if (
    mouseX > 440 &&
    mouseX < 567 &&
    mouseY > 524 &&
    mouseY < 600 && filled91
   ) { 
    d = 4;
  }
}
