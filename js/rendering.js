import {COLORS, HEX_COLORS, MATERIALS} from './mock.js';

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
  