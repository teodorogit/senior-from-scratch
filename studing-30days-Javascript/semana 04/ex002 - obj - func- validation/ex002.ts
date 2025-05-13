// DEFINA UMA INTERFAC PARA UM OBJETO DE USUARIO E CRIE FUNCOES QUE UTILIZEM ESSA INTERFACE, INCLUINDO VALIDACAO DE DADOS


interface validationAccess {
  nome: string
  idade: number;
  hasAccount: boolean;
}

class Login<validationAccess> {
  nome: string;
  idade:number;
  hasAccount:boolean;

  constructor(nome: string, idade:number, hasAccount: boolean ) {
    this.nome = nome
    this.idade = idade
    this.hasAccount = hasAccount
  }

  greet(nome: string) {
    console.log(`Welcome ${Number(nome)}, fill free in here! Good news are waiting for you!`)
   }

  hasAge(idade:number) {
    console.log(`Nice!, you was born in ${new Date().getFullYear() - idade}, maybe ${new Date().getFullYear() - idade -1} if still wasn't your birth!`)
  }

  // hasAccount()<T> {
  //   return arg
  // }

}

 new Login('Matheus', 22, true).greet('Matheus')
 new Login('Matheus', 22, true).hasAge(22)

