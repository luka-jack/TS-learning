
// 和js 相同
// var 具有变量提升 var定义的变量在全局作用域内部任何位置都能被访问

// 预计答应0-10
// for (var i = 0; i < 10; i++) {
//     setTimeout(function () { console.log(i); }, 100 * i); // 输出: 10 - 10
// }

// 解决 >>> IIFE (函数表达式)
// for (var i = 0; i < 10; i++) {
//     (function (i) {
//         setTimeout(function () { console.log(i); }, 100 * i); // 输出: 0 - 10
//     })(i)

// }

// let >>> 块作用域: 1. 块作用域变量在包含它们的块或for循环之外是不能访问的。
//     >>>          2. 它们不能在被声明之前读或写。

// 注意: 注意一点，我们仍然可以在一个拥有块作用域变量被声明前获取它。 只是我们不能在变量声明前去调用那个函数。
//       如果生成代码目标为ES2015，现代的运行时会抛出一个错误 >>> (暂时性死区)；
//       然而，现今TypeScript是不会报错的。

// function foo() {
//     // okay to capture 'a'
//     return a;
// }

// let a;

// // 不能在'a'被声明前调用'foo'
// // 运行时应该抛出错误
// foo();


// 重定义及屏蔽
//   块级作用域变量需要在明显不同的块里声明。
//   在一个嵌套作用域里引入一个新名字的行为称做屏蔽。


// 块级作用域变量的获取
function theCityThatAlwaysSleeps() {
    let getCity;

    if (true) {
        let city = "Seattle";
        getCity = function () {
            return city;
        }
    }

    return getCity();
}

console.log(theCityThatAlwaysSleeps());

for (let i = 0; i < 10 ; i++) {
    setTimeout(function() {console.log(i); }, 100 * i);
}

// const >>>> 拥有与 let相同的作用域规则，但是不能对它们重新赋值。