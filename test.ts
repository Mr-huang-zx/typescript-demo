window.onload=function(){
    
    // 简单的定义给变量定义类型
    let num:number = 123456;

    var str:string ="123456";

    // 简单的联合类型 可以为字符串可以为数字
    var anyn:string|number='ddff';

    // 可以为任何类型
    var aby:any=true;


    // 数组定义类型
    var arr:number[] =[1,5,9,6,2];

    // 数组泛型 泛型(定义时不指定类型，用到的时候才定义)

    var arr1:Array<number>=[1,2,6];

    // 数组联合型
    var arr2:Array<string|boolean>=['dd',true,'fss'];


    // 对象定义类型

    // 接口里面的字段和下面的必须对应，类型也要对应 否则报错  这就是定义的对象会受接口的约束;
    interface Person{
        name:string, 
        age:number,
    }

    var obj:Person={
        name:'dsdsa',
        age:122,
    }


    // 对象的可选属性在属性后面+一个?
    interface Person2{
        name:string;
        age?:number;
    }

    var obj2:Person2={
        name:'dno',
        age:123
    }


    // 数组的任意属性

    interface Person8{
        name:string,
        [abc:string]:any,//这里的any可以为其他类型，其他属性必须为此类型
    }

    var obj8:Person8={
        name:'213',
        ddddd:15646,
        daid:true,
    }
    
    // 函数  输入类型和输出类型
                // 输入类型          输出类型
    function sun2(a:number,b:number):number{  //()括号里面的为输入类型，外面的:number是输出类型(就是return返回的数据类型)
        return a+b  // 当没有返回值时    上方的:number 换成 :void
    };
    sun2(1,2) //这里的个数必须更



    function sum8(m:string,n:number=10){
        return m+n
    }
    sum8('ss',123)  //如果()里的有=值，那么这里可以不用传n  默认值是10，

    function sun9(n:number,m?:number){//这里的?表示该输入可有可无，只能添加在最后一个输入属性后面
        return n+m
    }
    sun9(1)
}