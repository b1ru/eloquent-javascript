function deepEqual(a,b){
    if (typeof a != typeof b) return false;
    if (typeof a != 'object') return a === b;
    if (a === null && b === null) return true;
    if (a === null || b === null) return false;

    let keys_a = Object.keys(a);
    let keys_b = Object.keys(b);
    if (keys_a.length != keys_b.length){
        console.log("Different number of properties.");
        return false;
    }
    // objects have the same number of keys
    length = keys_a.length;

    for (let prop of keys_a){
        if (!keys_b.includes(prop)){
            console.log("Different properties.");
            return false;
        }
        if (!deepEqual(a[prop], b[prop])){
            console.log("Property '" + prop + "' not the same.");
            return false;
        }
    }
  
    return true;
}
function deepEqual2(a, b) {
    if (a === b) return true;
    
    if (a == null || typeof a != "object" ||
        b == null || typeof b != "object") return false;
    
    let keysA = Object.keys(a), keysB = Object.keys(b);
    
    if (keysA.length != keysB.length) return false;
    
    for (let key of keysA) {
        if (!keysB.includes(key) || !deepEqual(a[key], b[key])) return false;
    }
    
    return true;
}

// same primitive, same value
console.log(deepEqual(5,5));
// -> true

// same primitive, different value
console.log(deepEqual(5,4));
// -> false

// different primitive, "same" value
console.log(deepEqual(5,"5"));
// -> false

// different primitive, different value
console.log(deepEqual("hey", 3));
// -> false

let a = [7,8,9];
let b = [7,8,9];

// equal arrays
console.log(deepEqual(a,b));
// -> true

a = [1,2,3,4];
b = [1,2,3];

// arrays wifth different length
console.log(deepEqual(a,b));
// -> false

// equal objects
a = {a:"hey", b:"you"}
b = {a:"hey", b:"you"}
console.log(deepEqual(a,b))
// -> true

// equal objects, but properties are not in the same order
a = {a:"hey", b:"you"};
b = {b:"you", a:"hey"}
console.log(deepEqual(a,b));
// -> true

a = {a:{c:"what", d:"up"}, b:"yo"};
b = {a:{c:"what", d:"up"}, b:"yo"};
console.log(deepEqual(a,b))
// -> true

// unequal objects
a = {a:{c:"what", d:"up"}, b:"yo"};
b = {a:{c:"what", d:"down"}, b:"yo"};
console.log(deepEqual(a,b))
// -> false

// null and null
console.log(deepEqual(null,null));
//-> true 

// object and null
a = {a:{c:"what", d:"up"}, b:"yo"};
console.log(deepEqual(a,null));
// -> false

book_solution = () => {
    function deepEqual(a, b) {
        if (a === b) return true;
        
        if (a == null || typeof a != "object" ||
            b == null || typeof b != "object") return false;
      
        let keysA = Object.keys(a), keysB = Object.keys(b);
      
        if (keysA.length != keysB.length) return false;
      
        for (let key of keysA) {
          if (!keysB.includes(key) || !deepEqual(a[key], b[key])) return false;
        }
      
        return true;
    }

    let obj = {here: {is: "an"}, object: 2};
    console.log(deepEqual(obj, obj));
    // → true
    console.log(deepEqual(obj, {here: 1, object: 2}));
    // → false
    console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
    // → true

    // equal objects, but properties are not in the same order
    a = {a:"hey", b:"you"};
    b = {b:"you", a:"hey"}
    console.log(deepEqual(a,b));
    // -> true

    console.log(deepEqual(null,null));
    // -> true

    a = {a:{c:"what", d:"up"}, b:"yo"};
    b = {a:{c:"what", d:"up"}, b:"yo"};
    console.log(deepEqual(a,b))
    // -> true
}

// book_solution();