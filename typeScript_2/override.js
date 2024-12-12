/*

OverRiding ==> Changing the functionality
*/
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
var class1 = /** @class */ (function () {
    function class1() {
    }
    class1.prototype.dbFunc = function () {
        return "MYSQL Database Connected";
    };
    return class1;
}());
var class2 = /** @class */ (function (_super) {
    __extends(class2, _super);
    function class2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    class2.prototype.dbFunc = function () {
        //  return "MONGO DB Database is Connected"
        return _super.prototype.dbFunc.call(this);
    };
    return class2;
}(class1));
console.log(new class2().dbFunc());
