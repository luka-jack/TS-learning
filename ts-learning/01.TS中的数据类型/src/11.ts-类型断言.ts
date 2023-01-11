export default {}

// 类型断言

let str = "世界上最遥远的距离不是生与死, 而是你是if而我是else, 看似一直相伴却又永远相离!";

// 方式一
let len1 = (<string>str).length;
console.log(len1, 'len1');

// 方式二  ==>  as -- 把 xx 作为xx类型的值
let len2 = (str as string).length
console.log(len2, 'len2');


let str2 = "世界上最痴心的等待, 是你做了case而我成为了switch, 或许永远都指向错过!"
let num2 = 233
function types(value: (number | string), key: string) {
    // console.log(value.length); // 此时编译会报错  类型“string | number”上不存在属性“length”。 类型“number”上不存在属性“length”。

    // 此时需要我们进行类型断言  
    console.log((value as string).length, key);
}

types(str2, "str2");
types(num2, "num2");  // 如果传入的参数类型 和我们断言的 类型不一致的话 会返回 undefined