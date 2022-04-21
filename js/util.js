function getValuesArray (selector) {
    const newArr = [];
    
    const arrayOptions = document.querySelectorAll(selector);
   
    arrayOptions.forEach((option) => newArr.push(option.value));
    
    return newArr;
  }

  function getTextContentArray (selector) {
    const newArr= [];
    
    const arrayOptions = document.querySelectorAll(selector);
    
    arrayOptions.forEach((option) => newArr.push(option.textContent));
    
    return newArr;
  }

function getObj (valuesArr, textArr) {
    const newObj = {}
    
    for (let i = 0; i < valuesArr.length; i++) {
      newObj[valuesArr[i]] = textArr[i]
    }
    
    return newObj;
  }

  export {getValuesArray, getTextContentArray, getObj};
