let s1= new Set();
s1.add("Mahesh");
s1.add(98989);
s1.add(true);
s1.add("mahesh");
s1.add("Mahesh");

// set doesn't allow dulicates
// to call a set we need add method



console.log(s1);
// to verify the valus is present or not
console.log(s1.has("Mahesh"));  // will display true else false

// to delete the data
s1.delete(true);

// to delete all the data at once.
s1.clear();
