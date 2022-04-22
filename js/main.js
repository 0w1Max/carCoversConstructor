import {COLORS, HEX_COLORS, MATERIALS} from './mock.js';
import {getValuesArray, getTextContentArray, getObj} from "./util.js";

// const selectMaterial = document.querySelector('.select-item__material');
// const selectMaterialOptions = selectMaterial.querySelector('option');
// const selectColor = document.querySelector('.select-item__color');
// const selectColorOptions = selectColor.querySelector('option');

// const materialText = document.querySelector('.add-cover-text__material');
// const colorText = document.querySelector('.add-cover-text__color');

// const showColor = document.querySelector('.show-color');

const body = document.querySelector('body');
const coverTemplate = document.querySelector('#cover-template').content;
const fragment = document.createDocumentFragment();
const cloneTemplate = coverTemplate.cloneNode(true);

function getMock (select, option, obj) {
  for (let key in obj) {
    const newOption = option.cloneNode(true);

    newOption.value = key;
    newOption.textContent = obj[key];
    
    select.appendChild(newOption);
  }
}

function renderTemplate () {
  const selectColor = cloneTemplate.querySelector('.select-item__color');
  const optionColor = selectColor.querySelector('option');
  const selectMaterial = cloneTemplate.querySelector('.select-item__material');
  const optionMaterial = selectMaterial.querySelector('option');
  
  selectColor.innerHTML = '';
  selectMaterial.innerHTML = '';
  
  getMock(selectColor, optionColor, COLORS);
  getMock(selectMaterial, optionMaterial, MATERIALS);

  fragment.appendChild(cloneTemplate);
  body.appendChild(fragment);
}

renderTemplate();

// const materials = getValuesArray('.select-item__material option');
// const colors = getValuesArray('.select-item__color option');
// console.log(materials);
// console.log(colors);

// const materialsTextContent = getTextContentArray('.select-item__material option');
// const colorsTextContent = getTextContentArray('.select-item__color option');
// console.log(materialsTextContent);
// console.log(colorsTextContent);

// const materialsObj = getObj(materials, materialsTextContent);
// const colorsObj = getObj(colors, colorsTextContent);
// console.log(materialsObj);
// console.log(colorsObj);

// function carCover (materials, colors) {
//   this.materials = materials;
//   this.colors = colors;
// }

// const newCarCover = new carCover(materialsObj, colorsObj);
// console.log(newCarCover);

// if (selectMaterialOptions) {
//   materialText.textContent = newCarCover.materials[selectMaterialOptions.value];
// }

// if (selectColorOptions) {
//   colorText.textContent = newCarCover.colors[selectColorOptions.value];
//   showColor.style.background = 'orange';
// }

// function materialChangeHandler (evt) {
//   materialText.textContent = newCarCover.materials[evt.target.value];
// }

// function colorChangeHandler (evt) {
//   colorText.textContent = newCarCover.colors[evt.target.value];
// }

// selectMaterial.addEventListener('change', materialChangeHandler);

// selectColor.addEventListener('change', colorChangeHandler);
