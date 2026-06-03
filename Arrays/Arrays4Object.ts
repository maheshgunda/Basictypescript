let animals1:string[] =["goat","monkey","tiger","lion","deer"];
console.log(animals1);

console.log(animals1[1]);

let animals2:string[] =["elephant","cheeta","dog"];

//conact the animal 1 and animal 2

console.log(animals1.concat(animals2))

// find the index of lion
console.log(animals1.indexOf("lion"))

let contact:string[]= animals1.concat(animals2);
console.log(contact)

// Add element at starting of the index --> unshift
animals1.unshift("crocodile");
console.log(animals1)

// Add element at ending of the index --> push
animals1.push("cat");
console.log(animals1)

// insert element at middle of the index --> splice
animals1.splice(3,0,"hen","yak");
console.log(animals1)

// delete the elemet at staring index --> shift
animals1.shift();
console.log(animals1);

// delete the elemet at last index --> pop
animals1.pop();
console.log(animals1);

// delete the elemet from the particular last index --> splice
animals1.splice(3,4);
console.log(animals1)

// delete the elemet from the  index 2 --> splice
animals1.splice(2);
console.log(animals1)


// delete the elemet from the  index 2 and insert new element --> splice
animals1.splice(3,1,"adding 1", "adding 2", "adding 3", "adding 4")
console.log(animals1)

// extarcting the sub string of the array to new array --> slice (3, 5-1)
let sub1:string[]= animals1.slice(3,5);
console.log(animals1)
console.log(sub1)