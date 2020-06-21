import { Customer } from './classes/Customer.js'
import { Enployee } from './classes/Enployee.js'
import { Servicer } from './classes/Servicer.js'
import { Numbers,Strings } from './classes/sp.js'
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
function get(name: string, age: number): string {
    return `名字${name},年龄${age}`
}
console.log(get('sb', 36))
var getinfo = function (name: string, age: number = 96): string {
    if (age === undefined) {
        return `名字${name}`
    } else {
        return `名字${name},年龄${age}`
    }

}
console.log(getinfo('sb'))
function sb(a: number, b: number, c: number, ...args: number[]): number {
    function abc(num1: number, num: number) {
        return num1 + num
    }
    let total: number = args.reduce(abc)
    return a + b + c + total
}
console.log(sb(1, 2, 9, 9, 6, 3, 9, 8, 5, 2, 4))
// 函数重载
// function getuser(name:string):string{

// }
//es5原型链继承：实例化以后的子类是没有办法给父类传参
class init {
    public name: string;
    constructor(n: string) {
        this.name = n;
    }
    getName(): string {
        return this.name
    }
    setName(name: string): void {
        this.name = name;
    }
    play(): string {
        return `${this.name}89522`
    }
}
var p = new init('dwe');
console.log(p.getName())
p.setName('哈哈')
console.log(p.getName())
/*
类的继承
 类的修饰符：
1、public     公共，在当前类里面、子类、类的外部都可以访问
2、protected  保护、在当前类时、子类里面都可以访问，在类的外部没办发访问
3、private    私有、在当前类里面可以访问、子类、类的外部都没办法访问

*/
class student extends init {//extends实现类的继承
    constructor(name: string) {
        super(name)//初始化父类的构造函数
    }
    play(): string {
        return `${this.name}dsdsds0`
    }
}
var s = new student('jack----')
console.log(s.play())
//静态方法 static
/**
 * 类里面包括  实例属性和实例方法
 * 通过 static 关键字设置静态属性和静态方法
 * 类。静态属性  -> 调用
 * 类。静态方法  -> 调用
 */
class Press {
    public name: string;
    public age: number;
    static mar: Boolean = true;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    work(): string {
        return `${this.name} saa ${this.age}`
    }
    static play(): void {
        console.log('ewewew---' + this.mar)
    }
}
Press.play()
console.log(Press.mar)
// var p = new Press()
/**多态 */
class Animal {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    maskound(): void { };
}
class Bog extends Animal {
    constructor(name: string) {
        super(name);
    }
    maskound(): void {
        console.log('哈哈0！3');
    }
}

// -------------------==
/**
 * 
 */
class minClass<T> {
    list: T[] = [];
    add(num: T) {
        this.list.push(num)
    }
    min(): T {
        var minNum = this.list[0];
        for (let i = 0; i < this.list.length; i++) {
            if (minNum > this.list[i]) {
                minNum = this.list[i]
            }
        }
        return minNum
    }
}
var dbc = new minClass<string>();
dbc.add('a')
dbc.add('t')
console.log(dbc.min())
// ---------------------

let serverice: Servicer<Customer> = new Servicer();
let cust = new Customer();
cust.id = 2;
cust.name = 'hhsb';
cust.type = 'dsdsd';
console.log(serverice.sevObj(cust));

let serviceEmp: Servicer<Enployee> = new Servicer();
let mep = new Enployee();
mep.id = 2;
mep.name = 'Ofdf';
mep.code = '001';
console.log(serviceEmp.sevObj(mep))
/**
 * 命名空间
 * 由 namespace 函数名{}  来区分，主意：里面函数必须要 export  向外部暴露 才可以调用
 * 如果命名空间需要模块化，必须 export namespace 外部暴露
 */

console.log(Numbers.add(2, 3))
console.log(Strings.add('2', '3'))
/**
 * 修饰器
 */





