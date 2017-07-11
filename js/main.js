// START JAVASCRIPT PAPER, STONE, SCISSORS

var joueur = 0;
var Ordi = 0;

var choixuser="";
function choix(x){
  choixuser=x;
  document.getElementById('demo').innerHTML =  choixuser;
  game();
}
function game(choix) {
  a=choixuser;

if (joueur < 3 && Ordi < 3 ){

var b = Math.floor((Math.random() * 3) + 1);


if(b==1){
  b="pierre";
} else if (b==2){
   b="papier";
} else {
  b="ciseaux";
}

document.getElementById('demo').innerHTML = "L'Ordinateur à choisi " + "" + b;

if(a==b){
  alert("égalité");
}
else if(a==="pierre" && b==="papier"){

Ordi++;
}
else if(a==="ciseaux" && b==="papier"){

joueur++;
}
else if(a==="papier" && b==="pierre"){

joueur++;
}
else if(a==="papier" && b==="ciseaux"){

Ordi++;
}
else if(a==="ciseaux" && b==="pierre"){

Ordi++;
}
else if(a==="ciseaux" && b==="papier"){

joueur++;
}

document.getElementById("PLAYER").innerHTML = joueur;
document.getElementById("JIGSAW").innerHTML = Ordi;

if (joueur == 3) {
  document.getElementById("GAGNE").src = "https://media.giphy.com/media/a0h7sAqON67nO/giphy.gif";
;
}
else if(Ordi==3){
  document.getElementById("PERDU").src = "https://media.giphy.com/media/Rci7yWYxKOMFy/giphy.gif";
}


}


}


//END JAVASCRIPT PAPER, STONE, SCISSORS


//START PLAYER NAME

function myFunction() {
  var x = document.getElementById("fname").value;
  document.getElementById("result").innerHTML = "On va jouer à un jeu" + ", " + x;
  document.getElementById("playername").innerHTML = "" + x;
  document.getElementById("scoreplayername").innerHTML = "" + x;
  document.getElementById("helloplayername").innerHTML = "Bonjour " + x;
}

// END PLAYER NAME
