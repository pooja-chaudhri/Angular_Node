/*

Any Datamember with static keyword ==> they can be accessed through Directly Class Name
                                   instead of object created to the class

We cant instantiate the static members by using constructor

*/

class class1{
    static wish:string="Hello Static";

   // constructor(){
    //    this.wish="hello";
    //}

    static getWish():string{
        return this.wish;
    }


  
}

//new class1().wish;
// new class1().getWish();


console.log(class1.getWish());
console.log(class1.wish);