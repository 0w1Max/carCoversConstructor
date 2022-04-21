//  План приложения "Конструктор автомобильных чехлов"
//  +1. Сделать черновую разметку
//  +2. Написать JS логику для выбора значений конструтора и отрисовать их в разметке
////  +2.1. Найти все DOM-элементы разметки
////  +2.2. Добавить все значения для конструктора (материал, цвет чехла и т.д.)
////  +2.3. Написать функцию-конструктор для создания объекта со всеми значениями
////  +2.4. Добавить события для вывода значений в разметке
//  2. Сделать итоговую разметку

const selectMaterial = document.querySelector('.select-item__material');
const selectMaterialOptions = selectMaterial.querySelector('option');
const selectColor = document.querySelector('.select-item__color');
const selectColorOptions = selectColor.querySelector('option');

const materialText = document.querySelector('.add-cover-text__material');
const colorText = document.querySelector('.add-cover-text__color');

function getMaterials () {
  const materials = [];
  
  const materialOptions = document.querySelectorAll('.select-item__material option');
 
  materialOptions.forEach((material) => materials.push(material.value));
  
  return materials;
}

function getColors () {
  const colors = [];
  
  const colorOptions = document.querySelectorAll('.select-item__color option');
 
  colorOptions.forEach((color) => colors.push(color.value));
  
  return colors;
}

const materials = getMaterials();
console.log(materials);
const colors = getColors();
console.log(colors);

function getMaterialsTextContent () {
  const materialsText = [];
  
  const selectMaterialOptions = selectMaterial.querySelectorAll('option');
  
  selectMaterialOptions.forEach((material) => materialsText.push(material.textContent));
  
  return materialsText;
}

function getColorsTextContent () {
  const colorsText = [];
  
  const selectColorOptions = selectColor.querySelectorAll('option');
  
  selectColorOptions.forEach((color) => colorsText.push(color.textContent));
  
  return colorsText;
}

const materialsTextContent = getMaterialsTextContent();
const colorsTextContent = getColorsTextContent();
console.log(materialsTextContent);
console.log(colorsTextContent);

function getObj (valuesArr, textArr) {
  const newObj = {}
  
  for (let i = 0; i < valuesArr.length; i++) {
    newObj[valuesArr[i]] = textArr[i]
  }
  
  return newObj;
}

const materialsObj = getObj(materials, materialsTextContent);
const colorsObj = getObj(colors, colorsTextContent);
console.log(materialsObj);
console.log(colorsObj);
