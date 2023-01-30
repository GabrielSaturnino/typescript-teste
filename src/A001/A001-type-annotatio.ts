/* eslint-disable */

// Tipos basicos
let nome: string = 'Gabriel';
let idade: number = 10;
let sexo: boolean = true;
let symbol: symbol = Symbol('Qualquer-simbolo');

// Arrays
let arrayNumbers: Array<number> = [10, 20, 30];
let arrayStrings: Array<string> = ["a", "b"];
let arrayNumbers2: number[] = arrayNumbers;
let arrayStrings2: string[] = arrayStrings;

// Objetos
let pessoa: {
  name: string,
  age: number,
  sexo?: boolean //"?" deixa a chave sendo opicional
} = { name: nome, age: idade };

console.log(pessoa.name);

// Funções
function soma(x: number, y: number) {
  return x + y;
}
const soma2: (x: number, y: number) => number = (x, y) => x + y;
console.log(soma2(10, 15));

// tipo any -- utiliza em ultimo caso...
function showmsg(msg: any) {
  return msg;
}

console.log(showmsg([1, 2, 3]));
console.log(showmsg('Olá'));
console.log(showmsg(1));

//tipo void
function semretorno(...args: string[]): void {
  console.log(args.join(' '));
}

semretorno('Gabriel', 'Algo');
