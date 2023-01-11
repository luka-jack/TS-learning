export default {}

// never 类型  ==> 表示那些用不存在的值
//      never类型 是那些总会抛出异常 或者 根本不会有值的 函数表达式或箭头函数表达式 的返回值类型.
//      变量也可以为 never类型 , 当它 被 永不为真的条件嗦约束的时候

// 用法:
// function err(msg: string): never {
//     throw new Error(msg);
// };

// err("王祖贤");





// object类型  ==> 表示 非原始类型, 也就是除了String, Number, Boolean, Symbol, null, undefined 之外的类型
//      定义的是一个只能保存对象的标量
//      相较而言 ==> 后面更常用的是 接口 和 类型别名

let object: object;
object = { a: 123, b: true, s: "obj-str" }

console.log(object);
