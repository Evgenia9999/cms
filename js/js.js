'use strict';
console.log(document.body);

const title = document.querySelector('.modal__title')
const form = document.querySelector('.modal__form')
const checkbox = document.querySelector('.modal__checkbox');
const fieldCheckbox = document.querySelector('.modal__input.modal__input_discount');

const overlayElem = document.querySelector('.overlay');
overlayElem.classList.remove('active');

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

const createRow = ({id, title, category, units, count, price}) => {

    const tr = document.createElement('tr')

    const itemNumber = document.createElement('td');
    const itemName = document.createElement('td');
    const itemCategory = document.createElement('td');
    const itemUnits = document.createElement('td');
    const itemCount = document.createElement('td');
    const itemPrice = document.createElement('td');
    const itemSum = document.createElement('td');
    const buttons = document.createElement('td');

    tr.append(itemNumber, itemName, itemCategory, itemUnits, itemCount, itemPrice, itemSum, buttons);

    let num = itemNumber.insertAdjacentHTML('beforeend', '');
    itemNumber.classList.add('table__cell');

    itemName.classList.add('table__cell', 'table__cell_left', 'table__cell_name');
    itemName.dataset.id = id;
    const span = document.createElement('span')
    itemName.insertAdjacentElement('beforeend', span);
    span.insertAdjacentHTML('afterbegin', `id: ${id}`)
    span.classList.add('table__cell-id');
    itemName.insertAdjacentHTML('beforeend', `${title}`);

    itemCategory.classList.add('table__cell', 'table__cell_left');
    itemCategory.insertAdjacentHTML('beforeend', `${category}`);

    itemUnits.classList.add('table__cell');
    itemUnits.insertAdjacentHTML('beforeend', `${units}`);

    itemCount.classList.add('table__cell');
    itemCount.insertAdjacentHTML('beforeend', `${count}`);
    count = itemCount.innerHTML;

    itemPrice.classList.add('table__cell');
    itemPrice.insertAdjacentHTML('beforeend', `${price}`);
    price = itemPrice.innerHTML;

    itemSum.classList.add('table__cell');
    const priceSum = count * price;
    itemSum.insertAdjacentText('beforeend', priceSum);

    buttons.classList.add('table__cell', 'table__cell_btn-wrapper');
    const button1 = document.createElement('button');
    const button2 = document.createElement('button');
    const button3 = document.createElement('button');
    buttons.append(button1, button2, button3);
    button1.classList.add('table__btn', 'table__btn_pic');
    button2.classList.add('table__btn', 'table__btn_edit');
    button3.classList.add('table__btn', 'table__btn_del');

    console.log('tr: ', tr);

    const tBody = document.querySelector('tbody');
    tBody.append(tr);

    const itemNumFoo = () => {
      const previousTr = tr.previousElementSibling;
      const previousTd = previousTr.querySelector('.table__cell').innerHTML;
      const itemNum = +previousTd + 1;
    
      return itemNumber.append(itemNum);
    };
    itemNumFoo();

    return tr;
};

const renderGoods = (arr) => {

return arr.map((element) => createRow (element)); 

};

const init = () => {
renderGoods(goodsArr);

const addItemBtn = () => {
const addItemButton = document.querySelector('.panel__add-goods');
const formField = document.querySelector('.overlay__modal.modal')
const exitForm = document.querySelector('.modal__close');

addItemButton.addEventListener('click', () => {
  overlayElem.classList.add('active');
});

formField.addEventListener('click', e => {
  e.stopPropagation();
});

overlayElem.addEventListener('click', () => {
  overlayElem.classList.remove('active');
});

exitForm.addEventListener('click', () => {
  overlayElem.classList.remove('active');
});


}
addItemBtn();


}

init();





// 1. При нажатии на кнопку "Добавить товар", открывать модальное окно 

// 2. При нажатии на крестик или мимо модального окна, закрывать его