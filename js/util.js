function getArray (selector) {
    const arr = [];
    
    const arrayOptions = document.querySelectorAll(selector);
   
    arrayOptions.forEach((option) => arr.push(option.value));
    
    return arr;
  }

  function getArrayTextContent (selector) {
    const arr= [];
    
    const arrayOptions = document.querySelectorAll(selector);
    
    arrayOptions.forEach((option) => arr.push(option.textContent));
    
    return arr;
  }

function getObj (valuesArr, textArr) {
    const newObj = {}
    
    for (let i = 0; i < valuesArr.length; i++) {
      newObj[valuesArr[i]] = textArr[i]
    }
    
    return newObj;
  }

  export {getArray, getArrayTextContent, getObj};
