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
var mean_class = /** @class */ (function () {
    function mean_class() {
    }
    mean_class.prototype.mean = function () {
        return "MEAN Stack Development";
    };
    return mean_class;
}());
var mern_class = /** @class */ (function (_super) {
    __extends(mern_class, _super);
    function mern_class() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    mern_class.prototype.mern = function () {
        return "MERN Stack Development";
    };
    return mern_class;
}(mean_class));
var mevn_class = /** @class */ (function (_super) {
    __extends(mevn_class, _super);
    function mevn_class() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    mevn_class.prototype.mevn = function () {
        return "MEVN Stack Development";
    };
    return mevn_class;
}(mern_class));
var obj = new mevn_class();
console.log(obj.mean());
console.log(obj.mern());
console.log(obj.mevn());
