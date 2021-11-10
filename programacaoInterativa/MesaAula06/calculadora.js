//2
function adicionar(a,b){
    return a+b;
}

//3
function subtracao(a,b){
    return a-b;
}

//4
function multiplicacao(a,b){
    return a*b;
}

//5
function divisao(a,b){
    return a/b;
}

//extra1
function quadradoDoNumero(a){
    return multiplicacao(a,a);
}

//extra2
function mediaDeTresNumeros(a,b,c){
    let soma1=adicionar(a,b);
    let soma2=adicionar(soma1,c);
    let media=soma2/3;
    return media;
}

//extra3
function calculaPorcentagem(a,b){
    let div=divisao(b,100);
    let total=multiplicacao(div,a);
    return total;
}

//extra4
function geradorDePorcentagem(a,b){
    peso=divisao(a,b);
    total=multiplicacao(peso,100);
    return total;

}


console.log("----------Teste de Operações/Caculadora----------");

console.log("Soma: ",adicionar(5,5));

console.log("Subtração: ",subtracao(5,5));

console.log("Multiplicaçã: ",multiplicacao(5,5));

console.log("Divisão: ",divisao(5,5));

console.log("Divisão: ",divisao(0,5));

console.log("Quadrado: ",quadradoDoNumero(2));

console.log("Média de 3: ",mediaDeTresNumeros(10,15,5));

console.log("Porcentagem: ",calculaPorcentagem(300,15));

console.log("Porcentagem relacionada: ",geradorDePorcentagem(2,200));