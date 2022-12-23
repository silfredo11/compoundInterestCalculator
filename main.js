const btn = document.querySelector('#button');
const ans = document.querySelector('.answer');
const loader = document.querySelector('.loader');
const loaderSon1 = document.querySelector('.loader__son1');
const loaderSon2 = document.querySelector('.loader__son2');
const loaderSon3 = document.querySelector('.loader__son3');
const main = document.querySelector('#main');
const x = document.querySelector('.header__img');

btn.addEventListener('click',toggleAnswer);
x.addEventListener('click', removeVisualize);

function toggleAnswer(){

    loader.classList.toggle('animation');
    loaderSon1.classList.toggle('animationSon');
    loaderSon2.classList.toggle('animationSon');
    loaderSon3.classList.toggle('animationSon');
    ans.classList.toggle('visualize');
    main.classList.toggle('display');
    
}

function removeVisualize() {

    ans.classList.remove('visualize');
    main.classList.remove('display');
}

