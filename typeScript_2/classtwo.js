//We can create datamembers inside constructor also
var class2 = /** @class */ (function () {
    function class2(arg1, arg2, arg3) {
        this.arg1 = arg1;
        this.arg2 = arg2;
        this.arg3 = arg3;
    }
    return class2;
}());
var obj2 = new class2("Angular", "Spring Boot", "Oracle");
console.log(obj2.arg1, obj2.arg2, obj2.arg3);
var obj3 = new class2("React", "Dotnet Web API", "SQL Server");
console.log(obj3.arg1, obj3.arg2, obj3.arg3);
/*
Output:

Angular Spring Boot Oracle
React Dotnet Web API SQL Server
*/ 
