let m1= new Map();

m1.set("key","value");
m1.set(23,33);
m1.set(true,false);
m1.set(true,false);
m1.set(22,"value");
m1.set("Jack","Rosey");
m1.set("Hello","world");

console.log(m1);

// to get the value 
console.log(m1.get(23));

// to delete
m1.delete(23);

// to check the size of the map

console.log(m1.size);