"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {};
// 1. 数值类型 Number ===> 不能将 其他类型的值 赋值给指定为 Number类型 的变量, 可复制二进制 八进制 十六进制数
let number;
number = 40;
// number = "hello word!"; // 不能将类型“string”分配给类型“Number”。
// number = [1,2,3]; // 类型“number[]”缺少类型“Number”中的以下属性: toFixed, toExponential, toPrecision
// 2. String 字符串类型 ==> 不能将 其他类型的值 赋值给指定为 String类型 的变量
let people;
people = "胡歌";
// people = 250; // 不能将类型“number”分配给类型“String”。
// people = true; // 不能将类型“boolean”分配给类型“String”。
// 3. Boolean   ==> 不能将其他数据类型的值 赋值给指定为 Boolean类型的变量
let flag;
flag = true; // 
// flag = 1; // 报错
// flag = "hello !!!"; // 报错
