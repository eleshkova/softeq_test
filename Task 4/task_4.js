function summarizeIntegers(arr) {
    const newArr = arr.filter(item => Number.isInteger(+item));
    const sum = newArr.reduce((sum, value)=> sum+=+value, 0);
    return sum;
}
console.log(summarizeIntegers(['1', 'sdas', '2.3', '23']));