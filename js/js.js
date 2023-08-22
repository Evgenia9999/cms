'use strict';

const title = document.querySelector('.modal__title')
const form = document.querySelector('.modal__form')
const dicountField = document.querySelector('.modal__input.modal__input_discount');
const discountCheckBox = document.querySelector('.modal__checkbox');

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

const itemNumFoo = (itemNumber, tr) => {
  const previousTr = tr.previousElementSibling;
  const previousTd = previousTr.querySelector('.table__cell').innerHTML;
  const itemNum = +previousTd + 1;

  return itemNumber.append(itemNum);
};

const createRow = ({id, title, category, units, count, price, images}) => {

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

    itemNumFoo(itemNumber, tr);

    return {
      tr,
      tBody,
    }
};

const renderGoods = (arr) => {

return arr.map((element) => createRow (element)); 

};

const deleteRow = () => {
  
  const tBody = document.querySelector('.table__body')
  tBody.addEventListener('click', e => {
    const target = e.target;
    if (e.target.closest('.table__btn.table__btn_del')) {
      target.closest('.row').remove();
      foo();
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

};

const addItemDataPage = (item, tBody) => {

tBody.append(createRow(item));
addClassToCms();
};

const formControl = (form, tBody, closeModal) => {
form.addEventListener('submit', e => {
  e.preventDefault();

  const formData = new FormData(e.target);

  const newItem = Object.fromEntries(formData)
  newItem.title = newItem.name;
  let idForm = document.querySelector('.vendor-code__id');
  newItem.id = idForm.textContent;
  addItemDataPage(newItem, tBody);
  addItemData(newItem);
  foo();
  form.reset();
  closeModal();
});

};

const addClassToCms = () => {
  const tr = document.querySelectorAll('tr');
  tr.forEach(e => e.classList.add('row'));

  const trRow = document.querySelectorAll('tr');

  const tr1Row = trRow[1].querySelectorAll('td');
  tr1Row[6].classList.add('total_price_cms');
  let totalPriceRow1 = tr1Row[6];
  totalPriceRow1 = totalPriceRow1.textContent.replace('$', '');
  
  const tr2Row = trRow[2].querySelectorAll('td');
  tr2Row[6].classList.add('total_price_cms');
  let totalPriceRow2 = tr2Row[6];
  totalPriceRow2 = totalPriceRow2.textContent.replace('$', '');
  

  return {
    totalPriceRow1,
    totalPriceRow2,
  };
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

const totalPriceCalc = () => {
  let totalPriceForm = document.querySelector('.modal__total-price');
  totalPriceForm.defaultValue = '$' + 0;
  let priceForm = document.querySelector('#price');
  priceForm = priceForm.value;
  let countForm = document.querySelector('#count');
  countForm = countForm.value;
  const input = document.querySelectorAll('.modal__input')
  totalPriceForm.value = `$ ${countForm * priceForm}`;

  input.forEach(e => 
    e.addEventListener('change', e => {
    totalPriceCalc()
    }));

  foo();

};

const foo = () => {

  let totalPriceCms = document.querySelector('.cms__total-price');
  let priceByRowSum = document.querySelectorAll('.total_price_cms');
  let sum = 0;
  priceByRowSum.forEach(e => console.log(sum += +e.textContent.replace('$', '')));

  totalPriceCms.textContent = `$ ${sum}`;
};

const init = () => {

renderGoods(goodsArr);
randomId();
const {closeModal} = modalControl();
addClassToCms();
discountControl();
const tBody = document.querySelector('.table__body');
formControl(form, tBody, closeModal);
typeFieldForm();
deleteRow();

totalPriceCalc();

}

init();


// 6. При открытии модального окна должен генерироваться случайный id и заполняться span с классом vendor-code__id

// 7. Итоговая стоимость в модальном окне должна правильно высчитываться при смене фокуса

// 8. Итоговая стоимость над таблицей должна корректно отображать сумму всех товаров



// после реализации всех пунктов проверьте чтобы работало возможность удалить товар

