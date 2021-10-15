// テキスト「二重ループ」
// 「偶数『行』の四角形の色を変える」パターン
// 練習：「偶数『列』の四角形の色を変える」パターンに変えてみましょう
function setup(){
  createCanvas(100, 100);
  for(let i = 0; i < 10; i++){
    for(let j = 0; j < 10; j++){
    if(i%2==0)  {fill(200,60,78);
    rect(i * 10, j * 10, 5, 5);}
    else{fill(50);
      rect(i * 10, j * 10, 5, 5);}
      console.log(i, j);
    }
  }
}
