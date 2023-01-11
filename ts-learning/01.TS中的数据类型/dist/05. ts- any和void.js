"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {};
// 一. any 类型  ==>  表示任意类型,当我们不清楚某个变量的类型时,使用 any
//  使用场景一. 当变量的值回动态改变的时候.  如: 用户输入, 使用any可以让这个变量 跳过 编译阶段 的类型检验
let userInput;
userInput = 123;
userInput += ' hello ';
userInput = true;
console.log(userInput, '使用场景一', typeof userInput);
// 使用场景二. 改写现有代码时, 任意值允许在编译的时候 包含或者移除 类型检查
let n = 8.8;
// n.ifItExists(); // 正确的原因 ==> ifItExists() 这个方法在运行时可能会存在, 但是在这里呢不会检查
console.log(n.toFixed(2), 'toFixed');
// 使用场景三. 定义存储任意类型元素的数组
let sky = ['blue', { height: true }, false, 250];
sky[3] = "This sky is blue!";
console.log(sky, 'any[]');
// 二. void 类型  ==>  当一个函数没有返回值时, 他的返回值类型 其实是 void类型
//      TS 中只有 null 和 undefined 可以赋值给 voidL类型
function make() {
    console.log("Made in china!");
    // return "I'm chinese!"; // 函数已定义其返回值为 void类型  故报错
}
make();
console.log(typeof make());
let value;
// value = "void";  // 报错
// value = 200;  // 报错
// value = true;  // 报错
value = undefined;
// value = null // ts 配置为严苛模式  strict   不能赋值数据null
