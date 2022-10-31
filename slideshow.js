'use strict';

const images = [
    {'id': '1', 'url': '../Images/arara.jpg'},
    {'id': '2', 'url': '../Images/onca.jpg'},
    {'id': '3', 'url': '../Images/tucano.jpg'},
    {'id': '4', 'url': '../Images/boto.jpg'},
    {'id': '5', 'url': '../Images/mico-leao.jpg'},
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

