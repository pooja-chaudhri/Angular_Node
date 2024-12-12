/*

Multiple Inheritance through Classes is not possible

But where as Multiple Inheritance Through Interfaces is possible

*/

class mean_class{
    public mean():string{
        return "MEAN Stack Development";
    }
}

class mern_class extends mean_class{
    public mern():string{
        return "MERN Stack Development";
    }
}

class mevn_class extends mern_class{
    public mevn():string{
        return "MEVN Stack Development";
    }
}

let obj:mevn_class=new mevn_class();
console.log(obj.mean());
console.log(obj.mern());
console.log(obj.mevn());