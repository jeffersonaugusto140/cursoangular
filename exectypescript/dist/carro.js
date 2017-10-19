"use strict";
exports.__esModule = true;
var Carro = /** @class */ (function () {
    function Carro(nome, potencia) {
        this.nome = nome;
        this.potencia = potencia;
    }
    Carro.prototype.andar = function () {
        console.log("Pot\u00EAncia - " + this.nome + ": " + this.potencia);
    };
    return Carro;
}());
exports.Carro = Carro;
