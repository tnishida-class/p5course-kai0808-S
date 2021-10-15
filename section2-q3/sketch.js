// ダーツ

function setup() {
  const green = color(0, 255, 0);
  const red = color(255, 0, 0);
  const black = color(0);
  const cream = color(242, 212, 147);
  createCanvas(400, 400);
  background(255);
  stroke(255);
  strokeWeight(3);
fill(black);
 ellipse(200,200,width);
fill(cream);
 ellipse(200,200,320,320);
 let x=1/10; let y=1/5;
 while(x<2)
 { fill(red);
   arc(200,200,320,320,x*PI,y*PI);
   fill(black);
   arc(200,200,290,290,x*PI,y*PI);
   fill(red);
   arc(200,200,160,160,x*PI,y*PI);
   fill(black);
   arc(200,200,130,130,x*PI,y*PI);

   fill(green);
     arc(200,200,320,320,x*PI+1/10*PI,y*PI+1/10*PI);
     fill(cream);
     arc(200,200,290,290,x*PI+1/10*PI,y*PI+1/10*PI);
     fill(green);
     arc(200,200,160,160,x*PI+1/10*PI,y*PI+1/10*PI);
     fill(cream);
     arc(200,200,130,130,x*PI+1/10*PI,y*PI+1/10*PI);
   x+=1/5; y+=1/5; }

  fill(green);
    ellipse(200,200,40);
  fill(red);
    ellipse(200,200,25);
 }
