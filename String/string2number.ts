let s2:string="mahesh12@1238939@99+_MA";

/* | Regex       | Meaning                             |
| ----------- | ----------------------------------- |
| `/[A-Z]/g`  | Uppercase letters                   |
| `/[a-z]/g`  | Lowercase letters                   |
| `/[0-9]/g`  | Digits                              |
| `/[^A-Z]/g` | Everything except uppercase letters |
| `/./g`      | Any character except newline        |
| `/[^]/g`    | Any character including newline     | */

// syntax: console.log(s2.replace[/[]/g, ""]) --> g stands for global

console.log(s2);

console.log(s2.replace (/[A-Z]/g,"^^^"));

console.log(s2.replace (/[A-Za-z]/g,"^^^"));

console.log(s2.replace(/[^]/g, "&&"));

// remove special characters
console.log(s2.replace(/[0-9A-Za-z]/g,""))