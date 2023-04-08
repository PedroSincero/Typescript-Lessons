"use strict";
// 1 - number
let x = 10;
const y = 18.4156456343;
x = 80;
console.log(x);
console.log(typeof x);
console.log(y);
console.log(y.toPrecision(3));
// 2 - string
const firstName = "Pedro";
console.log(firstName.toLowerCase());
let fullName;
const lastName = "Henrique";
fullName = firstName + " " + lastName;
console.log(fullName);
console.log(typeof fullName);
// 3 - boolean
let a = false;
console.log(a);
console.log(typeof a);
// typescript não identifica 0 como valor false e 1 como valor true
// a = 0;
// 4 - inference e annotation
let ann = "Teste"; // annotation - informo qual é o tipo
let inf = "Teste"; // inference - não defino, deixo o codigo definir
// inf = 1  // typescript não perminte mudar, mesmo sendo inference
// ann = 1 // mesma reação com annotation
// 5 - pratica de config
// tsc --init
console.log('testando ');
