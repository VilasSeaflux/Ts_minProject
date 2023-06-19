const input = document.querySelectorAll("input");
console.log(input);

input.forEach(ele => console.log(ele));

//lesson 3

var char = 'batman';
char = 'bruce wyane';

var batman : string = "bruce Wyane";
console.log(batman,"is the batman"); 

var bw : boolean = true;
console.log(batman,"is the batman??",bw);

//we can avoid ': type', typscript will autometically inference or defines types.

var stringChar = 'this is string type....';
console.log(stringChar);


function pi(num : number){
    return num * Math.PI;
}

// console.log(pi("hasd")); error
console.log(pi(10));