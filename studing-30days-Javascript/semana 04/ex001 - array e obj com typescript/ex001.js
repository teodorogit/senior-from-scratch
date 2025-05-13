var nome = 'joao';
var idade = 12;
var profissao = 'advogado';
var numeros = [1, 2, 3, 4, 5, 6];
var PessoaCreate = /** @class */ (function () {
    function PessoaCreate(nome, idade, profissao) {
        this.nome = nome;
        this.idade = idade;
        this.profissao = profissao;
    }
    PessoaCreate.prototype.greet = function (name) {
        console.log("Hi, you're welcome ! ".concat(name));
    };
    return PessoaCreate;
}());
var p1 = new PessoaCreate('joao', 22, 'advogado');
console.log('this is p1 data:', p1);
