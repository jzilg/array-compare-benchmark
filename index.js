const get_differences_from_arrays = require('nodejs-array-different')
const { compareArrays, compareArrays1 } = require('./compareArrays')

const ARRAY_LENGTH = 2000

const generateArray = () => {
    return [...Array(ARRAY_LENGTH)]
}

console.time('Dummy Data generated')
const array0 = generateArray().map((entry, index) => ARRAY_LENGTH - index)
const array1 = generateArray().map((entry, index) => ARRAY_LENGTH - index + ARRAY_LENGTH)
console.timeEnd('Dummy Data generated')

console.time('get_differences_from_arrays')
get_differences_from_arrays(array0, array1)
console.timeEnd('get_differences_from_arrays')

console.time('compareArrays')
compareArrays(array0, array1)
console.timeEnd('compareArrays')

console.time('compareArrays1')
compareArrays1(array0, array1)
console.timeEnd('compareArrays1')
