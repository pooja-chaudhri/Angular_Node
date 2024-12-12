/*


OverLoading and OverRiding ==> Polymorphism

*/
var class1 = /** @class */ (function () {
    function class1() {
    }
    class1.prototype.my_func = function (arg1, arg2) {
        console.log("Argument1 ==> ", arg1);
        console.log("Argument2 ==> ", arg2);
    };
    return class1;
}());
/*
let obj:class1=new class1();
obj.my_func(10,10);

obj.my_func("Hello","EveryOne");

obj.my_func(true,false);*/
new class1().my_func(10, 10);
new class1().my_func("Hello", "Ashok IT");
new class1().my_func(false, false);
