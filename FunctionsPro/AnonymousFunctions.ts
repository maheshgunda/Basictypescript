function playername(name:string):void{

    console.log(name);
}

playername("Rolanda");

// calling function under another function is called as Anonymous Function.

function playergame(game:(name:string)=> void):void{
    game("Football");
}
playergame(playername);