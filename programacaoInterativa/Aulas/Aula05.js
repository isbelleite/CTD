function somar(a,b){

    console.log("dentro da function");
    return (a+b);
}
console.log( somar(10,5));

function nomePessoa(nome, idade){
    return nome+" tem a idade de "+idade;
}
console.log( nomePessoa("Marcos", 25));
console.log( nomePessoa("João", 30));

let sub= function(x,y){
    console.log(x-y);
}

sub(10,5);
console.log(Math.random());