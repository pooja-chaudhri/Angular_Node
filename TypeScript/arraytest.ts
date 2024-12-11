/*


Array ==> Mainly used to store more than one value

var <arrayname>:Array<number/string>=[values]; ==> Syntax1

var <arrayname>:number/string[]=[values];


var num_arr:Array<number>=[10,20,30,40,50];


num_arr.forEach(
    (element,index)=>{
        console.log("Index is => ",index,"  Element is =>", num_arr[index]);
    }

)

/*

Index is =>  0   Element is => 10
Index is =>  1   Element is => 20
Index is =>  2   Element is => 30
Index is =>  3   Element is => 40
Index is =>  4   Element is => 50




var str_arr:Array<string>=['Angular','Spring Boot','Tomcat'];

str_arr.forEach(

    (element,index)=>{
        console.log("Index is => ",index,"  Element is =>", str_arr[index]);
    }

)



Index is =>  0   Element is => Angular
Index is =>  1   Element is => Spring Boot
Index is =>  2   Element is => Tomcat

*/

var anyarr:any=['Angular',10,true,{sub:'React'}];

anyarr.forEach(

    (element,index)=>{
        console.log("Index is => ",index,"  Element is =>", anyarr[index]);
    }
)
/*
Index is =>  0   Element is => Angular
Index is =>  1   Element is => 10
Index is =>  2   Element is => true
Index is =>  3   Element is => { sub: 'React' }
*/