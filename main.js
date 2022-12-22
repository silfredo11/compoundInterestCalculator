const btn = document.querySelector('#button');
const ans = document.querySelector('.answer');
const loader = document.querySelector('.loader');
const loaderSon1 = document.querySelector('.loader__son1');
const loaderSon2 = document.querySelector('.loader__son2');
const loaderSon3 = document.querySelector('.loader__son3');

btn.addEventListener('click',toggleAnswer);

function toggleAnswer(){

    loader.classList.toggle('animation');
    loaderSon1.classList.toggle('animationSon');
    loaderSon2.classList.toggle('animationSon');
    loaderSon3.classList.toggle('animationSon');
    ans.classList.toggle('visualize');
    
}

