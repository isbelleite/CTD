//1
function ConverPoltoCent(polegada){
    centimetro= (polegada*2,54);
    console.log(centimetro);
}

ConverPoltoCent(4);

//2

function ConverString(nome){
    web="http://www."+nome+".com.br";
    console.log(web);
}

ConverString("funcaojs");

//3

function ConverExclam(nome){
    frase=nome+"!";
    console.log(frase);
}

ConverExclam("Opa");

//4

function ConverIdade(idade){
    idog=idade*7;
    console.log(idog);
}

ConverIdade(7);

//5

function ValorHora(salario){
    hora=salario/160;
    console.log(hora);
}

ValorHora(3000);

//6

function IMC(altura, peso){
    imc=peso/(altura/100*altura/100);
    console.log(imc);
}

IMC(170, 60);

//7

function Maiuscula(nome){
    console.log(nome.toUpperCase());
}

Maiuscula("nome");
