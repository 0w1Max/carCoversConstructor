//  План приложения "Конструктор автомобильных чехлов"
//  +1. Сделать черновую разметку
//  +2. Написать JS логику для выбора значений конструтора и отрисовать их в разметке
////  +2.1. Найти все DOM-элементы разметки
////  +2.2. Добавить все значения для конструктора (материал, цвет чехла и т.д.)
////  +2.3. Написать функцию-конструктор для создания объекта со всеми значениями
////  +2.4. Добавить события для вывода значений в разметке
//  2. Сделать итоговую разметку

import {getArray, getArrayTextContent, getObj} from "./util.js";

const selectMaterial = document.querySelector('.select-item__material');
const selectMaterialOptions = selectMaterial.querySelector('option');
const selectColor = document.querySelector('.select-item__color');
const selectColorOptions = selectColor.querySelector('option');

const materialText = document.querySelector('.add-cover-text__material');
const colorText = document.querySelector('.add-cover-text__color');

const materials = getArray('.select-item__material option');
const colors = getArray('.select-item__color option');
console.log(materials);
console.log(colors);

const materialsTextContent = getArrayTextContent('.select-item__material option');
const colorsTextContent = getArrayTextContent('.select-item__color option');
console.log(materialsTextContent);
console.log(colorsTextContent);

const materialsObj = getObj(materials, materialsTextContent);
const colorsObj = getObj(colors, colorsTextContent);
console.log(materialsObj);
console.log(colorsObj);

function carCover (materials, colors) {
  this.materials = materials;
  this.colors = colors;
}

const newCarCover = new carCover(materialsObj, colorsObj);
console.log(newCarCover);

if (selectMaterialOptions) {
  materialText.textContent = newCarCover.materials[selectMaterialOptions.value];
}

if (selectColorOptions) {
  colorText.textContent = newCarCover.colors[selectColorOptions.value];
}

function materialChangeHandler (evt) {
  materialText.textContent = newCarCover.materials[evt.target.value];
}

function colorChangeHandler (evt) {
  colorText.textContent = newCarCover.colors[evt.target.value];
}

selectMaterial.addEventListener('change', materialChangeHandler);

selectColor.addEventListener('change', colorChangeHandler);
