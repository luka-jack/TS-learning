export default {}

//  type别名 ==> 类型别名  --- 给一个类型起一个新的别名, 但是他们任然代表同一个类型

// 方式一 >>> 基本类型
type beauty = "赵露思" | '陈钰琪' | '唐嫣' | '杨幂' | 111;


let goddess: beauty;

// goddess = "刘亦菲"; // 不能将类型“"刘亦菲"”分配给类型“beauty”。
// goddess = true;
// goddess = 123;

goddess = 111;
goddess = "赵露思";  //  >>> 只能赋值已经定义过的值

console.log(goddess, 'goddess');

// 方式二 >>> 函数
type hobbies = (a: boolean, b: string) => string;

let myHobbies: hobbies = (a: boolean, b: string) => b;  // 因为a b 类型不一样  返回a的时候 与别名之前函数返回的值类型不一样  故: 只能返回 b

console.log(myHobbies(true, "张婧仪"));


// 方式三: 常用类型 >> 对象
type goddess = {
    name: string,
    age: number,
    marry: Boolean
}

let myGoddess: goddess = {
    name: "赵露思",
    age: 20,
    marry: false,
    // sex: '女' // 对象字面量只能指定已知属性，并且“sex”不在类型“goddess”中。
}

console.log(myGoddess, 'myGoddess');


// 注意: 定义的类型里面的所有参数必须完整 >>> 对象字面量只能指定已知属性，并且“sex”不在类型“goddess”中。