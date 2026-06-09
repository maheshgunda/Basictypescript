let studentmarks1=90;

if(studentmarks1>35 && studentmarks1<60){
    console.log("Student passed");
}
else if(studentmarks1>61 && studentmarks1 <89){
    console.log("First class");
}
else if(studentmarks1<90){
    console.log("Student passed in first class")
}
else{
    console.log("Student failed");
}

// output --> student failed since condition not met as it is greather then 90.