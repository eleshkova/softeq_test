const min = 1, max = 1000000;
const number = Math.floor(min+Math.random()*(max+1-min));
console.log(number);
function solve(start, end){
    const middle = Math.floor((start+end)/2);
    const res = verify(middle);
    if (res<0){
        return solve(middle, end);
    } else if (res>0){
        return solve(start, middle);
    } return middle;
}
function verify(guess){
    if (guess===number){
        return 0;
    } else if (guess<number){
        return -1;
    } else {
        return 1;
    }
}
console.log(solve(min, max));
