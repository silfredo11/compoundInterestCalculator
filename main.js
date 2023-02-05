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
let numberTime1;
let time;

submitBtn.addEventListener('click',() => {
     investment =  Number(initialCapitalInput.value);
     investment =  Number(initialCapitalInput.value);
     periOfTime =  periodOfTimeInput.value;
     interestRate =  Number(interestRateInput.value);
     numberTime1 =  Number(timeFrameInput.value);
});

let initialCapital;
let timeFrame; 
let interestR;
let numberTime;

submitBtn.addEventListener('click', () => {

     if(!investment || !periOfTime || !interestRate || !numberTime1){

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
                 if(!numberTime1){
          
                    timeFrameInput.classList.add('tyError');
                    errorMsgTimeFrame.classList.add('errorTypeMessage4');
          
               }
              } else{
          
               initialCapital = Number(initialCapitalInput.value) ;
               timeFrame = periodOfTimeInput.value;
               interestR = Number(interestRateInput.value) / 100;
               numberTime = Number(timeFrameInput.value);
          
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

function addThousandsSeparator(number) {
     let partsNumber = number.toString().split('.');
 
     partsNumber[0] = partsNumber[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
 
     return partsNumber.join('.');
}

// Here start the form code

function calculatingCI(){
     

     let endingBalance;
     let noDecimals;
     let profi; 
     let noDecimalsProfi; 
     let numberTimeLoop;
     let inputInterestRateLoop;

     switch (timeFrame){
          case 'Y':

               time = 1;
               numberTimeLoop = numberTime * time;
               endingBalance =  initialCapital * (1 + (interestR / time))**(time * numberTime);
               noDecimals = endingBalance.toFixed(2);
               profi = noDecimals - initialCapital;
               noDecimalsProfi = profi.toFixed(2);
               inputInterestRateLoop = interestRateInput.value / time;
               
               answerParagraph.innerText = `El monto final después de ${numberTime} años con una tasa de interés del ${interestR * 100} % anual es de ${addThousandsSeparator(noDecimals) }, de los cuales, ${ addThousandsSeparator(initialCapital) } pertenecen al saldo inicial y ${addThousandsSeparator(noDecimalsProfi) } pertenecen a las ganancias generadas. `;

               tabletSonTitle.innerText = 'Años';

          break;

          case 'S':

               time = 2;
               numberTimeLoop = numberTime * time;
               endingBalance =  initialCapital * (1 + (interestR / 2))**(2 * numberTime);
               noDecimals = endingBalance.toFixed(2);
               profi = noDecimals - initialCapital;
               noDecimalsProfi = profi.toFixed(2);
               inputInterestRateLoop = interestRateInput.value / time;
               
               answerParagraph.innerText = `El monto final después de ${numberTime * 2} semestres con una tasa de interés del ${interestR * 100} % anual es de ${addThousandsSeparator(noDecimals) }, de los cuales, ${ addThousandsSeparator(initialCapital) } pertenecen al saldo inicial y ${addThousandsSeparator(noDecimalsProfi) } pertenecen a las ganancias generadas. `;
               
               tabletSonTitle.innerText = 'Semestres';
          break;
               
          case 'T':
               time = 4;
               numberTimeLoop = numberTime * time;
               endingBalance =  initialCapital * (1 + (interestR / 4))**(4 * numberTime);
               noDecimals = endingBalance.toFixed(2);
               profi = noDecimals - initialCapital;
               noDecimalsProfi = profi.toFixed(2);
               inputInterestRateLoop = interestRateInput.value / time;
               
               answerParagraph.innerText = `El monto final después de ${numberTime * 4} trimestres con una tasa de interés del ${interestR * 100} % anual es de ${addThousandsSeparator(noDecimals) }, de los cuales, ${ addThousandsSeparator(initialCapital) } pertenecen al saldo inicial y ${addThousandsSeparator(noDecimalsProfi) } pertenecen a las ganancias generadas. `;

               tabletSonTitle.innerText = 'Trimestres';
          break;

          case 'M':
               time = 12;
               numberTimeLoop = numberTime * time;
               endingBalance =  initialCapital * (1 + (interestR / 12))**(12 * numberTime);

               noDecimals = endingBalance.toFixed(2);
               profi = noDecimals - initialCapital;
               noDecimalsProfi = profi.toFixed(2);
               inputInterestRateLoop = interestRateInput.value / time;
               
               answerParagraph.innerText = `El monto final después de ${numberTime * 12} meses con una tasa de interés del ${interestR * 100} % anual es de ${addThousandsSeparator(noDecimals) }, de los cuales, ${ addThousandsSeparator(initialCapital) } pertenecen al saldo inicial y ${addThousandsSeparator(noDecimalsProfi) } pertenecen a las ganancias generadas. `;

               tabletSonTitle.innerText = 'Meses';
          break;

          case 'W':
               time = 52;
               numberTimeLoop = numberTime * time;
               endingBalance =  initialCapital * (1 + (interestR / 52))**(52 * numberTime);
               noDecimals = endingBalance.toFixed(2);
               profi = noDecimals - initialCapital;
               noDecimalsProfi = profi.toFixed(2);
               inputInterestRateLoop = interestRateInput.value / time;
               
               answerParagraph.innerText = `El monto final después de ${numberTime * 52} semanas con una tasa de interés del ${interestR * 100} % anual es de ${addThousandsSeparator(noDecimals) }, de los cuales, ${ addThousandsSeparator(initialCapital) } pertenecen al saldo inicial y ${addThousandsSeparator(noDecimalsProfi) } pertenecen a las ganancias generadas. `;

               tabletSonTitle.innerText = 'Semanas';
          break;

          case 'D':
               time = 365;
               numberTimeLoop = numberTime * time;
               endingBalance =  initialCapital * (1 + (interestR / 65))**(65 * numberTime);

               noDecimals = endingBalance.toFixed(2);
               profi = noDecimals - initialCapital;
               noDecimalsProfi = profi.toFixed(2);
               inputInterestRateLoop = interestRateInput.value / time;
               
               answerParagraph.innerText = `El monto final después de ${numberTime * 365} dias con una tasa de interés del ${interestR * 100} % anual es de ${addThousandsSeparator(noDecimals) }, de los cuales, ${ addThousandsSeparator(initialCapital) } pertenecen al saldo inicial y ${addThousandsSeparator(noDecimalsProfi) } pertenecen a las ganancias generadas. `;

               tabletSonTitle.innerText = 'Dias';
          break;

          default: 
          
     }

     let capitalfirstLoop = initialCapital;
     let profiLoop = []
     let initialCapitalLoop = [initialCapital,];

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



