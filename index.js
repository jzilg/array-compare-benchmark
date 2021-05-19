const get_differences_from_arrays = require('nodejs-array-different')
const { compareArrays, compareArrays1, compareArrays2, compareArrays3 } = require('./compareArrays')

const ARRAY_LENGTH = 10000

function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

const generateArray = () => {
    return shuffle([...Array(ARRAY_LENGTH).keys()]);
}

console.time('Dummy Data generated')
const array0 = generateArray();
const array1 = generateArray().map((entry, index) => entry + ARRAY_LENGTH/2)
console.timeEnd('Dummy Data generated')

console.time('get_differences_from_arrays')
let res = get_differences_from_arrays(array0, array1);
console.timeEnd('get_differences_from_arrays')
console.log(res.inside_ab.length);
console.log(res.just_in_a.length);
console.log(res.just_in_b.length);

console.time('compareArrays')
res = compareArrays(array0, array1)
console.timeEnd('compareArrays')
console.log(res.inside_ab.length);
console.log(res.just_in_a.length);
console.log(res.just_in_b.length);

console.time('compareArrays1')
res = compareArrays1(array0, array1)
console.timeEnd('compareArrays1')
console.log(res.inside_ab.length);
console.log(res.just_in_a.length);
console.log(res.just_in_b.length);

console.time('compareArrays2')
res = compareArrays2(array0, array1)
console.timeEnd('compareArrays2')
console.log(res.inside_ab.length);
console.log(res.just_in_a.length);
console.log(res.just_in_b.length);

console.time('compareArrays3')
res = compareArrays3(array0, array1)
console.timeEnd('compareArrays3')
console.log(res.inside_ab.length);
console.log(res.just_in_a.length);
console.log(res.just_in_b.length);
