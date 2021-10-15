// 小手調べ
function setup(){
  for(let i = 100; i > 0; i-=10){
  if(i>50){stroke(255,0,0);}
  else{stroke(0,0,255);}
  ellipse(50,50,i);  // BLANK[1]
  }
}
