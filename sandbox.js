var input = document.querySelectorAll("input");
console.log(input);
input.forEach(function (ele) { return console.log(ele); });
//lesson 3
var char = 'batman';
char = 'bruce wyane';
var batman = "bruce Wyane";
console.log(batman, "is the batman");
var bw = true;
console.log(batman, "is the batman??", bw);
//we can avoid ': type', typscript will autometically inference or defines types.
var stringChar = 'this is string type....';
console.log(stringChar);
function pi(num) {
    return num * Math.PI;
}
// console.log(pi("hasd")); error
console.log(pi(10));
//lesson 4
//If we defines our array with only one type then it will 
//only allow that type of data into that array.
var names = ['batman', 'captain america', 'flash'];
names.push('iron man');
// names.push(20) will give error;
var mixed = ['goku', 20, 'batman', 10];
mixed.push('vegeta');
mixed.push(30);
console.log(names);
console.log(mixed);
var data = {
    name: "vilas",
    age: 20
};
console.log(data.name);
// data.name = 50//error
