import './rendering.js';
import {MATERIALS, COLORS, HEX_COLORS} from './mock.js';

const selectMaterial = document.querySelector('.select-item__material');
const selectMaterialOptions = selectMaterial.querySelector('option');
const selectMainColor = document.querySelector('.select-item__main-color');
const mainColorOptions = selectMainColor.querySelector('option');
const selectTopColor = document.querySelector('.select-item__top-color');
const topColorOptions = selectTopColor.querySelector('option');
const materialText = document.querySelector('.add-cover-text__material');
const mainColorText = document.querySelector('.add-cover-text__main-color');
const topColorText = document.querySelector('.add-cover-text__top-color');
const showMainColor = document.querySelector('.show-color--main');
const showTopColor = document.querySelector('.show-color--top');

const coverImgContainer = document.querySelector('.cover-img-container');
const coverMainColor = document.querySelector('.main-color');
const coverTopColor = document.querySelector('.top-color');

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

if (mainColorOptions) {
  mainColorText.textContent = newCarCover.colors[mainColorOptions.value];
  showMainColor.style.background = newCarCover.hex[mainColorOptions.value];
  coverMainColor.src = `./img/cover-main--${mainColorOptions.value}.png`;
  coverMainColor.className = `cover-img main-color main-color--${mainColorOptions.value}`;
  coverMainColor.alt = `main-color--${mainColorOptions.value}`;
}

if (topColorOptions) {
  topColorText.textContent = newCarCover.colors[topColorOptions.value];
  showTopColor.style.background = newCarCover.hex[topColorOptions.value];
  coverTopColor.src = `./img/cover-top--${topColorOptions.value}.png`;
  coverTopColor.className = `cover-img top-color top-color--${topColorOptions.value}`;
  coverTopColor.alt = `top-color--${topColorOptions.value}`;
}

function materialChangeHandler (evt) {
  materialText.textContent = newCarCover.materials[evt.target.value];
}

function mainColorChangeHandler (evt) {
  mainColorText.textContent = newCarCover.colors[evt.target.value];
  showMainColor.style.background = newCarCover.hex[evt.target.value];
  coverMainColor.src = `./img/cover-main--${evt.target.value}.png`;
  coverMainColor.className = `cover-img main-color main-color--${evt.target.value}`;
  coverMainColor.alt = `main-color--${evt.target.value}`;
}

function topColorChangeHandler (evt) {
  topColorText.textContent = newCarCover.colors[evt.target.value];
  showTopColor.style.background = newCarCover.hex[evt.target.value];
  coverTopColor.src = `./img/cover-top--${evt.target.value}.png`;
  coverTopColor.className = `cover-img top-color top-color--${evt.target.value}`;
  coverTopColor.alt = `top-color--${evt.target.value}`;
}

selectMaterial.addEventListener('change', materialChangeHandler);

selectMainColor.addEventListener('change', mainColorChangeHandler);

selectTopColor.addEventListener('change', topColorChangeHandler);
