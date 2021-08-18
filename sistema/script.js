//TODAS AS VARIAVEIS DE CONTATOR
var contadorCaipiraDuplo = document.querySelector('.caipiraDuploSpan');
var contadorxTudoDuplo = document.querySelector('.xtudoDuploSpan');
var contadorxCaipira = document.querySelector('.xCaipiraSpan'); //ok
var contadorxTudo = document.querySelector('.xTudoSpan');
var contadorxFrango = document.querySelector('.xFrangoSpan');
var contadorxBacon = document.querySelector('.xBaconSpan');
var contadorxEgg = document.querySelector('.xEggSpan');
var contadorxInfantil = document.querySelector('.xInfantilSpan');
var contadorHamburguer = document.querySelector('.hamburguerSpan');

// Variaveis para armazenar valor
var somatorioCaipiraDuplo = 0;
var somatorioTudoDuplo = 0;
var somatorioCaipira = 0;
var somatorioTudo = 0;
var somatorioFrango = 0;
var somatorioBacon = 0;
var somatorioEgg = 0;
var somatorioInfantil = 0;
var somatorioHamburguer = 0;

var totalCaipiraDuplo = 550;
var totalTudoDuplo = 200;
var totalCaipira = 420;
var totalTudo = 180;
var totalFrango = 90;
var totalBacon = 120;
var totalEgg = 89;
var totalInfantil = 50;
var totalHamburguer = 49;


function calcularCaipiraduplo(){
//TODAS AS FUNCOES DE SOMA E SUBTRAÇÃO DO CAIPIRA DUPLO
document.querySelector('.caipiraDuploSoma').addEventListener('click', function(){
  // soma no lanche
  var numero = parseInt(contadorCaipiraDuplo.textContent) + 1; 
  contadorCaipiraDuplo.textContent = numero;
  somatorioCaipiraDuplo++;
});

document.querySelector('.caipiraDuploSub').addEventListener('click', function(){
  // subtrai no lanche
  var numero = parseInt(contadorCaipiraDuplo.textContent) - 1; 
  contadorCaipiraDuplo.textContent = numero;
  somatorioCaipiraDuplo--;
});

}calcularCaipiraduplo();


function calcularTudoDuplo(){
//TODAS AS FUNCOES DE SOMA E SUBTRAÇÃO DO X TUDO DUPLO
document.querySelector('.xtudoDuploSoma').addEventListener('click', function(){
  // soma no lanche
  var numero = parseInt(contadorxTudoDuplo.textContent) + 1; 
  contadorxTudoDuplo.textContent = numero;
  somatorioTudoDuplo++;
});

document.querySelector('.xtudoDuploSub').addEventListener('click', function(){
  // subtrai no lanche
  var numero = parseInt(contadorxTudoDuplo.textContent) - 1; 
  contadorxTudoDuplo.textContent = numero;
  somatorioTudoDuplo--;
});
}calcularTudoDuplo();

function calcularCaipira(){
//TODAS AS FUNCOES DE SOMA E SUBTRAÇÃO DO X Caipira
document.querySelector('.xCaipiraSoma').addEventListener('click', function(){
  // soma no lanche
  var numero = parseInt(contadorxCaipira.textContent) + 1; 
  contadorxCaipira.textContent = numero;
  somatorioTudoDuplo++;
});

document.querySelector('.xCaipiraSub').addEventListener('click', function(){
  // subtrai no lanche
  var numero = parseInt(contadorxCaipira.textContent) - 1; 
  contadorxCaipira.textContent = numero;
  somatorioTudoDuplo--;
});
}calcularCaipira();

function calcularTudo(){
//TODAS AS FUNCOES DE SOMA E SUBTRAÇÃO DO X Tudo
document.querySelector('.xTudoSoma').addEventListener('click', function(){
  // soma no lanche
  var numero = parseInt(contadorxTudo.textContent) + 1; 
  contadorxTudo.textContent = numero;
  somatorioTudo++;
});

document.querySelector('.xTudoSub').addEventListener('click', function(){
  // soma no lanche
  var numero = parseInt(contadorxTudo.textContent) - 1; 
  contadorxTudo.textContent = numero;
  somatorioTudo--;
});

}calcularTudo();

function calcularFrango(){
//TODAS AS FUNCOES DE SOMA E SUBTRAÇÃO DO X Frango
document.querySelector('.xFrangoSoma').addEventListener('click', function(){
  // soma no lanche
  var numero = parseInt(contadorxFrango.textContent) + 1; 
  contadorxFrango.textContent = numero;
  somatorioFrango++;
});

document.querySelector('.xFrangoSub').addEventListener('click', function(){
  // soma no lanche
  var numero = parseInt(contadorxFrango.textContent) - 1; 
  contadorxFrango.textContent = numero;
  somatorioFrango--;
});
}calcularFrango()

function calcularBacon(){
//TODAS AS FUNCOES DE SOMA E SUBTRAÇÃO DO X Bacon
document.querySelector('.xBaconSoma').addEventListener('click', function(){
  // soma no lanche
  var numero = parseInt(contadorxBacon.textContent) + 1; 
  contadorxBacon.textContent = numero;
  somatorioBacon++;
});

document.querySelector('.xBaconSub').addEventListener('click', function(){
  // soma no lanche
  var numero = parseInt(contadorxBacon.textContent) - 1; 
  contadorxBacon.textContent = numero;
  somatorioBacon--;
});
} calcularBacon()

