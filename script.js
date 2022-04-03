// ANIMATIONS MENU

const list = document.querySelectorAll('.list');
const indic = document.querySelectorAll('.icon');
const html = document.querySelector('#html');

function addactive(){
    list.forEach((item) =>
        item.classList.remove('active'));
        this.classList.add('active');
}
list.forEach((item) =>
item.addEventListener('click', addactive));

function addindic(){
    indic.forEach((item) =>
        item.classList.remove('indicator'));
        this.classList.add('indicator');
}

indic.forEach((item) =>
item.addEventListener('click',addindic));

const photo = document.querySelector('#moi');

