var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Customer } from './classes/Customer.js';
import { Enployee } from './classes/Enployee.js';
import { Servicer } from './classes/Servicer.js';
import { Numbers, Strings } from './classes/sp.js';
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
    return `名字${name},年龄${age}`;
}
console.log(get('sb', 36));
var getinfo = function (name, age = 96) {
    if (age === undefined) {
        return `名字${name}`;
    }
    else {
        return `名字${name},年龄${age}`;
    }
};
console.log(getinfo('sb'));
function sb(a, b, c, ...args) {
    function abc(num1, num) {
        return num1 + num;
    }
    let total = args.reduce(abc);
    return a + b + c + total;
}
console.log(sb(1, 2, 9, 9, 6, 3, 9, 8, 5, 2, 4));
// 函数重载
// function getuser(name:string):string{
// }
//es5原型链继承：实例化以后的子类是没有办法给父类传参
class init {
    constructor(n) {
        this.name = n;
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
    play() {
        return `${this.name}89522`;
    }
}
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
class student extends init {
    constructor(name) {
        super(name); //初始化父类的构造函数
    }
    play() {
        return `${this.name}dsdsds0`;
    }
}
var s = new student('jack----');
console.log(s.play());
//静态方法 static
/**
 * 类里面包括  实例属性和实例方法
 * 通过 static 关键字设置静态属性和静态方法
 * 类。静态属性  -> 调用
 * 类。静态方法  -> 调用
 */
class Press {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    work() {
        return `${this.name} saa ${this.age}`;
    }
    static play() {
        console.log('ewewew---' + this.mar);
    }
}
Press.mar = true;
Press.play();
console.log(Press.mar);
// var p = new Press()
/**多态 */
class Animal {
    constructor(name) {
        this.name = name;
    }
    maskound() { }
    ;
}
class Bog extends Animal {
    constructor(name) {
        super(name);
    }
    maskound() {
        console.log('哈哈0！3');
    }
}
// -------------------==
/**
 *
 */
class minClass {
    constructor() {
        this.list = [];
    }
    add(num) {
        this.list.push(num);
    }
    min() {
        var minNum = this.list[0];
        for (let i = 0; i < this.list.length; i++) {
            if (minNum > this.list[i]) {
                minNum = this.list[i];
            }
        }
        return minNum;
    }
}
var dbc = new minClass();
dbc.add('a');
dbc.add('t');
console.log(dbc.min());
// ---------------------
let serverice = new Servicer();
let cust = new Customer();
cust.id = 2;
cust.name = 'hhsb';
cust.type = 'dsdsd';
console.log(serverice.sevObj(cust));
let serviceEmp = new Servicer();
let mep = new Enployee();
mep.id = 2;
mep.name = 'Ofdf';
mep.code = '001';
console.log(serviceEmp.sevObj(mep));
/**
 * 命名空间
 * 由 namespace 函数名{}  来区分，主意：里面函数必须要 export  向外部暴露 才可以调用
 * 如果命名空间需要模块化，必须 export namespace 外部暴露
 */
console.log(Numbers.add(2, 3));
console.log(Strings.add('2', '36'));
/**
 * 类修饰器
 */
function logClass(target) {
    return class extends target {
        getData() {
            this.apiUrl = '添加' + this.apiUrl;
            console.log(this.apiUrl);
        }
    };
}
function logProperty(params) {
    return function (target, propertyKey) {
        target[propertyKey] = params;
    };
}
let httpClient = class httpClient {
    constructor() {
        this.apiUrl = '我查查';
    }
    getData() {
        console.log(this.apiUrl);
    }
};
__decorate([
    logProperty('ssasasasasa')
], httpClient.prototype, "apiUrl", void 0);
httpClient = __decorate([
    logClass
], httpClient);
let http = new httpClient();
console.log(http.apiUrl);
/**
 * 方法修饰器
 */
