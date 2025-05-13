let nome: string = 'joao'
let idade: number = 12
let profissao: string = 'advogado'

let numeros: number[] = [1,2,3,4,5,6]

interface Pessoa {
  nome: string;
  idade: number
  profissao: string;
}

class PessoaCreate  implements Pessoa{
  nome: string; 
  idade: number;
  profissao: string;

  constructor(nome:string, idade: number, profissao: string){
    this.nome = nome;
    this.idade = idade
    this.profissao = profissao
  }

  greet(name:string) {
    console.log(`Hi, you're welcome ! ${name}`)
  }
}


const p1 = new PessoaCreate('joao',22,'advogado')
console.log('this is p1 data:',p1)