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
