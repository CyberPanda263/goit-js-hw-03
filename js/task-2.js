function makeArray(firstArray, secondArray, maxLength) {

    let therdArray = [];
    for(let i = 0; i < firstArray.length; i++){
        if(i <= maxLength) {
            therdArray[i] = firstArray[i];
        } else {
            return therdArray.slice(0, maxLength);
            break;
        }
    }
    
    if(therdArray.length < maxLength){
        const addSecondArrayStart = therdArray.length;
        let secondArrayIndex = 0;
        for(let i = addSecondArrayStart; i < maxLength; i++){
            therdArray[i] = secondArray[secondArrayIndex];
            secondArrayIndex++;
        }
    }
    return therdArray;
}

console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)); // ["Mango", "Poly", "Ajax"]
console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3)); // ["Mango", "Ajax", "Chelsea"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2)); // ["Earth", "Jupiter"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)); // []