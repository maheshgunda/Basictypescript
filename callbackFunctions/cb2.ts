function cricket(name:String, callback:Function){
    console.log("hello", name);
    callback();

}

function playername(){
    console.log("Kohil");
}
// calling the function
cricket("Criketplayer",playername);