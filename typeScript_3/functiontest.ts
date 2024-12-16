/*


Default Parameters ==>  
*/

function cacluate_discount(price:number,discount:number=0.4){


    var discountamt=price*discount;
    console.log("Discount ==> ",discountamt);
}

//cacluate_discount(1000);
//cacluate_discount(2000,0.5);

//Discount ==>  400
//Discount ==>  1000


/*

Recursive ==> A function will be called again with in the same function


Factorial ==> 5! ==> 5*4*3*2*1
*/

function factorial(number){
    if(number<=0) {
        return 1;
    }else{
        return (number * factorial(number-1));
        //return 5 * factorial(4)

        //return 5 * 4 * factorial(3)

        //return 5*4*3*factorial(2)
        //5*4*3*2*1
    }


}
//console.log('Factorial of 5 is', factorial(5));


/*

Optional Parameter ==> Syntax is to have ??
*/

function disp_details(name:string,salary:string,age?:number){
    console.log("Employee Name",name);
    console.log("Employee Salary",salary);
    if(age!=undefined){
        console.log("Employee Age",age);
    }

}

//disp_details("vijay","20000",34);
//disp_details("sandhya","40000");

/*

REST Parameter function ==> It should be declared with ...

Always it should be last parameters in the list
*/

function addNumbers(... nums:number[]){

    var i;
    var sum:number=0;

    for(i=0;i<nums.length;i++){
        sum=sum+nums[i];
    }

    console.log("Sum of Numbers is ==> ", sum);
}
/*
addNumbers(1,2,3,4,5,6);
addNumbers(20,30,40,50);

Sum of Numbers is ==>  21
Sum of Numbers is ==>  140
*/
/*

LAMDA FUNCTION ==> no function keyword

function (){
}

() =>{
 }
*/

var newmsg=()=>{
    console.log("Welcome to Lamda Function")
}

//newmsg();

var sumFunction=(x:number) => {
    x=x+10;
      console.log(x);
}

sumFunction(20);