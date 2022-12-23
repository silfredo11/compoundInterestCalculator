const btn = document.querySelector('#button');
const ans = document.querySelector('.answer');
const loader = document.querySelector('.loader');
const loaderSon1 = document.querySelector('.loader__son1');
const loaderSon2 = document.querySelector('.loader__son2');
const loaderSon3 = document.querySelector('.loader__son3');
const main = document.querySelector('#main');
const x = document.querySelector('.header__img');

// Here start the form code

const inputID = document.querySelector('#InitialCapital');
const inputperiOfTime = document.querySelector('#periOfTime');
const inputInterestRate = document.querySelector('#interestRate');
const inputTimeFrame = document.querySelector('#timeFrame');

// Error code

const input1ErrorTypeMessage = document.querySelector('#errorTypeMessage_InitialCapital');
const input2ErrorTypeMessage = document.querySelector('#errorTypeMessage_periOfTime');
const input3ErrorTypeMessage = document.querySelector('#errorTypeMessage_interestRate');
const input4ErrorTypeMessage = document.querySelector('#errorTypeMessage_timeFrame');

btn.addEventListener('click',toggleAnswer);
x.addEventListener('click', removeVisualize);

function toggleAnswer(){

    const investment =  Number(inputID.value);
    const periOfTime =  inputperiOfTime.value;
    const interestRate =  Number(inputInterestRate.value);
    const timeFrame =  Number(inputTimeFrame.value);

    if(!investment || !periOfTime || !interestRate || !timeFrame){

       if(!investment){

            inputID.classList.add('tyError');
            input1ErrorTypeMessage.classList.add('errorTypeMessage1');
            
       }
       if(!periOfTime){

            inputperiOfTime.classList.add('tyError');
            input2ErrorTypeMessage.classList.add('errorTypeMessage2');

       }
       if(!interestRate){

            inputInterestRate.classList.add('tyError');
            input3ErrorTypeMessage.classList.add('errorTypeMessage3');

       }
       if(!timeFrame){

            inputTimeFrame.classList.add('tyError');
            input4ErrorTypeMessage.classList.add('errorTypeMessage4');

       }
    } else{
        loader.classList.toggle('animation');
        loaderSon1.classList.toggle('animationSon');
        loaderSon2.classList.toggle('animationSon');
        loaderSon3.classList.toggle('animationSon');
        ans.classList.toggle('visualize');
        main.classList.toggle('display');
     }

}

function removeVisualize() {

    ans.classList.remove('visualize');
    main.classList.remove('display');

}

// Here start the form code



function calculatingCI(nuumero){
     
     const initialCapital = Number(inputID.value) ;
     const timeFrame = inputperiOfTime.value;
     const interestR = Number(inputInterestRate.value);
     const numberTime = Number(inputTimeFrame.value);
 

     switch (timeFrame){
          case 'Y':

          break;

          case 'S':
          
          break;

          case 'T':
               
          break;

          case 'M':
               
          break;

          case 'W':
               
          break;

          case 'D':
               
          break;

          default: 
          
     }

 
}






// const nuevoNumero = 4 * inputID.value;

// console.log(`Hola mario este es el numero ${nuevoNumero}`);