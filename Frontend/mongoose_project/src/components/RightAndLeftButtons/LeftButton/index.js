const a = 0;
function first() {
     const b = a ;
    return function second() {
        return b;
    }
}