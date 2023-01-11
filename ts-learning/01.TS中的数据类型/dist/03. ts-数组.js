"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {};
// 数组
// 方式一: 在元素类型后面接上 []，表示由此类型元素组成的一个数组:
let userList;
userList = ["李连杰", "王祖贤"];
// userList = ["李连杰", "王祖贤", 123]; // 指定数组元素的类型  ==> 不能将类型“number”分配给类型“string”。
// 方式二: 使用数组泛型，Array<元素类型>:
let numberList;
numberList = [120, 336, 258];
// numberList = [120, 336, 258, 'hello', true]; //  指定数组元素的类型  ==> 不能将 其他类型的值 分配给类型指定数组元素类型 的 组的元素。
// 方式三: 
let infoList;
infoList = ["hello", 123];
// infoList = ["hello", 123, '234', true]; // 
console.log(infoList);
