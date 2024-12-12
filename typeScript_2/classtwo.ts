//We can create datamembers inside constructor also
class class2{
    constructor(public arg1:string,public arg2:string,public arg3:string){

    }
}

let obj2:class2=new class2("Angular","Spring Boot","Oracle");
console.log(obj2.arg1,obj2.arg2,obj2.arg3);



let obj3:class2=new class2("React","Dotnet Web API","SQL Server");
console.log(obj3.arg1,obj3.arg2,obj3.arg3);

/*
Output: 

Angular Spring Boot Oracle
React Dotnet Web API SQL Server
*/