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

// tipo objeto
const objetoA: {
  readonly chaveA: string; //readonly: apenas para leitura, não pode alterar
  chaveB: string;
  chaveC?: string;
  [key: string]: unknown; //index signature para criar mais chaves no obj
} = {
  chaveA: 'valor A',
  chaveB: 'valorB',
};

//objetoA.chaveA = "chave alterada!";
objetoA.chaveC = "chave";
objetoA.chaveD = 'Nova chave!';

//Arrays <T> - T[]
function multiplicaArgs(...args: number[]): number {
  return args.reduce((ac, valor) => ac * valor, 1);
}

function concatenaString(...args: Array<string>): string {
  return args.reduce((ac, valor) => ac + valor).toLowerCase();
}

const result = multiplicaArgs(1, 2, 3);
const concatenacao = concatenaString('A', 'B', 'C');
console.log(result);
console.log(concatenacao);

//Tipo Tupla
const dadosCliente: readonly [number, string] = [1, "Jose"];
const dadosClientes2: [number, string, string] = [1, 'luiz', 'vieira'];
const dadosClientes3: [number, string, string?] = [1, 'luiz'];
const dadosClientes4: [number, string, ...string[]] = [1, 'luiz'];

dadosCliente[0] = 100;
dadosCliente[1] = 'Carlos';

console.log(dadosCliente);
console.log(dadosClientes2);

// Brincadeira
function creatPerson(firstName: string, lastName?: string): {
  firstName: string,
  lastName?: string,
} {
  return {
    firstName,
    lastName,
  };
}

const person = creatPerson("Gabriel", "Saturnino");
console.log(person);

function squareOf(x: any) {
  if (typeof x === 'number') return x * x;
  return null;
}

const squareoftwo = squareOf(2);

function criaErro(): never {
  throw new Error("Error");
}

// Enum
enum Cores {
  VERMELHO = 100,
  AZUL = 'AZUL',
  AMARELO = 200,
  ROXO,
};

console.log(Cores);

// Unknow
let num: unknown; //Joga um erro se fizer operações sem checar o tipo!

num = 10;
num = 500;
num = 'Gab';
num = 20;
const y2 = 800

if (typeof num === 'number') console.log(num + y2);
