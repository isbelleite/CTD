1//

let numeros = [1,2,3,4,5];

let total = numeros.reduce(function(acumulador, item) {
    return acumulador+item;
});

let divisao = numeros.map(function(item){
    return item/total;
});

//2
console.log(divisao);

let palavras = ["aaaa", "bbb", "cc", "ddddd"];
let num = 4;
let maiores = idades.filter(function(item, num) {
    return palavras.length()>num;
});

console.log(maiores);

let aluno={
    nome: "joana",
    nota: 9
};
