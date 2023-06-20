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


//lesson 4

//If we defines our array with only one type then it will 
//only allow that type of data into that array.

let names = ['batman','captain america','flash'];
names.push('iron man');
// names.push(20) will give error;

let mixed = ['goku',20,'batman',10];
mixed.push('vegeta');
mixed.push(30);

console.log(names);
console.log(mixed);

const data = {
    name : "vilas",
    age : 20,
}
console.log(data.name);
// data.name = 50//error

//lession 5

// explicit
//  let char : string;
 let num : number;

 //arrays 
 let ninja : string[];

 //union types

 let union: (string | number | boolean)[];

 //objects
 let ninObj : object;

 //lesson-6
//any
let anyType: any;
anyType = "vilas";
console.log(anyType);
anyType = 90;
console.log(anyType);

let anyArr : any[];

//lesson-7 Function;
  
let greet : Function;

greet = () => {
    console.log("hello world strikes back...");
}
const add = (a : number, b : number, c : number | string = 10) => {
    console.log(a + b);
    console.log(c);
}

function getUpper(val: string){
    return val.toUpperCase();
}

console.log(getUpper("string"));


function signUpUser(name: string, email: string, password : string){
    return {name,email,password};
}

console.log(signUpUser("vilas",'vilas.chavhan',"123"));

function login(name: string, email: string, isPaid: boolean = false){
    return {name,email,isPaid};
}
console.log(login("vilas","vilas.chavhan"));

//function signatures
let sayHi : (x: string, y: string) => void;

sayHi = (name: string, greeting: string) => {
    console.log(`${name} says ${greeting}`);
}

let calc : (a: number, b: number, c:string) => number;

calc = (num: number, numTwo: number, action: string) => {
    if(action === 'add'){
        return num+numTwo;
    }else{
        return num-numTwo;
    }
}

console.log(calc(5,10,''));

type hero = {
    name : string,
    universe : string,
}

let intro = (obj : hero )=> {
    return `I am ${obj.name} from ${obj.universe} universe `;
}

console.log(intro({name:"batman",universe : "dc"}));

//lesson-9 DOM

// const a = document.querySelector('a')!;

// if(a) console.log(a.href);

// console.log(a)

// const form = document.querySelector('.new-item-form') as HTMLFormElement;
// console.log(form.children);