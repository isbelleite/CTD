/* 1

let altura =0;
let acompanhante=0;

function podeSubir(altura, acompanhante){
    if (altura>=1.4 && altura<2){
        return true;
    }
    else if (altura<1.4 && altura>1.2 && acompanhante==true){
        return true;
    }else if (altura<1.2){
        return false;
    }else
        return false;
}

console.log(podeSubir(1.1,true));

*/

let altura =0;
let acompanhante=0;

function podeSubir(altura, acompanhante){
    if (altura>=1.4 && altura<2){
        autorizacao="Acesso autorizado";
        return autorizacao;
    }
    else if (altura<1.4 && altura>1.2 && acompanhante==true){
        autorizacao="Acesso autorizado somente com acompanhante";
        return autorizacao;
    }else if (altura<1.2){
        autorizacao="Acesso negado";
        return autorizacao;
    }else
        autorizacao="Acesso negado";
        return autorizacao;
}

console.log(podeSubir(2,true));

