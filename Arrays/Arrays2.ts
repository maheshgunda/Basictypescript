let stdmarks:number[] =new Array(6);

stdmarks[0]=10;
stdmarks[1]=20;
stdmarks[2]=30;
stdmarks[3]=40;
stdmarks[4]=50;
stdmarks[5]=60;

console.log(stdmarks);
console.log(stdmarks[2]);
console.log(stdmarks.length);

// length of the array is six but add two array: it will not throw any expection if we add 
stdmarks[6]=70;
stdmarks[7]=80;

console.log(stdmarks);
