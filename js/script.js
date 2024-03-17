console.log('Mastermind');
//function utility
/**Milestone 1
Generare un array di 4 numeri univoci compresi fra 1 e 9 */

function generaNumeri(){
    const max = 9;
    const numbers = 4;

    const numberArray =[];

    while(numberArray.length < numbers){
        const numeriUnivoci = Math.floor(Math.random() * max);

        let numeroPresente = false;

        for(let i = 0; i < numberArray.length; i++){
            if(numberArray[i] === numeriUnivoci){
                numeroPresente = true;
            }
        }

        if(numeroPresente === false){
            numberArray.push(numeriUnivoci);
        }
    }

    return numberArray;
}

//console.log(generaNumeri())

/**Milestone 2
Leggere l'input inserito dall'utente e trasformarlo in 4 numeri interi */


function convertStringToNumberArray(numberstring){
    let userNumber = [];

    for(let i = 0; i < numberstring.length; i++){

        userNumber.push(parseInt(numberstring[i]));
    }
    
    return userNumber;
}


let pcNumber = generaNumeri();

console.log(pcNumber);

/**Milestone 3
Verificare se i singoli valori sono presenti nell'array dei numeri generati dal PC
 */

const submitDomElement = document.querySelector('.submit');

submitDomElement.addEventListener('click',function(){

    let userDomNumber = document.querySelector('.input').value;
    
    userDomNumber = convertStringToNumberArray(userDomNumber);

    console.log(userDomNumber)

    for(let i = 0; i < userDomNumber.length; i++){
        const presentIndex = pcNumber.indexOf(userDomNumber[i])
        if(presentIndex !== -1){
        if(presentIndex === i){
            console.log('x')
        }else{
            console.log('O')
        }
        }
    }

    

})

