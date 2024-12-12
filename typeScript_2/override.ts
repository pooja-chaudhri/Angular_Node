/*

OverRiding ==> Changing the functionality 
*/


class class1{
    public dbFunc():string{
        return "MYSQL Database Connected"
    }
}

class class2 extends class1{
    public dbFunc(): string {
      //  return "MONGO DB Database is Connected"
      return super.dbFunc();
    }
}

console.log(new class2().dbFunc());