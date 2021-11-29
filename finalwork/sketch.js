// 最終課題を制作しよう
let X,Y,vx,vy;

function setup(){
  createCanvas(400, 400);
  stroke(255);
  strokeWeight(3);
  background(160, 192, 255);
X=0;Y=0;
vx=0;vy=0;
}
function mouseClicked(){
vx+=(mouseX-X)/50;vy+=(mouseY-Y)/50;
}
function draw(){
  background(160, 192, 255);
  fill(0);
  ellipse(200,200,width);
  fill(242, 212, 147);
  ellipse(200,200,320,320);
  let x=1/10; let y=1/5;
  while(x<2)
  { fill(255,0,0);
   arc(200,200,320,320,x*PI,y*PI);
   fill(0);
   arc(200,200,290,290,x*PI,y*PI);
   fill(255,0,0);
   arc(200,200,160,160,x*PI,y*PI);
   fill(0);
   arc(200,200,130,130,x*PI,y*PI);

   fill(0,255,0);
     arc(200,200,320,320,x*PI+1/10*PI,y*PI+1/10*PI);
     fill(242,212,147);
     arc(200,200,290,290,x*PI+1/10*PI,y*PI+1/10*PI);
     fill(0,255,0);
     arc(200,200,160,160,x*PI+1/10*PI,y*PI+1/10*PI);
     fill(242,212,147);
     arc(200,200,130,130,x*PI+1/10*PI,y*PI+1/10*PI);
   x+=1/5; y+=1/5; }

  fill(0,255,0);
    ellipse(200,200,40);
  fill(255,0,0);
    ellipse(200,200,25);

 ellipse(X,Y,30);
 X+=vx; Y+=vy;
 if(X < 0 || X > width){ vx = -1 * vx; }
 if(Y< 0 || Y > height){ vy = -1 * vy; }
 if(X>=190&&X<=210&&Y>=190&&Y<=210){vx=0;vy=0}
}
