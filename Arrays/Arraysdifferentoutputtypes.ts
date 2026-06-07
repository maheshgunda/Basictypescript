let animals:string[]= ["lion","tiger","deer","cheeta"];

console.log(animals);
// to add the element in first index --> unshift
animals.unshift("elephant");
// to add the element in last index -->push
animals.push("monkey");
// to delete the element in first index --> shift
animals.shift();
// to delete the element in last index --> pop
animals.pop();

console.log(animals);
// conacte the two string
let birds:string[]= ["parrot","crow"];
console.log(birds);

console.log(animals.concat(birds));