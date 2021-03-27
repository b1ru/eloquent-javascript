isEven = n => {
    if (n==0){
        return true;
    } 
    
    if (n==1){
        return false;
    } 

    return isEven(n-2)
}

console.log(isEven(17));
console.log(isEven(224));

bookSolution = () => {
    // Ζητάει για θετικούς αριθμούς, αλλά στη λύση πιάνει και την περίπτωση των αρνητικών.
    function isEven(n) {
        if (n == 0) return true;
        else if (n == 1) return false;
        else if (n < 0) return isEven(-n);
        else return isEven(n - 2);
      }
      console.log(isEven(50));
      // → true
      console.log(isEven(75));
      // → false
      console.log(isEven(-1));
      // → false
}