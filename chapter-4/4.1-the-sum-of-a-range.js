range = (start, end, step=1) => {
    let x = [];
    
    if (step>0){
        while (start <= end){
            // x = x.concat([start])
            x = [...x, start]
            start += step;
        }
    } else if (step < 0){
        while (start >= end){
            // x = x.concat([start])
            x = [...x, start]
            start += step;
        }
    }
    
    return x;
}

sum = x => {
    let sum = 0;
    for (item of x){
        sum += item;
    }
    return sum;
}

console.log(range(5,17));
// -> [5, 6, ..., 17]

console.log(range(5,10,2));
// -> [5, 7, 9]

console.log(range(10,1,-1));
// -> [10, 9, 8, ..., 2, 1]

console.log(range(10,1));
// -> []

console.log(sum(range(1,10)));
// -> 55

book_solution = () => {
    function range(start, end, step = start < end ? 1 : -1) {
        let array = [];
      
        if (step > 0) {
          for (let i = start; i <= end; i += step) array.push(i);
        } else {
          for (let i = start; i >= end; i += step) array.push(i);
        }
        return array;
      }
      
      function sum(array) {
        let total = 0;
        for (let value of array) {
          total += value;
        }
        return total;
      }
      
      console.log(range(1, 10))
      // → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
      console.log(range(5, 2, -1));
      // → [5, 4, 3, 2]
      console.log(sum(range(1, 10)));
      // → 55
}

book_solution();