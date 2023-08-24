'use strict';

const title = document.querySelector('.modal__title')
const form = document.querySelector('.modal__form')
const dicountField = document.querySelector('.modal__input.modal__input_discount');
const discountCheckBox = document.querySelector('.modal__checkbox');

const overlayElem = document.querySelector('.overlay');
overlayElem.classList.remove('active');

let goodsArr = [
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

const itemNumFoo = () => {
  const itemNumber = document.querySelectorAll('.row_number')
  let i = 1
  itemNumber.forEach(e => e.textContent = 0);
  itemNumber.forEach(e => e.textContent = i++);
};

const createRow = ({id, title, category, units, count, price, discont, images}) => {

    const tr = document.createElement('tr');

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
    itemNumber.classList.add('table__cell', 'row_number');

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

    let priceSum = discont !== false ? count * price * (100 - discont) / 100 : count * price
    console.log('priceSum: ', priceSum);
    itemSum.classList.add('table__cell');
    itemSum.insertAdjacentText('beforeend', priceSum);
    itemSum.classList.add('total_price_cms')

    buttons.classList.add('table__cell', 'table__cell_btn-wrapper');
    const button1 = document.createElement('button');
    const button2 = document.createElement('button');
    const button3 = document.createElement('button');
    buttons.append(button1, button2, button3);
    button1.classList.add('table__btn', 'table__btn_pic');
    button2.classList.add('table__btn', 'table__btn_edit');
    button3.classList.add('table__btn', 'table__btn_del');

    const tBody = document.querySelector('tbody');
    tBody.append(tr);

    return tr;
};

const renderGoods = (arr) => {

return arr.map((element) => createRow (element)); 

};

const deleteRow = () => {

  const tr = document.querySelectorAll('tr');
  tr.forEach(e => e.classList.add('row'));
  
  const tBody = document.querySelector('.table__body')
  tBody.addEventListener('click', e => {
    const target = e.target;
    if (target.closest('.table__btn.table__btn_del')) {
      const targetRow = target.closest('.row');
      let targetRowId = targetRow.querySelector('td.table__cell_name');
      targetRowId = targetRowId.dataset.id;
      target.closest('.row').remove();
      goodsArr = goodsArr.filter(e => e.id != targetRowId);
      totalPriceCms(goodsArr);
      itemNumFoo();
      console.log('goodsArr: ', goodsArr);
    }
  });
  
};

const modalControl = () => {
  const openModal = () => {
    overlayElem.classList.add('active');
    let idForm = document.querySelector('.vendor-code__id');
    idForm.textContent = randomId();
  };

  const closeModal = () => {
    overlayElem.classList.remove('active');
  };

  const addItemButton = document.querySelector('.panel__add-goods');
  addItemButton.addEventListener('click', openModal);
  
  overlayElem.addEventListener('click', e => {
    const target = e.target;
    if (target === overlayElem ||
      target.closest('.modal__close')) {
        closeModal();
    }
  });

  return {
    closeModal,
  };
};

const discountControl = () => {
  discountCheckBox.addEventListener('click', e => {
    const target = e.target;
    if (target === discountCheckBox) {
      if (discountCheckBox.checked === true) {
        dicountField.disabled = false   
      } else {
        dicountField.value = null;
        dicountField.disabled = true
      }
      
    }
    })
};

const addItemData = (item) => {
  goodsArr.push(item);
  console.log('goodsArr: ', goodsArr);

};

const addItemDataPage = (item, tBody) => {

tBody.append(createRow(item));
itemNumFoo();
};

const formControl = (form, tBody, closeModal) => {
form.addEventListener('submit', e => {
  e.preventDefault();

  const formData = new FormData(e.target);
  const newItem = Object.fromEntries(formData)
  console.log('newItem: ', newItem);
  newItem.title = newItem.name;
  let idForm = document.querySelector('.vendor-code__id');
  newItem.id = idForm.textContent;
  addItemDataPage(newItem, tBody);
  addItemData(newItem);
  const tr = document.querySelectorAll('tr');
  tr.forEach(e => e.classList.add('row'));
  totalPriceCms(goodsArr);
  form.reset();
  closeModal();
});

};

const typeFieldForm = () => {
  count.type = 'number';
  price.type = 'number';

};

const randomId = () => {
  let randomId = '0';
  let i = 0;
  for (i = 0; i < 13; i++) {
    const randomNum = Math.round(Math.random() * 9);
    randomId = randomNum + randomId
  };
  return randomId;
};

const totalPriceCalc = (price, count, totalPriceForm, discont) => {
  // let totalPriceForm = document.querySelector('.modal__total-price');
  
  // let priceForm = document.querySelector('#price');
  // price = price.value;
  // let countForm = document.querySelector('#count');
  // count = count.value;
  const input = document.querySelectorAll('.modal__input')
  totalPriceForm.value = `$ ${count * price * (100 - discont) / 100}`;

  input.forEach(e => 
    e.addEventListener('change', e => {
    totalPriceCalc()
    }));

    totalPriceCms(goodsArr);

};

const totalPriceCms = (goodsArr) => {

  let totalPriceCms = document.querySelector('.cms__total-price');
  let priceByRowSum = document.querySelectorAll('.total_price_cms');
  let sum = 0;
  priceByRowSum.forEach(e => console.log(sum += +e.textContent));

  totalPriceCms.textContent = `$ ${sum}`;
};

const init = () => {
const tBody = document.querySelector('.table__body');

let totalPriceForm = document.querySelector('.modal__total-price');
console.log('totalPriceForm: ', totalPriceForm);
totalPriceForm.defaultValue = '$' + 0;
let price = document.querySelector('#price');
let count = document.querySelector('#count');
let discont = document.querySelector('#discount_count');

renderGoods(goodsArr);
itemNumFoo();
randomId();
const {closeModal} = modalControl();
discountControl();
formControl(form, tBody, closeModal);
typeFieldForm();
deleteRow();

totalPriceCalc(price, count, totalPriceForm, discont);

}

init();
