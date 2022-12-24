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

let initialCapital;
let timeFrame; 
let interestR;
let numberTime;

function toggleAnswer(){

    const investment =  Number(inputID.value);
    const periOfTime =  inputperiOfTime.value;
    const interestRate =  Number(inputInterestRate.value);
    const numberTime1 =  Number(inputTimeFrame.value);

    if(!investment || !periOfTime || !interestRate || !numberTime1){

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
       if(!numberTime1){

            inputTimeFrame.classList.add('tyError');
            input4ErrorTypeMessage.classList.add('errorTypeMessage4');

       }
    } else{

     initialCapital = Number(inputID.value) ;
     timeFrame = inputperiOfTime.value;
     interestR = Number(inputInterestRate.value) / 100;
     numberTime = Number(inputTimeFrame.value);

     loader.classList.toggle('animation');
     loaderSon1.classList.toggle('animationSon');
     loaderSon2.classList.toggle('animationSon');
     loaderSon3.classList.toggle('animationSon');
     ans.classList.toggle('visualize');
     main.classList.toggle('display');

          calculatingCI();
     }

}

function removeVisualize() {

    ans.classList.remove('visualize');
    main.classList.remove('display');

}

// Here start the form code



function calculatingCI(){
     

     let endingBalance;

     switch (timeFrame){
          case 'Y':

               endingBalance =  initialCapital * (1 + (interestR / 1))**(1 * numberTime);

               

          break;

          case 'S':

               endingBalance =  initialCapital * (1 + (interestR / 2))**(2 * numberTime);

               

          break;
               
          case 'T':
               
               endingBalance =  initialCapital * (1 + (interestR / 4))**(4 * numberTime);

               

          break;

          case 'M':
              
               endingBalance =  initialCapital * (1 + (interestR / 12))**(12 * numberTime);

               

          break;

          case 'W':

               endingBalance =  initialCapital * (1 + (interestR / 52))**(52 * numberTime);

               

          break;

          case 'D':

               endingBalance =  initialCapital * (1 + (interestR / 65))**(65 * numberTime);

               
          break;

          default: 
          
     }

     
}



