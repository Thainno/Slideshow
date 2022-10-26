'use strict';

const images = [
    {'id': '1', 'url': './images/oranges.jpg'},
    {'id': '2', 'url': './images/blueberries.jpg'},
    {'id': '3', 'url': './images/bananas.jpg'},
    {'id': '4', 'url': './images/cherries.jpg'},
    {'id': '5', 'url': './images/strawberries.jpg'},
]

const containerItens = document.querySelector('#container-itens');

const loadImages = (images, container) => {
    images.forEach(image => {
        container.innerHTML += `
            <div class='item'>
                <img src='${image.url}'> 
            </div>
        `
    })
}

loadImages (images, containerItens);

let itens = document.querySelectorAll('.item');

const next = () => {
    containerItens.appendChild(itens[0]);
    itens = document.querySelectorAll('.item');
}

const previous = () => {
    const lastItem = itens[itens.length - 1];
    containerItens.insertBefore(lastItem, itens[0]);
    itens = document.querySelectorAll('.item');
}

document.querySelector('#previous').addEventListener('click', previous);
document.querySelector('#next').addEventListener('click', next);