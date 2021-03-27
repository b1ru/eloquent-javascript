min = (a,b) => a<=b?a:b;

console.log(min(5,3)) 
console.log(min(3,5))
console.log(min(3,3))

book_solution = () => {
    function min(a, b) {
        if (a < b) return a;
        else return b;
      }
      
      console.log(min(0, 10));
      // → 0
      console.log(min(0, -10));
      // → -10
}