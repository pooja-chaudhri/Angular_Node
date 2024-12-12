/*

Any Datamember with static keyword ==> they can be accessed through Directly Class Name
                                   instead of object created to the class

We cant instantiate the static members by using constructor

*/
var class1 = /** @class */ (function () {
    function class1() {
    }
    // constructor(){
    //    this.wish="hello";
    //}
    class1.getWish = function () {
        return this.wish;
    };
    class1.wish = "Hello Static";
    return class1;
}());
//new class1().wish;
// new class1().getWish();
console.log(class1.getWish());
console.log(class1.wish);
