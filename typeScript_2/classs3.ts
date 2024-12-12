/*
Inheritance ==> Getting the functionality in other class parent and derived

extends keyword used for inheritance
*/
class class_one{
    public fun_one():string{
        return "Function One !!!!"
    }
}


class class_two extends class_one{
    public fun_two():string{
        return "Function Two !!!!";
    }
}

let obj:class_one=new class_one();

let obj2:class_two=new class_two();

console.log(obj2.fun_one());
console.log(obj2.fun_two());