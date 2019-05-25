function getAlphabet() {
    const arr = [];
    for (let i = 65; i<91; ++i){
      arr.push(String.fromCharCode(i));
    }
    return arr;
}
console.log(getAlphabet());