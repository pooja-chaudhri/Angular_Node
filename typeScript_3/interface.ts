/*

Interfaces the class but not does not have any implementation

A Method does not have any implementation is called as abstract method


A interface contains all abstract methods only

We can create an interface with interface keyword

we can implement interface through implements keyword

Implemenation to be provided through classes (Regular Java/dotnet)


In Typescrript we can provide implementation through classes and JSON Objects also


JSOn ==
{
key1:value1,
key2:value2,
  {
      key3:value3
   }
}



interface interface1{

    tech:string;

}

//Implementation through Class
class class1 implements interface1{

    tech:string="Angular";

}

//console.log(new class1().tech);

//Impelementation through JSON

let obj1:interface1={
    tech:"Spring Boot"
}

let obj2:interface1={
    tech:"React"
}


let obj3:interface1={
    tech:"Node JS"
}

console.log(obj1.tech);
console.log(obj2.tech);
console.log(obj3.tech);




interface interface1{
    festack():string;
}

class class1 implements interface1{
        public festack(): string {
            return "Angular";
        }
}

console.log(new class1().festack());


//Implementation through JSON Objects

let obj1:interface1={

    festack : () :string=>{
        return "React";
    }
}

let obj2:interface1={

    festack : () :string=>{
        return "VUE JS";
    }
}

console.log(obj1.festack());
console.log(obj2.festack());





//Inheritance through Interfaces


interface interface1{
    var_one:string;
}


interface interface2 extends interface1{
    var_two:string;
}

let obj:interface2={

    var_one:"Hello var1",
    var_two:"Hello var2"
}

console.log(obj.var_one);
console.log(obj.var_two);


//Multi Level Inheritance
interface interface1{
    mean():void;
}

interface interface2 extends interface1{
    mern():void;
}

interface interface3 extends interface2{
    mevn():void;
}


let obj:interface3={

    mean : () : void=>{
        console.log(" MEAN ===> Mongo EXPRESS ANGULAR NODE JS  ")
    },

    mern : ():void=>{
        console.log(" MERN ===> Mongo EXPRESS REACT NODE JS  ")
    },

    mevn : () : void=>{
        console.log("MERN ===> Mongo EXPRESS VUE  JS")
    }
}


console.log(obj.mean(),obj.mern(),obj.mevn());
*/


//Multiple Inheritance
interface interface1{
    mean():void;
}

interface interface2 {
    mern():void;
}

interface interface3 extends interface2,interface1{
    mevn():void;
}


let obj:interface3={

    mean : () : void=>{
        console.log(" MEAN ===> Mongo EXPRESS ANGULAR NODE JS  ")
    },

    mern : ():void=>{
        console.log(" MERN ===> Mongo EXPRESS REACT NODE JS  ")
    },

    mevn : () : void=>{
        console.log("MERN ===> Mongo EXPRESS VUE  JS")
    }
}


console.log(obj.mean(),obj.mern(),obj.mevn());