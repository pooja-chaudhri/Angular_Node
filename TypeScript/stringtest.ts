/*

To populate dynamic string we can use ${variablename}


` ` ==> Mainly used for Multi Line String

*/
var tech_one:string="Angular";
var tech_two:string="Spring Boot";
var tech_three:string="MY SQL Database";


var full_stack=` ${tech_one}   <===>   ${tech_two}  <====> ${tech_three} `;
//console.log('Full Stack Technology Contains',full_stack);


//Output ==> Full Stack Technology Contains  Angular   <===>   Spring Boot  <====> MY SQL Database


var tbl_name:string="employees";
var sal:number=100000;
var query:string=` select * from ${tbl_name}    where salary > ${sal} `;

console.log('Query is ==> ',query);

//Output == > Query is ==>   select * from employees    where salary > 100000


