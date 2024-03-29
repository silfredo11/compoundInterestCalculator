import{addThousandsSeparator} from "./function.js"

const submitBtn = document.querySelector('#button');
const anotherBtn = document.querySelector('#button2');
const resultSection = document.querySelector('.answer');
const loader = document.querySelector('.loader');
const loaderSon1 = document.querySelector('.loader__son1');
const loaderSon2 = document.querySelector('.loader__son2');
const loaderSon3 = document.querySelector('.loader__son3');
const mainContent = document.querySelector('#main');
const headerIcont = document.querySelector('.header__img');
// Here start the form code
const initialCapitalInput = document.querySelector('#InitialCapital');
const periodOfTimeInput = document.querySelector('#periOfTime');
const interestRateInput = document.querySelector('#interestRate');
const timeFrameInput = document.querySelector('#timeFrame');
// Here start the form code
// Error code
const errorMsgInitialCapital = document.querySelector('#errorTypeMessage_InitialCapital');
const errorMsgPeriodOfTime = document.querySelector('#errorTypeMessage_periOfTime');
const errorMsgInterestRate = document.querySelector('#errorTypeMessage_interestRate');
const errorMsgTimeFrame = document.querySelector('#errorTypeMessage_timeFrame');
// Error code
// Code to make HTML from JavaScript //
const answerParagraph = document.querySelector('.result__p');
// Code to make HTML from JavaScript //
const tabletYear = document.querySelector('.table__year');
const tabletInitialAmount = document.querySelector('.table__initialAmount');
const tabletInterestRate = document.querySelector('.table__interestRate');
const tabletProfits = document.querySelector('.table__profits');
const tabletEndingBalance = document.querySelector('.table__endingBalance');
const tabletSonTitle = document.querySelector('.table__son--title');

let investment;
let periOfTime;
let interestRate;
let numberTime;
let time;

submitBtn.addEventListener('click',() => {
     investment =  Number(initialCapitalInput.value);
     periOfTime =  periodOfTimeInput.value;
     interestRate =  Number(interestRateInput.value);
     numberTime =  Number(timeFrameInput.value);
});

let interestR;


submitBtn.addEventListener('click', () => {

     if(!investment || !periOfTime || !interestRate || !numberTime){

               if(!investment){
          
                    initialCapitalInput.classList.add('tyError');
                    errorMsgInitialCapital.classList.add('errorTypeMessage1');
                      
               }
                 if(!periOfTime){
          
                    periodOfTimeInput.classList.add('tyError');
                    errorMsgPeriodOfTime.classList.add('errorTypeMessage2');
          
               }
                 if(!interestRate){
          
                    interestRateInput.classList.add('tyError');
                    errorMsgInterestRate.classList.add('errorTypeMessage3');
          
               }
                 if(!numberTime){
          
                    timeFrameInput.classList.add('tyError');
                    errorMsgTimeFrame.classList.add('errorTypeMessage4');
          
               }
              } else{
          
               interestR = Number(interestRateInput.value) / 100;
                 
               loader.classList.toggle('animation');
               loaderSon1.classList.toggle('animationSon');
               loaderSon2.classList.toggle('animationSon');
               loaderSon3.classList.toggle('animationSon');
               resultSection.classList.toggle('visualize');
               mainContent.classList.toggle('display');
          
               calculatingCI();
          }
     
});

headerIcont.addEventListener('click', removeVisualize);
anotherBtn.addEventListener('click', removeVisualize);

function removeVisualize() {

     resultSection.classList.remove('visualize');
     mainContent.classList.remove('display');
    location.reload();

}

let endingBalance;
let noDecimals;
let profi; 
let noDecimalsProfi; 
let numberTimeLoop;
let inputInterestRateLoop;

const compountInteresFormula = (time, periodofTime) => {
     numberTimeLoop = numberTime * time;
     endingBalance =  investment * (1 + (interestR / time))**(time * numberTime);
     noDecimals = endingBalance.toFixed(2);
     profi = noDecimals - investment;
     noDecimalsProfi = profi.toFixed(2);
     inputInterestRateLoop = interestRateInput.value / time;
 
     answerParagraph.innerText = `El monto final después de ${numberTime} años con una tasa de interés del ${interestR * 100} % anual es de ${addThousandsSeparator(noDecimals) }, de los cuales, ${ addThousandsSeparator(investment) } pertenecen al saldo inicial y ${addThousandsSeparator(noDecimalsProfi) } pertenecen a las ganancias generadas. `;
 
     tabletSonTitle.innerText = periodofTime;
} 

function calculatingCI(){

     switch (periOfTime){
          case 'Y':

               compountInteresFormula(1, "Años");

          break;

          case 'S':
               compountInteresFormula(2, "Semestres");
          break;
               
          case 'T':
               compountInteresFormula(4, "Trimestres");
          break;

          case 'M':
               compountInteresFormula(12, "Meses");
          break;

          case 'W':
               compountInteresFormula(52, "Semanas");
          break;

          case 'D':
               compountInteresFormula(365, "Semanas");
          break;

          default: 
          
     }

     let capitalfirstLoop = investment;
     let profiLoop = []
     let initialCapitalLoop = [investment];

     for (let i = 1; i <=numberTimeLoop  ; i++) {
          
          let profitIntoLoop = capitalfirstLoop * (inputInterestRateLoop / 100);
          profiLoop.push(profitIntoLoop);

          let initialCapitalIntoLoop = capitalfirstLoop + profitIntoLoop;
          initialCapitalLoop.push(initialCapitalIntoLoop);

          capitalfirstLoop = capitalfirstLoop + profitIntoLoop;
     }


     for (let i = 0; i < numberTimeLoop ; i++) {

          let endingBalanceLoop = initialCapitalLoop[i] + profiLoop[i];

          const tableSonYears = document.createElement('p');
          tableSonYears.classList.add('table__son--conten');
          tableSonYears.innerText = `${i + 1}`;
          tabletYear.appendChild(tableSonYears);

          const tableSonInitialAmount = document.createElement('p');
          tableSonInitialAmount.classList.add('table__son--conten');
          tableSonInitialAmount.innerText = addThousandsSeparator(initialCapitalLoop[i].toFixed(2)) ;
          tabletInitialAmount.appendChild(tableSonInitialAmount);

          const tableSonInterestRate = document.createElement('p');
          tableSonInterestRate.classList.add('table__son--conten');
          tableSonInterestRate.innerText = `${inputInterestRateLoop.toFixed(5)}%` ;
          tabletInterestRate.appendChild(tableSonInterestRate);

          const tableSonProfits = document.createElement('p');
          tableSonProfits.classList.add('table__son--conten');
          tableSonProfits.innerText = addThousandsSeparator(profiLoop[i].toFixed(2)) ;
          tabletProfits.appendChild(tableSonProfits);

          const tableSonEndingBalance = document.createElement('p');
          tableSonEndingBalance.classList.add('table__son--conten');
          tableSonEndingBalance.innerText = addThousandsSeparator(endingBalanceLoop.toFixed(2)) ;
          tabletEndingBalance.appendChild(tableSonEndingBalance);

     }
}



