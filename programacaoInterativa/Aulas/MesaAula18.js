//1
function loopDePares(num){
    for(let i=0;i<=100;i++){
        if((i+num)%2==0){
            console.log("O número ",(i+num)," é par");
        }else{
            console.log(i+num);
        }  
    }
}

loopDePares(2);

//2
function loopDeImpares(num, palavra){
    for(let i=0;i<=100;i++){
        if((i+num)%2!=0){
            console.log(palavra);
        }else{
            console.log(i+num);
        }  
    }
}

loopDeImpares(2, "palavra");

//3

function soma(num){
    somatorio=0;
    for(let i=num;i>0;i--){
        somatorio=somatorio+i;
    }
    console.log(somatorio);
}

soma(8);

//4
