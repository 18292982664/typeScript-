"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// // function add(a: number, b: number) {
// //     let c = a + b;
// //     console.log(c)
// // }
// // add(2, 6)
// // var a: undefined;
// // a = undefined;
// // var b: number = undefined;
// // b = 7
// // console.log(b)
// // var list: number[] = [1,2]
// // var list: Array<number> = [1,2]
// interface keypair {
//     key: number;
//     value: string;
// }
// interface cal {
//     sum(first: number, sec: number): number;
// }
// function a() {
//     let key2: keypair = { key: 1, value: 's' }
// }
// let cals: cal={
//     sum(first: number, sec: number){
//         return first + sec
//     }
// }
// 泛型
// function show<T>(arga: T) {
//     return arga
// }
// var out = show<string>('hello')
// console.log(out)
function get(name, age) {
    return "\u540D\u5B57" + name + ",\u5E74\u9F84" + age;
}
console.log(get('sb', 36));
var getinfo = function (name, age) {
    if (age === void 0) { age = 96; }
    if (age === undefined) {
        return "\u540D\u5B57" + name;
    }
    else {
        return "\u540D\u5B57" + name + ",\u5E74\u9F84" + age;
    }
};
console.log(getinfo('sb'));
function sb(a, b, c) {
    var args = [];
    for (var _i = 3; _i < arguments.length; _i++) {
        args[_i - 3] = arguments[_i];
    }
    function abc(num1, num) {
        return num1 + num;
    }
    var total = args.reduce(abc);
    return a + b + c + total;
}
console.log(sb(1, 2, 9, 9, 6, 3, 9, 8, 5, 2, 4));
// 函数重载
// function getuser(name:string):string{
// }
//es5原型链继承：实例化以后的子类是没有办法给父类传参
var init = /** @class */ (function () {
    function init(n) {
        this.name = n;
    }
    init.prototype.getName = function () {
        return this.name;
    };
    init.prototype.setName = function (name) {
        this.name = name;
    };
    init.prototype.play = function () {
        return this.name + "89522";
    };
    return init;
}());
var p = new init('dwe');
console.log(p.getName());
p.setName('哈哈');
console.log(p.getName());
/*
类的继承
 类的修饰符：
1、public     公共，在当前类里面、子类、类的外部都可以访问
2、protected  保护、在当前类时、子类里面都可以访问，在类的外部没办发访问
3、private    私有、在当前类里面可以访问、子类、类的外部都没办法访问

*/
var student = /** @class */ (function (_super) {
    __extends(student, _super);
    function student(name) {
        return _super.call(this, name) || this; //初始化父类的构造函数
    }
    student.prototype.play = function () {
        return this.name + "dsdsds0";
    };
    return student;
}(init));
var s = new student('jack');
console.log(s.play());
//静态方法 static
/**
 * 类里面包括  实例属性和实例方法
 * 通过 static 关键字设置静态属性和静态方法
 * 类。静态属性  -> 调用
 * 类。静态方法  -> 调用
 */
var Press = /** @class */ (function () {
    function Press(name, age) {
        this.name = name;
        this.age = age;
    }
    Press.prototype.work = function () {
        return this.name + " saa " + this.age;
    };
    Press.play = function () {
        console.log('ewewew' + this.mar);
    };
    Press.mar = true;
    return Press;
}());
Press.play();
console.log(Press.mar);
// var p = new Press()
/**多态 */
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.maskound = function () { };
    ;
    return Animal;
}());
var Bog = /** @class */ (function (_super) {
    __extends(Bog, _super);
    function Bog(name) {
        return _super.call(this, name) || this;
    }
    Bog.prototype.maskound = function () {
        console.log('哈哈！');
    };
    return Bog;
}(Animal));
