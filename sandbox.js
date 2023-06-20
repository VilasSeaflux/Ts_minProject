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
//lession 5
// explicit
//  let char : string;
var num;
//arrays 
var ninja;
//union types
var union;
//objects
var ninObj;
//lesson-6
//any
var anyType;
anyType = "vilas";
console.log(anyType);
anyType = 90;
console.log(anyType);
var anyArr;
//lesson-7 Function;
var greet;
greet = function () {
    console.log("hello world strikes back...");
};
var add = function (a, b, c) {
    if (c === void 0) { c = 10; }
    console.log(a + b);
    console.log(c);
};
function getUpper(val) {
    return val.toUpperCase();
}
console.log(getUpper("string"));
function signUpUser(name, email, password) {
    return { name: name, email: email, password: password };
}
console.log(signUpUser("vilas", 'vilas.chavhan', "123"));
function login(name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
    return { name: name, email: email, isPaid: isPaid };
}
console.log(login("vilas", "vilas.chavhan"));
//function signatures
var sayHi;
sayHi = function (name, greeting) {
    console.log(name + " says " + greeting);
};
var calc;
calc = function (num, numTwo, action) {
    if (action === 'add') {
        return num + numTwo;
    }
    else {
        return num - numTwo;
    }
};
console.log(calc(5, 10, ''));
var intro = function (obj) {
    return "I am " + obj.name + " from " + obj.universe + " universe ";
};
console.log(intro({ name: "batman", universe: "dc" }));
//lesson-9 DOM
// const a = document.querySelector('a')!;
// if(a) console.log(a.href);
// console.log(a)
// const form = document.querySelector('.new-item-form') as HTMLFormElement;
// console.log(form.children);
//lession 10
//classes and dom
var form = document.querySelector('.new-item-form');
var type = document.querySelector("#type");
var tofrom = document.querySelector('#toform');
var details = document.querySelector('#details');
var amount = document.querySelector("#amount");
form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsDate);
});
//class
var Invoice = /** @class */ (function () {
    // private  client : string;
    // public details : string;
    // readonly amount : number;
    //If you are using access modifiers then you can do the following
    function Invoice(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    // constructor(c:string,d: string, a: number){
    //     this.client = c;
    //     this.details = d;
    //     this.amount = a;
    // }
    Invoice.prototype.format = function () {
        return this.client + " owes $ " + this.amount + " for " + this.details;
    };
    return Invoice;
}());
var invOne = new Invoice('batman', 'wyane mension', 5000);
var invTwo = new Invoice('superman', 'nothing', 0);
// console.log(invOne.details)
var invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
console.log(invoices);
console.log(invOne.format());
console.log(invTwo.format());
