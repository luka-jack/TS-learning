"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {};
let myGod = {
    f1: 'hello',
    f2: ' word!',
    f3: false
};
console.log(myGod.f1 + myGod.f2);
// 函数中使用
function say({ f1, f2 }) {
    console.log('2023-01-10 ' + f1 + f2);
}
say(myGod);
