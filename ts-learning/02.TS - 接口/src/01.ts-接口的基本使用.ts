export default {}

// 接口 >>> 是一系列抽象方法的声明, 是一些方法特征的集合, 这些方法都应该是抽象的, 需要具体的 类 去实现
//  然后第三方就可以通过这组抽象的方法调用, 让具体的类执行具体的方法

// 接口也是一种数据类型

// 格式:
// interface interface_name {

// }

// 基本类型使用
interface First {
    f1: string,
    f2: string
    f3: boolean
}

let myGod: First = {
    f1: 'hello',
    f2: ' word!',
    f3: false
}

console.log(myGod.f1 + myGod.f2);


// 函数中使用
function say({ f1, f2 }: First) {
    console.log('2023-01-10 '+ f1 + f2);
}

say(myGod)