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

class class1{

    //3 DataMembets in the Class
    private tech1:string;
    private tech2:string;
    private tech3:string;

    //Constructor
    constructor(){
        this.tech1="Angular";
        this.tech2="Spring Boot";
        this.tech3="MY SQL";
    }

    //Members Functions
    public getTech1():string{
        return this.tech1;
    }

    public getTech2():string{
        return this.tech2;
    }

    public getTech3():string{
        return this.tech3;
    }

}

let obj:class1=new class1(); //Creating Object to the class

console.log(obj.getTech1(),obj.getTech2(),obj.getTech3()); //Invoking Member Functions through Objects

//Output ==> Angular Spring Boot MY SQL