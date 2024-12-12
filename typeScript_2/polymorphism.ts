/*


OverLoading and OverRiding ==> Polymorphism

*/

class class1{

    public my_func(arg1:number,arg2:number):void;
    public my_func(arg1:string,arg2:string):void;
    public my_func(arg1:boolean,arg2:boolean):void;

    public my_func(arg1:any,arg2:any):void{
        console.log("Argument1 ==> ",arg1);
        console.log("Argument2 ==> ",arg2);
    }
}
/*
let obj:class1=new class1();
obj.my_func(10,10);

obj.my_func("Hello","EveryOne");

obj.my_func(true,false);*/

new class1().my_func(10,10); 
let obj:class1=new class1();


//internally it may crate obj

new class1().my_func("Hello","Ashok IT"); //it may resuse the same obj

new class1().my_func(false,false); //it may resuse the same ob