

let nome=["Maria", "Ana", "Joana", "João", "Bruno"];

//A

console.log(nome[0]);
console.log(nome[3]);

//B

nome[0]="Mario";
nome[1]="Ana Júlia";
nome[2]="João";
nome[3]="Joana";
nome[4]="Bruna";
console.log(nome);

//C

nome.push("Isabelle", "Diego");
console.log(nome);

//D

let x=nome.pop();
console.log(nome);
console.log(x);

//E

console.log( nome[0].includes(nome[1]));

//2

//A

let numbers = [22, 33, 54, 66, 72];
console.log(numbers[numbers.length]);

//B

let grupoDeAmigos = [ ["Harry", "Ron", "Hermione"], ["Spiderman", "Hulk", "Ironman"], ["Penélope Glamour", "Pierre Nodoyuna","Patán"] ];
console.log(grupoDeAmigos[1][0]);

//C

let str = "una string qualquer";
let grupoDeAmigos2 = [ [45, 89, 0], ["Digital", "House", true], ["string", "123","false", 54, true, str] ];
console.log(grupoDeAmigos2[2][grupoDeAmigos2[2].length - 1]);

//3

