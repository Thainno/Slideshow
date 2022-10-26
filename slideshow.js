'use strict';

const images = [
    {'id': '1', 'url': './images/oranges.jpg'},
    {'id': '2', 'url': './images/blueberries.jpg'},
    {'id': '3', 'url': './images/bananas.jpg'},
    {'id': '4', 'url': './images/cherries.jpg'},
    {'id': '5', 'url': './images/strawberries.jpg'},
]

const container = document.querySelector('#container-itens');

const loadImages = (images, container) => {
    images.forEach(image => {
        container.innerHTML += `
            <div class='item'>
                <img src='${image.url}'> 
            </div>
        `
    })
}

loadImages (images, container)
