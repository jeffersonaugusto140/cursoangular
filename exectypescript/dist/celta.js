"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var carro_1 = require("./carro");
var Celta = /** @class */ (function (_super) {
    __extends(Celta, _super);
    function Celta() {
        return _super.call(this, 'Chevrolet Celta', 75) || this;
    }
    return Celta;
}(carro_1.Carro));
exports.Celta = Celta;
