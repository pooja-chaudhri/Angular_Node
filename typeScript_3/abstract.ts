/*

 If we know partial implementation then we will choose abstract class

 we will declare abstract class with abstract keyword


 Implementation to be provided by child classes


abstract class class_one{
    public fun_one():string{      //Implementation
        return "Function One";
    }
    abstract fun_two():string; //No implementation
}

class class_two extends class_one{
    public fun_two(): string {
        return "Function Two";
    }
}

console.log(new class_two().fun_one());
console.log(new class_two().fun_two());

// Exercise where implmenttin through JSON
    
*/

interface interface1{
    mean():void;
}

interface interface2 extends interface1{
    mern():void;
}

abstract class class_one implements interface1,interface2{
    public mean():void{
        console.log("Angular");
    }

    public mern():void{
        console.log("React");
    }

    abstract mevn():void;
}