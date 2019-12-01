function setup() {
  createCanvas(710, 400);
  background(0, 154, 229);
}

function draw() {
  
  fill(194, 178, 128);
   noStroke();
   rect(0, 300, 710, 400);
    
    //fish #1
    fill(255, 120, 0);
    noStroke();
    ellipse(86, 56, 85, 55);
    fill(0);
    stroke(255);
    strokeWeight(5);
    ellipse(100, 46, 20, 20);
    
    //crab
    fill(255, 0, 0);
    noStroke();
    ellipse(156, 300, 100, 55);
    
    //eyes
    fill(0);
    stroke(255);
    strokeWeight(5);
    ellipse(140, 270, 20, 20);
    
    stroke(255);
    strokeWeight(5);
    ellipse(175, 270, 20, 20);
    
    //bubbles
    fill(174, 198, 207);
    noStroke();
    ellipse(140, 36, 15, 15);
    fill(174, 198, 207);
    noStroke();
    ellipse(150, 26, 10, 10);
    
    fill(255, 120, 0); 
    noStroke();
    arc(50, 55, 75, 75, -10.8, PI + QUARTER_PI);
    
   
    
    //fish #2
    fill(255, 192, 203);
    noStroke();
    ellipse(450, 150, 85, 55);
    fill(0);
    stroke(255);
    strokeWeight(5);
    ellipse(435, 145, 20, 20);
    
    //bubbles
    fill(174, 198, 207);
    noStroke();
    ellipse(400, 130, 15, 15);
    fill(174, 198, 207);
    noStroke();
    ellipse(395, 115, 10, 10);
    
    fill(255, 192, 203); 
    noStroke();
    arc(490, 145, 75, 75, -6.8, HALF_PI);  
    
    stroke(0);
  if (mouseIsPressed === true) {
    line(mouseX, mouseY, pmouseX, pmouseY);
      
      
  }
}
