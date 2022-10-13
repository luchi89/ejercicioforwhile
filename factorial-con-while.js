//factorial

let i = 0;
let max = 10;
let factorial = 1

while (i < max) {
    i++;
   factorial = factorial * i;
    if (i === max)
    break;
    
}
console.log('resultado', factorial)

