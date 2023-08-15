'use strict';
console.log(document.body);

const title = document.querySelector('.modal__title')
const form = document.querySelector('.modal__form')
const checkbox = document.querySelector('.modal__checkbox');
const fieldCheckbox = document.querySelector('.modal__input.modal__input_discount');

const overlayElem = document.querySelector('.overlay');
overlayElem.classList.remove('active');

const obj = {
num: 2,
id: 24601654816512,
title: "Телевизор DEXP",
category: "Техника для дома",
units: "шт",
count: 15,
price: "$1000",
priceSum: "$15000",
};

const createRow = (object) => {

    const tr = document.createElement('tr')

    const td1 = document.createElement('td');
    const td2 = document.createElement('td');
    const td3 = document.createElement('td');
    const td4 = document.createElement('td');
    const td5 = document.createElement('td');
    const td6 = document.createElement('td');
    const td7 = document.createElement('td');
    const td8 = document.createElement('td');

    tr.insertAdjacentElement('beforeend', td1);
    tr.insertAdjacentElement('beforeend', td2);
    tr.insertAdjacentElement('beforeend', td3);
    tr.insertAdjacentElement('beforeend', td4);
    tr.insertAdjacentElement('beforeend', td5);
    tr.insertAdjacentElement('beforeend', td6);
    tr.insertAdjacentElement('beforeend', td7);
    tr.insertAdjacentElement('beforeend', td8);

    let num = td1.insertAdjacentHTML('beforeend', '');
    td1.classList.add('table__cell');

    td2.classList.add('table__cell', 'table__cell_left', 'table__cell_name');
    td2.dataset.id = object.id;
    const span = document.createElement('span')
    td2.insertAdjacentElement('beforeend', span);
    span.insertAdjacentHTML('afterbegin', `id: ${object.id}`)
    span.classList.add('table__cell-id');
    td2.insertAdjacentHTML('beforeend', `${object.title}`);

    td3.classList.add('table__cell', 'table__cell_left');
    td3.insertAdjacentHTML('beforeend', `${object.category}`);

    td4.classList.add('table__cell');
    td4.insertAdjacentHTML('beforeend', `${object.units}`);

    td5.classList.add('table__cell');
    td5.insertAdjacentHTML('beforeend', `${object.count}`);
    const count = td5.innerHTML;

    td6.classList.add('table__cell');
    td6.insertAdjacentHTML('beforeend', `${object.price}`);
    const price = td6.innerHTML;

    td7.classList.add('table__cell');
    const priceSum = count * price;
    td7.insertAdjacentText('beforeend', priceSum);

    td8.classList.add('table__cell', 'table__cell_btn-wrapper');
    const button1 = document.createElement('button');
    const button2 = document.createElement('button');
    const button3 = document.createElement('button');
    td8.insertAdjacentElement('beforeend', button1);
    td8.insertAdjacentElement('beforeend', button2);
    td8.insertAdjacentElement('beforeend', button3);
    button1.classList.add('table__btn', 'table__btn_pic');
    button2.classList.add('table__btn', 'table__btn_edit');
    button3.classList.add('table__btn', 'table__btn_del');

    console.log('tr: ', tr);

    const tBody = document.querySelector('tbody');
    tBody.insertAdjacentElement('beforeend', tr);

    const itemNumFoo = () => {
      const previousTr = tr.previousElementSibling;
      const previousTd = previousTr.querySelector('.table__cell').innerHTML;
      const itemNum = +previousTd + 1;
    
      return td1.insertAdjacentText('beforeend', itemNum);
    };
    itemNumFoo();

    return tr;
};

const renderGoods = (arr) => {

return arr.map((element) => createRow (element)); 

};


const goodsArr = [
    {
      "id": 1,
      "title": "Смартфон Xiaomi 11T 8/128GB",
      "price": 27000,
      "description": "Смартфон Xiaomi 11T – это представитель флагманской линейки, выпущенной во второй половине 2021 года. И он полностью соответствует такому позиционированию, предоставляя своим обладателям возможность пользоваться отличными камерами, ни в чем себя не ограничивать при запуске игр и других требовательных приложений.",
      "category": "mobile-phone",
      "discont": false,
      "count": 3,
      "units": "шт",
      "images": {
        "small": "img/smrtxiaomi11t-m.jpg",
        "big": "img/smrtxiaomi11t-b.jpg"
      }
    },
    {
      "id": 2,
      "title": "Радиоуправляемый автомобиль Cheetan",
      "price": 4000,
      "description": "Внедорожник на дистанционном управлении. Скорость 25км/ч. Возраст 7 - 14 лет",
      "category": "toys",
      "discont": 5,
      "count": 1,
      "units": "шт",
      "images": {
        "small": "img/cheetancar-m.jpg",
        "big": "img/cheetancar-b.jpg"
      }
    },
    {
      "id": 3,
      "title": "ТВ приставка MECOOL KI",
      "price": 12400,
      "description": "Всего лишь один шаг сделает ваш телевизор умным, Быстрый и умный MECOOL KI PRO, прекрасно спроектированный, сочетает в себе прочный процессор Cortex-A53 с чипом Amlogic S905D",
      "category": "tv-box",
      "discont": 15,
      "count": 4,
      "units": "шт",
      "images": {
        "small": "img/tvboxmecool-m.jpg",
        "big": "img/tvboxmecool-b.jpg"
      }
    },
    {
      "id": 4,
      "title": "Витая пара PROConnect 01-0043-3-25",
      "price": 22,
      "description": "Витая пара Proconnect 01-0043-3-25 является сетевым кабелем с 4 парами проводов типа UTP, в качестве проводника в которых используется алюминий, плакированный медью CCA. Такая неэкранированная витая пара с одножильными проводами диаметром 0.50 мм широко применяется в процессе сетевых монтажных работ. С ее помощью вы сможете обеспечить развертывание локальной сети в домашних условиях или на предприятии, объединить все необходимое вам оборудование в единую сеть.",
      "category": "cables",
      "discont": false,
      "count": 420,
      "units": "v",
      "images": {
        "small": "img/lan_proconnect43-3-25.jpg",
        "big": "img/lan_proconnect43-3-25-b.jpg"
      }
    }
]


const init = () => {
renderGoods(goodsArr);
}

init();





