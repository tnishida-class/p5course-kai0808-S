// テキスト「配列」～「配列を使った描画」までを収録
function setup(){
  createCanvas(400, 400);
  background(240);

  // 配列をランダムに初期化する
  let scores = [];
  for(let i = 0; i < 10; i++){
    scores[i] = random(20, 100); // 60以上100未満のランダムな数を代入
  }
  console.log(scores);

  // 合計を計算する
  let sum = 0;
  for(let i = 0; i < scores.length; i++){
    sum += scores[i];
  }
  console.log(sum);

  // ここから平均・最大・最小を求めます
  let average, largest, smallest;
average=sum/scores.length;
console.log(average);
  largest = 0;
  for(let i = 0; i < scores.length; i++){
   if(scores[i]>largest){largest=scores[i]};
  }
console.log(largest);
  smallest = 100;
  for(let i = 0; i < scores.length; i++){
  if(scores[i]<smallest){smallest=scores[i]};
  }
console.log(smallest);
  // ここから棒グラフを描いていきます。まずは背景に横線をn本引く
  const n = 10;
  for(let i = 0; i < n; i++){ line(0, height * i / n, width, height * i / n);}

  noStroke();

  for(let i = 0; i < scores.length; i++){
    const dx = width / scores.length;
    const h = height * scores[i] / 100;
    fill(0);
    if(scores[i]==largest){fill('red')};
    if(scores[i]==smallest){fill('blue')};// BLANK[4] ヒント: 条件分岐を使って色を変更します
    rect(i * dx + 2, height - h, dx - 4, h);
    fill(0);
    text(scores[i].toPrecision(3), i * dx, height - h);
  };
  stroke('green');
line(0,height-height*average/100,width,height-height*average/100);
  // BLANK[5] 平均点の線を引きます
}
