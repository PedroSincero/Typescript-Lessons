// 1 - arrays 

let numbers: number[] = [1,2,3];

numbers.push(5);

console.log(numbers[2]);

numbers = [];

// numbers = "oi";

let names: string[] = ['oibbo', 'oi', 'oo', 'helow'];

names.push('dsd');

// 2 - outra sintaxe array

const num: Array<number> = [100, 200];

num.push(300);

console.log(num);

// num.push('131')

console.log(num[0]);

// 3 - any 

const arr1: any = [1, 'teste', true, [], {name: 'pedro'}];

console.log(arr1);

// 4 - parametros de função/ tipagem

function soma(a: number, b: number) {
  console.log(a + b);
}

soma(1,1);

// soma("a","b");

// 5  - retorno de função

function greeting(name: string): string {
  return `oi ${name}`
}

// 6 - função anonima

function greet(name: string, callback: (name: string) => void): void {
  console.log(`Hello, ${name}!`);
  callback(name);
}

greet("John", (name) => {
  console.log(`Nice to meet you, ${name}!`);
});

// 7 - tipos de objetos

function passCordinates(coord: {x: number, y: number}) {
  console.log('X coordinates: ' + coord.x);
  console.log('Y coordinates: ' + coord.y);
}

const objCoord = { x: 329, y: 84.2};

passCordinates(objCoord);

const pessoaObj:{name: string, subNome: string} = { name: 'pedro', subNome:'henrique'};

// 8 - props opcionais

function showNumbers(a: number, b: number, c?: number) {
  console.log('A: ' + a);
  console.log('B: ' + b);
  if(c) console.log('C: ' + c);
}

showNumbers(1,2,3);
showNumbers(1,2);

// 9  - validando argumentos opcional

function advancedGreeting(firstName: string, lastName?: string) {
  // early return
  if(!lastName) return `OLá, ${firstName} ${lastName}`;

  return `Olá, ${firstName}, tudo bem ?`;
}

advancedGreeting('pedro');
advancedGreeting('pedro', 'henrique');

// 10 - union type

function showBalance(balance: string | number) {
  console.log(`O saldo da conta é: ${balance}`);
};

showBalance(100);
showBalance("500");

const arr2: Array<number | string | boolean> = [1, 'teste', true];

// 11 - validando tipo, avançando em union types

function showUserRole(role: boolean | string) {
  if(typeof role === 'boolean') return 'Usuário não aprovado!';

  return `A função do usuário é: ${role}`;
};

showUserRole(false);
showUserRole('user');

// 12 - type alias

type ID = string | number;

function showId(id: ID) {
  console.log(`O id é: ${id}`);
}

showId(1);
showId('200')

// 13 - interface

interface Point {
  x: number,
  y: number,
  z: number
};

function showCoords({x, y, z}: Point) {
  console.log(`x: ${x} y: ${y} z: ${z}`);
}

const coordObj:Point = {
  x: 10,
  y: 20,
  z: 30
}

showCoords(coordObj);

// 14 - interface x type alias

// interface interage de forma parecida como var/let
interface Person {
  name: string
}

interface Person {
  age: number
}

const somePerson: Person = { name: 'Pedro', age: 30};

console.log(somePerson);

// ja o type nao permite
type PersonType = {
  name: string
}

// type PersonType = {
//   age: number
// }

// 15 - literal types

let test: 'teste';

test = 'teste'

console.log(test);

function showDirections(direction: 'left' | 'right' | 'center') {
  console.log(`A direção é ${direction}` );
}

showDirections('left');

// showDirections('top');