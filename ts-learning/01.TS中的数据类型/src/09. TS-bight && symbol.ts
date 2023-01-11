export default {}

// bight 类型  ==> 表示很大的数值  (Bight() ==> ES2020 可用)
let num: bigint = BigInt(200)
let num3: bigint = 100n

console.log(num);
console.log(num3);



// symbol 类型 ==> 表示全局唯一引用
let firstNumber = Symbol("number")
let secondNumber = Symbol("number")

// console.log(first === second); // 这里始终返回false

if(firstNumber === secondNumber){
    console.log("Ok");
    
}