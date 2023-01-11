export default {}

// enum 类型 ==> 是对JavaScript标准数据类型的一个补充
//      使用枚举 enum类型可以为一组数值赋予 有好的名字.  

// 枚举用于表示固定的几个取值.  如: 人的性别只有男, 女 

enum Gender {
    Male,
    Female
}


let value: Gender;

// value = "李丽珍"; // 报错 不能将类型“"hello"”分配给类型“Gender”
value = Gender.Male;
value = Gender.Female;
// value = 0;
// value = 1;


// 注意: TS 中枚举类型的本质就是数值类型 故将数字类型的值赋值给枚举类型 贼不会报错
// value = 200; // 这里我也不知道为什么会有问题


console.log(Gender.Male);
console.log(Gender.Female);
console.log(value);


// 注意: TS 中枚举类型的取值磨人从0开始,从上到下依次递增
//      所以我们可以给枚举类型的值一个默认值, 例如:
enum Season {
    spring = 1,
    summer,
    autumn,
    wrinter
}

// 设置 spring 默认之为1, 然后依次递增枚举,. ==>  故我们可以根据设置枚举数据了默认值 来定义我们想要的数据
console.log(Season.spring); // 1
console.log(Season.summer); // 2
console.log(Season.autumn); // 3
console.log(Season.wrinter); // 4
