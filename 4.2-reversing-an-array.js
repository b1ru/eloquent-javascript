function reverseArray(x){
    y = [];
    for (let i=0; i<x.length; i++){
        y.push(x[x.length-1-i]);
    }
    return y;
}

function reverseArrayInPlace(x){
    for (let i=0; i<Math.floor(x.length/2); i++){
        let temp = x[i];
        x[i] = x[x.length-1-i];
        x[x.length-1-i] = temp;
    }
}

let x = [1,3,5,7,9];
console.log(reverseArray(x))
// -> [9,7,5,3,1]

console.log(x);
// [1,3,5,7,9];

reverseArrayInPlace(x);
console.log(x);
// [9,7,5,3,1]