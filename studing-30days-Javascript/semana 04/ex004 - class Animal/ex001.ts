// IMPLEMENTE UMA CLASSE ANIMAL COM METODOS ABSTRATOS E CRIE SUBLCASSES CACHORRO E GATO QUE IMPLEMENTEM ESSES METODOS

abstract class Animal {
  abstract name: string

  display():void {
    console.log(this.name)
  }
}

class Cachorro extends Animal {
  name: string;
  latir: string;

  constructor(name:string, latir: string) {
    super();
    this.latir = latir;
    this.name = name;
  }
}


let dog: Animal = new Cachorro("Bob", "AUAU");
dog.display()


class Gato extends Animal {
  name: string;
  miar:string

  constructor(name:string, miar: string) {
    super()
    this.name = name
    this.miar = miar
  }
}

let cat = new Gato('Tobias', 'Miauuuuuuu')
cat.display()