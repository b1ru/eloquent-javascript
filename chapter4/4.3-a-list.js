function arrayToList(a){
    // convert array <a> to list <l>
    let l = {}; 
    let node = l;
    
    // nodes 0 to length-2
    for (let i=0; i<a.length-1; i++){
        node.val = a[i];
        node.rest = {};
        node = node.rest;
    }

    // last node
    node.val = a[a.length-1];
    node.rest = null;

    return l;
}

function listToArray(l){
    // convert list <l> to array <a>
    let a = [];
    let node=l;
    while (node != null){
        a.push(node.val);
        node=node.rest;
    }
    return a;
}

function prepend(l, item){
    // add <item> to the front of the list <l>
    l2 = {};
    l2.val = item;
    l2.rest = l;
    return l2;
}

function nth(l, n){
    // return the <n>th item of list <l>
    if (n==0) return l.val;
    if (l.rest==null) return;
    return nth(l.rest,n-1);
}

let a = [1,2,3];
console.log(a);
// -> [1,2,3]

a = arrayToList(a);
b = prepend(a,0);

console.log(a);
console.log(b);

b = listToArray(b);
console.log(b);
// -> [0,1,2,3]

b = arrayToList(b);
console.log(nth(b,3));
// -> 2