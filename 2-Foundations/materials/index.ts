// 1 - number
let x: number = 10;


const y:number = 18.4156456343

x = 80;
console.log(x);

console.log(typeof x);
console.log(y);

console.log(y.toPrecision(3));

// 2 - string

const firstName: string = "Pedro";

console.log(firstName.toLowerCase());

let fullName: string;

const lastName: string = "Henrique"

fullName = firstName + " " + lastName;

console.log(fullName);
console.log(typeof fullName);

// 3 - boolean

let a: boolean = false

console.log(a);
console.log(typeof a);

// typescript não identifica 0 como valor false e 1 como valor true
// a = 0;

// 4 - inference e annotation

let ann:string = "Teste" // annotation - informo qual é o tipo

let inf = "Teste" // inference - não defino, deixo o codigo definir

inf = 1  // typescript não perminte mudar, mesmo sendo inference

ann = 1 // mesma reação com annotation