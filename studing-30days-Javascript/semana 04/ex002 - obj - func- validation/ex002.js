// DEFINA UMA INTERFAC PARA UM OBJETO DE USUARIO E CRIE FUNCOES QUE UTILIZEM ESSA INTERFACE, INCLUINDO VALIDACAO DE DADOS
var Login = /** @class */ (function () {
    function Login(nome, idade, hasAccount) {
        this.nome = nome;
        this.idade = idade;
        this.hasAccount = hasAccount;
    }
    Login.prototype.greet = function (nome) {
        console.log("Welcome ".concat(Number(nome), ", fill free in here! Good news are waiting for you!"));
    };
    Login.prototype.hasAge = function (idade) {
        console.log("Nice!, you was born in ".concat(new Date().getFullYear() - idade, ", maybe ").concat(new Date().getFullYear() - idade - 1, " if still wasn't your birth!"));
    };
    return Login;
}());
new Login('Matheus', 22, true).greet('Matheus');
new Login('Matheus', 22, true).hasAge(22);
