console.log('Mastermind');
//function utility
function generaNumeri(){
    const max = 9;
    const numbers = 4;

    const numberArray =[];

    while(numberArray.length < numbers){
        const numeriUnivoci = Math.floor(Math.random() * max);

        let numeroPresente = false;

        for(let i = 0; i < numberArray.length; i++){
            if(numberArray[i] === numeriUnivoci){
                numeroPresente = true
            }
        }

        if(numeroPresente === false){
            numberArray.push(numeriUnivoci);
        }
    }

    

    return numberArray;
}


