const firstName = 'pedro';
const anotherName = 1;
const x = true;

function greeting(name: string) {
  console.log('olá' + name);
  
}

greeting(firstName);
// greeting(anotherName);
// greeting(x);
// para compilar: tsc index.ts