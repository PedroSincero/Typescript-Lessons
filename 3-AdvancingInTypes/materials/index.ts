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