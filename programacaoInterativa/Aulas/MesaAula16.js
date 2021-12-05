/*
function FizzBuzz(a,b){
    for (let i=1;i<=100;i++){
        if(i%a==0){
            console.log("Fizz");
        }else if(i%b==0){
            console.log("Buzz");
        }else if(i%a==0 && i%b==0){
            console.log("FizzBuzz");
        }else{
            console.log(i);
        }
            
    }
}

FizzBuzz(2,6);
*/

function multiploN1(){
    return 'Fizz';
}

function multiplosN2(){
    return 'Buzz';
}


let fizzBuzz = (n1, n2) => {
  for (let i = 1; i <= 100; i++) {
    if (i % n1 == 0 && i % n2 == 0) {
      console.log(multiploN1() + ' ' +  multiplosN2());
    } else if (i % n1 == 0) {
      console.log(multiploN1());
    } else if (i % n2 == 0) {
      console.log(multiplosN2());
    } else {
      console.log(i);
    }
  }
}

console.log(fizzBuzz(5, 7));