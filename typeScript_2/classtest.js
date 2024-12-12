/*

Class ==> Collection of Data Members and Member Functions

Data members ===> Properties of Class

Member Functions ==> Getters and Setters

Data Abstraction ==> Binding the data to the data members and retrieving the data through member functions

In typescript, we can create a class using "class" keyword.

We can create an object to the class using "new" keyword.

We can define constructor using "constructor" in keyword

Constructor automatically executed when object is initialized

this represent current class variable

*/
var class1 = /** @class */ (function () {
    //Constructor
    function class1() {
        this.tech1 = "Angular";
        this.tech2 = "Spring Boot";
        this.tech3 = "MY SQL";
    }
    //Members Functions
    class1.prototype.getTech1 = function () {
        return this.tech1;
    };
    class1.prototype.getTech2 = function () {
        return this.tech2;
    };
    class1.prototype.getTech3 = function () {
        return this.tech3;
    };
    return class1;
}());
var obj = new class1(); //Creating Object to the class
console.log(obj.getTech1(), obj.getTech2(), obj.getTech3()); //Invoking Member Functions through Objects
