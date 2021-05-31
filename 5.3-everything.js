// function every(arr, func){
//     for (let x of arr){
//         if (!func(x)){
//             return false;
//         }
//     }
//     return true;
// }

function every(arr, func){
    return !arr.some((x)=>!func(x));
}

a1 = [1,5,7]
a2 = [7,8,11]

function foo(x){
    return x > 5;
}

console.log(every(a1,foo))
// -> false
console.log(every(a2,foo))
// -> true