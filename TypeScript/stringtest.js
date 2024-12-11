/*

To populate dynamic string we can use ${variablename}


` ` ==> Mainly used for Multi Line String

*/
var tech_one = "Angular";
var tech_two = "Spring Boot";
var tech_three = "MY SQL Database";
var full_stack = " ".concat(tech_one, "   <===>   ").concat(tech_two, "  <====> ").concat(tech_three, " ");
//console.log('Full Stack Technology Contains',full_stack);
//Output ==> Full Stack Technology Contains  Angular   <===>   Spring Boot  <====> MY SQL Database
var tbl_name = "employees";
var sal = 100000;
var query = " select * from ".concat(tbl_name, "    where salary > ").concat(sal, " ");
console.log('Query is ==> ', query);
