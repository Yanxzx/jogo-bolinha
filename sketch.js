let palavra

function setup() {
  createCanvas(400, 400);
  palavra = palavraAleatoria ();
}

function palavraAleatoria(){
  let palavras = ["bolo","brownie","doces","chocolates"];
  return random(palavras);
}

function inicializaCores(){
  background("blue");
  fill("white");
  textSize(64);
  textAlign(CENTER, CENTER);
}

function palavraParcial(minimo,maximo){
  let quantidade = map(mouseX,minimo,maximo,1,palavra.length)
  let parcial = palavra.substring(0,quantidade);
  return parcial ;
  }

function draw() {
  inicializaCores();
  let texto = palavraParcial(0, width);
  text(texto,200,200);
 /* if(mouseX < 50){
    let palavra = "b";
  text(palavra, 200, 200);
  } else if(mouseX <100){
    let palavra = "bo";
  text(palavra, 200, 200);
  } else if(mouseX <150){
    let palavra = "bol";
  text(palavra, 200, 200);
  } else if(mouseX <200){
    let palavra = "bolo";
  text(palavra, 200, 200);
  } */
  
}
