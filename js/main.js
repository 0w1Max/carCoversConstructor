import './rendering.js';
import {MATERIALS, COLORS, HEX_COLORS} from './mock.js';

const selectMaterial = document.querySelector('.select-item__material');
const selectMaterialOptions = selectMaterial.querySelector('option');
const selectColor = document.querySelector('.select-item__color');
const selectColorOptions = selectColor.querySelector('option');
const materialText = document.querySelector('.add-cover-text__material');
const colorText = document.querySelector('.add-cover-text__color');
const showColor = document.querySelector('.show-color');

function carCover (materials, colors, hex) {
  this.materials = materials;
  this.colors = colors;
  this.hex = hex;
}

const newCarCover = new carCover(MATERIALS, COLORS, HEX_COLORS);
console.log(newCarCover);

if (selectMaterialOptions) {
  materialText.textContent = newCarCover.materials[selectMaterialOptions.value];
}

if (selectColorOptions) {
  colorText.textContent = newCarCover.colors[selectColorOptions.value];
  showColor.style.background = newCarCover.hex[selectColorOptions.value];
}

function materialChangeHandler (evt) {
  materialText.textContent = newCarCover.materials[evt.target.value];
}

function colorChangeHandler (evt) {
  colorText.textContent = newCarCover.colors[evt.target.value];
  showColor.style.background = newCarCover.hex[evt.target.value];
}

selectMaterial.addEventListener('change', materialChangeHandler);

selectColor.addEventListener('change', colorChangeHandler);
