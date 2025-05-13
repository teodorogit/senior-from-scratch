// IMPLEMENTE UMA CLASSE ANIMAL COM METODOS ABSTRATOS E CRIE SUBLCASSES CACHORRO E GATO QUE IMPLEMENTEM ESSES METODOS
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.display = function () {
        console.log(this.name);
    };
    return Animal;
}());
var Cachorro = /** @class */ (function (_super) {
    __extends(Cachorro, _super);
    function Cachorro(name, latir) {
        var _this = _super.call(this) || this;
        _this.latir = latir;
        _this.name = name;
        return _this;
    }
    return Cachorro;
}(Animal));
var dog = new Cachorro("Bob", "AUAU");
dog.display();
var Gato = /** @class */ (function (_super) {
    __extends(Gato, _super);
    function Gato(name, miar) {
        var _this = _super.call(this) || this;
        _this.name = name;
        _this.miar = miar;
        return _this;
    }
    return Gato;
}(Animal));
var cat = new Gato('Tobias', 'Miauuuuuuu');
cat.display();
