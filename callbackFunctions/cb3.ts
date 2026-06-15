function dance(name:string, callback:Function){
    console.log("Hello welcome", name);
    callback();

}

function dancename(){
    console.log("Bharatnayam");
}

dance("Sangeeta",dancename);