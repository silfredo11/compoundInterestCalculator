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

btn.addEventListener('click',toggleAnswer);
x.addEventListener('click', removeVisualize);

function toggleAnswer(){
    const investment =  Number(inputID.value);
    const periOfTime =  inputperiOfTime.value;
    const interestRate =  Number(inputID.value);
    const timeFrame =  Number(inputperiOfTime.value);

    if( !investment ){

        alert('Para que la aplicación pueda funcionar, tienes que indicar el monto de tu "Depósito inicial"');

    }else if (!periOfTime) {
        
        alert('Para que la aplicación pueda funcionar, tienes que elegir un periodo de tiempo: "Años, Meses, Semestres, Trimestres, Meses, Semanas o Días"."');

    } else if (!interestRate){

        alert('Para que la aplicación pueda funcionar, tienes que insertar el porcentaje de interés.');

     }
     // else if(!timeFrame){

    //     alert('Para que la aplicación pueda funcionar, tienes que insertar el tiempo de la inversión. .');


    else{
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



function calculatingCI(){
   


 
}






// const nuevoNumero = 4 * inputID.value;

// console.log(`Hola mario este es el numero ${nuevoNumero}`);