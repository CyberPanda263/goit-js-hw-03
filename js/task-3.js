function filterArray(numbers, value) {
    filterNumbers = [];
    for(let i = 0; i < numbers.length; i++){
        if(numbers[i] > value) {
            filterNumbers[i] = numbers[i];
        }
    }
    if(!(filterNumbers.length === 0)){
    const filterNumbersTrue = filterNumbers.filter(element => element !== null);
    return filterNumbersTrue;
    }else{
        return filterNumbers;
    }
}

console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]
/*
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

let array = [];
    for(let i = 0; i < 100 ; i++) {
        array[i] = getRandomInt(100);
    }

console.log(filterArray(array, 90)); */