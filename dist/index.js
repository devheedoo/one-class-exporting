"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var OneClassExporting = /** @class */ (function () {
    function OneClassExporting(property1, property2) {
        this._property1 = '';
        this._property2 = 0;
        if (property1)
            this._property1 = property1;
        if (property2)
            this._property2 = property2;
    }
    OneClassExporting.prototype.setProperty1 = function (property1) {
        this._property1 = property1;
    };
    OneClassExporting.prototype.setProperty2 = function (property2) {
        this._property2 = property2;
    };
    OneClassExporting.prototype.toString = function () {
        return this._property1 + " " + this._property2;
    };
    return OneClassExporting;
}());
exports.default = OneClassExporting;
