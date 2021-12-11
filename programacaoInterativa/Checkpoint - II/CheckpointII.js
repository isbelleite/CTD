/*
//1
function soletrar(texto){
    console.log(texto.replace('-','').toLocaleUpperCase().split("").join("-"));
}
soletrar("digital-house");
soletrar("ctd");

//2

var z=0;
for (var i=20;i<50;i+=10){
    z+=i;
}
console.log(z);

//5
let frutasAmarelas=['Melão','Mamão','Limão'];
let [fruta1, fruta2, fruta3]= frutasAmarelas;

console.log(fruta1);
console.log(fruta2);
console.log(fruta3);
console.log(frutasAmarelas);

//6
if(8>=10){
    console.log("verdadeiro");
}
console.log("teste");
 
//7
let numeros=[10,8,7,99,0,1,6];

numeros.sort(function(a,b){
    return b-a;
})
console.log(numeros);

//9
let frutasAmarelas=['Melão', 'Mamão', 'Limão siciliano'];
let frutasVermelhas=['Morango', 'Cereja', 'Maça red'];
let frutasVerdes=['Limão', 'Kiwi', 'Maça verde'];

frutasVermelhas1=frutasVermelhas.map(fruta => fruta.toUpeerCase());
let todasFrutas=[...frutasAmarelas,...frutasVermelhas1,...frutasVerdes];
console.log(todasFrutas);

//11
let x=5;
let y=x++ + ++x;
console.log("y= "+y);
x=3;
y=x*(x+1)*x++;
x=5;
y=3;
y*=x+1
console.log("x= "+x);
console.log("y= "+y);

//14
function soma(a=1,b=3){
    return a+b;
}
console.log(soma());
console.log(soma(3));
console.log(soma(1,2));

//15
let x=50;
let resto=50%2;
resposta = resto==0? 'Par':'Impar';
console.log(resposta);

//17
let valor=5;
let fatorial=1;
for (let i=valor;i>1;i--){
    fatorial*=i;
}
console.log("Fatorial = "+fatorial);
*/
//18
for (var i=0;i<50;i+=10){
    console.log(i);
}
console.log(i);