function calcularEgg(){
//TODAS AS FUNCOES DE SOMA E SUBTRAÇÃO DO X EGG
document.querySelector('.xEggSoma').addEventListener('click', function(){
  // soma no lanche
  var numero = parseInt(contadorxEgg.textContent) + 1; 
  contadorxEgg.textContent = numero;
  somatorioEgg++;
});

document.querySelector('.xEggSub').addEventListener('click', function(){
  // soma no lanche
  var numero = parseInt(contadorxEgg.textContent) - 1; 
  contadorxEgg.textContent = numero;
  somatorioEgg--;
});
}calcularEgg();

function calcularInfantil(){
//TODAS AS FUNCOES DE SOMA E SUBTRAÇÃO DO X Infantil
document.querySelector('.xInfantilSoma').addEventListener('click', function(){
  // soma no lanche
  var numero = parseInt(contadorxInfantil.textContent) + 1; 
  contadorxInfantil.textContent = numero;
  somatorioInfantil++;
});

document.querySelector('.xInfantilSub').addEventListener('click', function(){
  // soma no lanche
  var numero = parseInt(contadorxInfantil.textContent) - 1; 
  contadorxInfantil.textContent = numero;
  somatorioInfantil--;
});
}calcularInfantil();

function calcularHanburguer(){
//TODAS AS FUNCOES DE SOMA E SUBTRAÇÃO DO  Hamburguer
document.querySelector('.hamburguerSoma').addEventListener('click', function(){
  // soma no lanche
  var numero = parseInt(contadorHamburguer.textContent) + 1; 
  contadorHamburguer.textContent = numero;
  somatorioHamburguer++;
});

document.querySelector('.hamburguerSub').addEventListener('click', function(){
  // soma no lanche
  var numero = parseInt(contadorHamburguer.textContent) - 1; 
  contadorHamburguer.textContent = numero;
  somatorioHamburguer--;
});
}calcularHanburguer();

//RANKEADOR RANKEADOR RANKEADOR
document.querySelector('.fechar-btn').addEventListener('click', function(){

 totalCaipiraDuplo += somatorioCaipiraDuplo;
 totalTudoDuplo += somatorioTudoDuplo;
 totalCaipira += somatorioCaipira;
 totalTudo += somatorioTudo;
 totalFrango += somatorioFrango;
 totalBacon += somatorioBacon;
 totalEgg += somatorioEgg;
 totalInfantil += somatorioInfantil;
 totalHamburguer += somatorioHamburguer;


var rankeador = [ totalCaipiraDuplo, totalTudoDuplo, totalCaipira, totalTudo, totalFrango, totalBacon, totalEgg, totalInfantil, totalHamburguer];

function compararNumeros(a, b) {
  return a - b;
};

var rankeadorPronto = rankeador.sort(compararNumeros);
var meuArrayInvertido = rankeadorPronto.slice(0).reverse();
console.log(meuArrayInvertido);


if(somatorioCaipiraDuplo >=1) {
  let keyCaipiraDuplo = somatorioCaipiraDuplo;
  localStorage.setItem(keyCaipiraDuplo, 'X-Caipira Duplo');
};
if(somatorioTudoDuplo  >=1) {
  let keyTudoDuplo = somatorioTudoDuplo ;
  localStorage.setItem(keyTudoDuplo, 'X-Tudo Duplo');
};
if(somatorioCaipira>=1) {
  let keyCaipira = somatorioCaipira ;
  localStorage.setItem(keyCaipira, 'X-Caipira');
};
if(somatorioTudo>=1) {
  let keyTudo = somatorioTudo;
  localStorage.setItem(keyTudo, 'X-Tudo');
};
if(somatorioFrango>=1) {
  let keyFrango = somatorioFrango;
  localStorage.setItem(keyFrango, 'X-Frango');
};
if(somatorioBacon>=1) {
  let keyBacon = somatorioBacon;
  localStorage.setItem(keyBacon, 'X-Bacon');
};
if(somatorioEgg>=1) {
  let keyEgg = somatorioEgg;
  localStorage.setItem(keyEgg, 'X-Egg');
};
if(somatorioInfantil>=1) {
  let keyInfantil = somatorioInfantil ;
  localStorage.setItem(keyInfantil, 'X-Infantil');
};
if(somatorioHamburguer>=1) {
  let keyHamburguer = somatorioHamburguer;
  localStorage.setItem(keyHamburguer, 'X-Hamburguer');
};

 somatorioCaipiraDuplo = 0;
 somatorioTudoDuplo = 0;
 somatorioCaipira = 0;
 somatorioTudo = 0;
 somatorioFrango = 0;
 somatorioBacon = 0;
 somatorioEgg = 0;
 somatorioInfantil = 0;
 somatorioHamburguer = 0;

 document.querySelector(".number-1").innerHTML = totalCaipiraDuplo;
 document.querySelector(".number-2").innerHTML = totalCaipira;
 document.querySelector(".number-3").innerHTML = totalTudoDuplo;
 document.querySelector(".number-4").innerHTML = totalTudo;
 document.querySelector(".number-5").innerHTML = totalBacon;
 document.querySelector(".number-6").innerHTML = totalFrango;
 document.querySelector(".number-7").innerHTML = totalEgg;
 document.querySelector(".number-8").innerHTML = totalInfantil;
 document.querySelector(".number-9").innerHTML = totalHamburguer;
});

/*MOSTRAR RANKING OU NAO*/
document.querySelector('.ran-on').addEventListener('click', function(){
  const liberarRanking = document.querySelector('.ranking');
  liberarRanking.classList.toggle('desativado');
});

document.querySelector('.reset').addEventListener('click', function(){
  localStorage.clear();
});
