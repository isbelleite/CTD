/*
let prato, tempo;

function esquentarComida(prato, tempo){
    switch (prato){
        case "Pipoca":
            if(tempo>3*10){
                console.log("KABUMM!!");
            }else if(tempo>2*10 && tempo<=3*10){
                console.log("A comida queimou");
            }else if(tempo<10){
                console.log("Tempo insuficiente");
            }else {
                console.log("Prato pronto, bom apetite!!!");
            }
            break;
            case "Macarrão":
            if(tempo>3*8){
                console.log("KABUMM!!");
            }else if(tempo>2*8 && tempo<=3*8){
                console.log("A comida queimou");
            }else if(tempo<8){
                console.log("Tempo insuficiente");
            }else {
                console.log("Prato pronto, bom apetite!!!");
            }
            break;
            case "Carne":
                if(tempo>3*15){
                    console.log("KABUMM!!");
                }else if(tempo>2*15 && tempo<=3*15){
                    console.log("A comida queimou");
                }else if(tempo<15){
                    console.log("Tempo insuficiente");
                }else {
                    console.log("Prato pronto, bom apetite!!!");
                }
                break;
                case "Feijão":
                if(tempo>3*12){
                    console.log("KABUMM!!");
                }else if(tempo>2*12 && tempo<=3*12){
                    console.log("A comida queimou");
                }else if(tempo<12){
                    console.log("Tempo insuficiente");
                }else {
                    console.log("Prato pronto, bom apetite!!!");
                }
                break;
                case "Brigadeiro":
                    if(tempo>3*8){
                        console.log("KABUMM!!");
                    }else if(tempo>2*8 && tempo<=3*8){
                        console.log("A comida queimou");
                    }else if(tempo<8){
                        console.log("Tempo insuficiente");
                    }else {
                        console.log("Prato pronto, bom apetite!!!");
                    }
                    break;
        default:
            console.log("Prato inexistente");

    }
}

esquentarComida("Carne", 46);
 */

let prato, tempo, tempPipoca=10, tempMacarrao=8, tempCarne=15, tempFeijao=12, tempBrigadeiro=8;

function tempoAquecimento(tempo, tempoPadrao){
    if(tempo>3*tempoPadrao){
        console.log("KABUMM!!");
    }else if(tempo>2*tempoPadrao && tempo<=3*tempoPadrao){
        console.log("A comida queimou");
    }else if(tempo<tempoPadrao){
        console.log("Tempo insuficiente");
    }else {
        console.log("Prato pronto, bom apetite!!!");
    }
}

function esquentarComida(prato, tempo){
    switch (prato){
        case "Pipoca":
            tempoAquecimento(tempo, tempPipoca);
            break;
        case "Macarrão":
        tempoAquecimento(tempo, tempMacarrao);
            break;
        case "Carne":
        tempoAquecimento(tempo, tempCarne);
            break;
        case "Feijão":
        tempoAquecimento(tempo, tempFeijao);
            break;
        case "Brigadeiro":
        tempoAquecimento(tempo, tempBrigadeiro);
            break;
        default:
            console.log("Prato inexistente");

    }
}

esquentarComida("Brigadeiro", 8);