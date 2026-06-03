let division:number[] =[10,23,34,55,3];

// add 7 to each index
let adding7: number[] = division.map(x =>x+7);

console.log(adding7);
// divided by three of each index
let div: number[]= division.map(x => x%3);
console.log(div);

// multiple by seven of each index
let multi7: number[] = division.map(x =>x*7);
console.log(multi7);