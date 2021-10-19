// チェッカー
function setup() {
  createCanvas(200, 200);
  noStroke();
  let size = width/8;
  for(let i = 0; i < 8; i++){
  for(let j = 0; j < 8; j++){
   if(i%2==0&& j%2==1){ fill('#708090');
  rect(i*size,j*size,size,size);}
  if(i%2==0 && j==1){fill(255,0,0);ellipse(i*size+1/2*size,j*size+1/2*size,size,size);}
  if(i%2==0&&j==5 || i%2==0&&j==7){fill(25);ellipse(i*size+1/2*size,j*size+1/2*size,size,size);}
  if(i%2==1 && j%2==0){fill('#708090');rect(i*size,j*size,size,size);}
  if(i%2==1&&j==0 || i%2==1&&j==2){fill(255,0,0);ellipse(i*size+1/2*size,j*size+1/2*size,size,size);}
  if(i%2==1&&j==6){fill(25);ellipse(i*size+1/2*size,j*size+1/2*size,size,size);}
 }
}
}
