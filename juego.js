var fotos, fotosimg;
var gameState = 0;
var formulario;


var naracion = [
    "En el año 2030, se confirmo la 3ra guerra mundial.",
    "las grandes potencias querian el mundo de su lado",
    "Por eso empesaron a atacar con bombas nucleares.",
    "Luego de esto la civilizacion humana quedo devastada, de los 8000 millones de humanos solo quedaron 100 vivos.",
    "La mayoria de sobrevivientes se transformaron en mutantes sin retentiva, ni humaniodad, solo queriendo sasiar su hambre.",
    "De esos 100 que quedaron, esta es la historia de uno de ellos.",
];
var indiceNaracion = 0;




function preload() {

}


function setup(){
    canvas = createCanvas(windowWidth, windowHeight);
    fotos=createSprite(width-1100,height-700, 400, 400)
    formulario = new Form();
}



function draw(){
    background(0);
    if(gameState==0){
        formulario.displey();
    }else if (gameState==1){
        mostrarNaracion();

        drawSprites()
    }
}

function mostrarNaracion() {
    fill(255);
    textSize(20);
    textAlign(CENTER);
    text(naracion[indiceNaracion], fotos.position.x, fotos.position.y + 300);
}

function keyPressed() {
    if (keyCode === ENTER && indiceNaracion < naracion.length - 1) {
        indiceNaracion++;
    }
  }

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }