let employee:string ="mahesh";

console.log(employee);
// to find the length of the string
console.log(employee.length);
// uppercase
console.log(employee.toUpperCase());
// lower case
console.log(employee.toLowerCase());
// print the index value
console.log(employee.indexOf("h"));
// print the character index value
console.log(employee.charAt(3));
// print last index
console.log(employee.lastIndexOf("h"));
// replace 
console.log(employee.replace("h","a"));
// replace all\
console.log(employee.replaceAll("mahesh","maheshg"));

let employee1:string =" mahesh ";
console.log("employee1 string length: "+employee1.length);
// trim 
console.log(employee1.trim());
// starts with
console.log(employee1.startsWith("a"));
// ends with
console.log(employee1.endsWith("hg"));
// give the string between 4,8
console.log(employee1.substring(2,5));
// another method to call give the string between 4,8 ---> slice
console.log("slice methods1: " +employee1.slice(2,5));
