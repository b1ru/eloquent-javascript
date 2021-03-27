countBs = x => {
    count=0;
    for (let i=0; i<x.length; i++){
        if (x[i]=="B") count++;
    }
    return count;
}

countChar = (x,c) => {
    // count how many <c> chars are in <x>
    count = 0;
    for (let i=0; i<x.length; i++){
        if (x[i]==c) count++;
    }
    return count;
}

countBs = x => countChar(x,"B");

console.log(countBs("Bad people don't like batman, as much as some Bother to."))
// -> 2