let num:number=2;

let isprime=true;

if(num<=1){
    isprime=false;
}else{
    for(let i=2;i<num;i++){
    if(num % i==0){
        isprime=false;
        break;
    }
}
}
if(isprime  ){
    console.log("prime number");
}
else{
    console.log("Not a prime number");
}