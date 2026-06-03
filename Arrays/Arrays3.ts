// In array need to store different set of data

let studata2: (number | String | boolean )[] =[45,"Rajesh","ECE", 45512, true];



// any means it will allow any data types in the array 
let studata3: any =[45,"Rajesh","ECE", 45512, true];

console.log(studata2);

console.log(studata3);


// tupple means should follow same order the differenc is , and doesn't end with []
let studata4: [number , String , String ,number, boolean ] =[45,"Rajesh","ECE", 45512, true];
console.log(studata4)
console.log(studata4[1])
console.log(studata4.length)