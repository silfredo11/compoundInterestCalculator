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
// Here start the form code
// Error code
const input1ErrorTypeMessage = document.querySelector('#errorTypeMessage_InitialCapital');
const input2ErrorTypeMessage = document.querySelector('#errorTypeMessage_periOfTime');
const input3ErrorTypeMessage = document.querySelector('#errorTypeMessage_interestRate');
const input4ErrorTypeMessage = document.querySelector('#errorTypeMessage_timeFrame');
// Error code
// Code to make HTML from JavaScript //
const answerP = document.querySelector('.result__p');
// Code to make HTML from JavaScript //
const tabletYear = document.querySelector('.table__year');
const tabletInitialAmount = document.querySelector('.table__initialAmount');
const tabletInterestRate = document.querySelector('.table__interestRate');
const tabletProfits = document.querySelector('.table__profits');
const tabletEndingBalance = document.querySelector('.table__endingBalance');
const tabletSonTitle = document.querySelector('.table__son--title');

btn.addEventListener('click',saveDatas);

let investment;
let periOfTime;
let interestRate;
let numberTime1;
let time;

function saveDatas(){
     investment =  Number(inputID.value);
     periOfTime =  inputperiOfTime.value;
     interestRate =  Number(inputInterestRate.value);
     numberTime1 =  Number(inputTimeFrame.value);

    
}
btn.addEventListener('click',toggleAnswer);
x.addEventListener('click', removeVisualize);

let initialCapital;
let timeFrame; 
let interestR;
let numberTime;



function toggleAnswer(){

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
               inputInterestRateLoop = inputInterestRate.value / time;
               
               answerP.innerText = `El monto final después de ${numberTime} años con una tasa de interés del ${interestR * 100} % anual es de ${noDecimals}, de los cuales, ${initialCapital} pertenecen al saldo inicial y ${noDecimalsProfi} pertenecen a las ganancias generadas. `;

               tabletSonTitle.innerText = 'Años';

               alert('Creo que funcionara');

          break;

          case 'S':

               time = 2;
               numberTimeLoop = numberTime * time;
               endingBalance =  initialCapital * (1 + (interestR / 2))**(2 * numberTime);
               noDecimals = endingBalance.toFixed(2);
               profi = noDecimals - initialCapital;
               noDecimalsProfi = profi.toFixed(2);
               inputInterestRateLoop = inputInterestRate.value / time;
               
               answerP.innerText = `El monto final después de ${numberTime * 2} semestres con una tasa de interés del ${interestR * 100} % anual es de ${noDecimals}, de los cuales, ${initialCapital} pertenecen al saldo inicial y ${noDecimalsProfi} pertenecen a las ganancias generadas. `;
               
               tabletSonTitle.innerText = 'Semestres';
               alert('¿Funcionara con semestres?');
          break;
               
          case 'T':
               time = 4;
               numberTimeLoop = numberTime * time;
               endingBalance =  initialCapital * (1 + (interestR / 4))**(4 * numberTime);
               noDecimals = endingBalance.toFixed(2);
               profi = noDecimals - initialCapital;
               noDecimalsProfi = profi.toFixed(2);
               inputInterestRateLoop = inputInterestRate.value / time;
               
               answerP.innerText = `El monto final después de ${numberTime * 4} trimestres con una tasa de interés del ${interestR * 100} % anual es de ${noDecimals}, de los cuales, ${initialCapital} pertenecen al saldo inicial y ${noDecimalsProfi} pertenecen a las ganancias generadas. `;

               tabletSonTitle.innerText = 'Trimestres';
               alert('¿Funcionara con trimestres?');
          break;

          case 'M':
               time = 12;
               numberTimeLoop = numberTime * time;
               endingBalance =  initialCapital * (1 + (interestR / 12))**(12 * numberTime);

               noDecimals = endingBalance.toFixed(2);
               profi = noDecimals - initialCapital;
               noDecimalsProfi = profi.toFixed(2);
               inputInterestRateLoop = inputInterestRate.value / time;
               
               answerP.innerText = `El monto final después de ${numberTime * 12} meses con una tasa de interés del ${interestR * 100} % anual es de ${noDecimals}, de los cuales, ${initialCapital} pertenecen al saldo inicial y ${noDecimalsProfi} pertenecen a las ganancias generadas. `;

               tabletSonTitle.innerText = 'Meses';
               alert('¿Funcionara con meses?');
          break;

          case 'W':
               time = 52;
               numberTimeLoop = numberTime * time;
               endingBalance =  initialCapital * (1 + (interestR / 52))**(52 * numberTime);
               noDecimals = endingBalance.toFixed(2);
               profi = noDecimals - initialCapital;
               noDecimalsProfi = profi.toFixed(2);
               inputInterestRateLoop = inputInterestRate.value / time;
               
               answerP.innerText = `El monto final después de ${numberTime * 52} semanas con una tasa de interés del ${interestR * 100} % anual es de ${noDecimals}, de los cuales, ${initialCapital} pertenecen al saldo inicial y ${noDecimalsProfi} pertenecen a las ganancias generadas. `;

               tabletSonTitle.innerText = 'Semanas';
               alert('¿Funcionara con semanas?');
          break;

          case 'D':
               time = 365;
               numberTimeLoop = numberTime * time;
               endingBalance =  initialCapital * (1 + (interestR / 65))**(65 * numberTime);

               noDecimals = endingBalance.toFixed(2);
               profi = noDecimals - initialCapital;
               noDecimalsProfi = profi.toFixed(2);
               inputInterestRateLoop = inputInterestRate.value / time;
               
               answerP.innerText = `El monto final después de ${numberTime * 365} dias con una tasa de interés del ${interestR * 100} % anual es de ${noDecimals}, de los cuales, ${initialCapital} pertenecen al saldo inicial y ${noDecimalsProfi} pertenecen a las ganancias generadas. `;

               tabletSonTitle.innerText = 'Dias';
               alert('¿Funcionara con dias?');
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

     console.log(profiLoop);
     console.log(initialCapitalLoop);

     for (let i = 0; i < numberTimeLoop ; i++) {

          const tableSonYears = document.createElement('p');
          tableSonYears.classList.add('table__son--conten');
          tableSonYears.innerText = `${i + 1}`;
          tabletYear.appendChild(tableSonYears);

          const tableSonInitialAmount = document.createElement('p');
          tableSonInitialAmount.classList.add('table__son--conten');
          tableSonInitialAmount.innerText = initialCapitalLoop[i].toFixed(2);
          tabletInitialAmount.appendChild(tableSonInitialAmount);

          const tableSonInterestRate = document.createElement('p');
          tableSonInterestRate.classList.add('table__son--conten');
          tableSonInterestRate.innerText = `${inputInterestRateLoop.toFixed(2)}%` ;
          tabletInterestRate.appendChild(tableSonInterestRate);

          const tableSonProfits = document.createElement('p');
          tableSonProfits.classList.add('table__son--conten');
          tableSonProfits.innerText = profiLoop[i].toFixed(2);
          tabletProfits.appendChild(tableSonProfits);

          const tableSonEndingBalance = document.createElement('p');
          tableSonEndingBalance.classList.add('table__son--conten');
          tableSonEndingBalance.innerText = 'En un momento';
          tabletEndingBalance.appendChild(tableSonEndingBalance);

          
     }
}



