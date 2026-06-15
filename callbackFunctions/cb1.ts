// A callback function is a function that is passed as an
//  argument to another function and is executed later.

function players(name:string, callback:Function){
    console.log("Hello", name);
    callback();
}

function game(){
    console.log("football");
}
// calling the function

players("Ronaloda",game);