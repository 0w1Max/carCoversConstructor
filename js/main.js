import {getValuesArray, getTextContentArray, getObj} from './util.js';
import {renderTemplate} from './rendering.js';

// const selectMaterial = document.querySelector('.select-item__material');
// const selectMaterialOptions = selectMaterial.querySelector('option');
// const selectColor = document.querySelector('.select-item__color');
// const selectColorOptions = selectColor.querySelector('option');

// const materialText = document.querySelector('.add-cover-text__material');
// const colorText = document.querySelector('.add-cover-text__color');

// const showColor = document.querySelector('.show-color');

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
