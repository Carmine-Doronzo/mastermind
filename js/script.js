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

let divDomElement = document.querySelector('.mastermind')

submitDomElement.addEventListener('click',function(){

    divDomElement.innerHTML = '';

    let userDomNumber = document.querySelector('.input').value;
    
    userDomNumber = convertStringToNumberArray(userDomNumber);

    

    console.log(userDomNumber)

    for(let i = 0; i < userDomNumber.length; i++){
        const presentIndex = pcNumber.indexOf(userDomNumber[i])
          
        
        if(presentIndex !== -1){
            if(presentIndex === i){

                divDomElement.innerHTML +=`x`
                console.log('x')
                console.log(divDomElement.innerHTML)
               
            }else{
                divDomElement.innerHTML +=`O`
                console.log('O')
                console.log(divDomElement.innerHTML)
            }
        } 
        if(divDomElement.innerHTML === `xxxx`){
            divDomElement.innerHTML = `hai vinto`

        }
       
    }

    

   

})

/**Milestone 4
Rispondere con una stringa composta da O e X dove O corrisponde ad un numero giusto al posto sbagliato e X corrisponde al numero giusto al posto giusto */



