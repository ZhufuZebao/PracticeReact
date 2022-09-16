// let user = "admin"
const user1 = "member"
var user3 = "owner"

function getName() {
    if(true){
        let user = "admin"
    }
    if(true){
        let user = "owner"
    }
    // console.log(user)
}
getName()

// string number boolean
let name:string = "123"
let age:number = 12
let flag:boolean = true

// 数组 array 元组

let arr:number[] = [1,2,3]
let arr1:[number,string] = [1,"1"]

// any unknown
let day:any = 1
day = "2"
day = [1,2,3]
day()
day.toString()

let day2:unknown  = 1
day2 = "2"
day2 = [1,2,3]
if(typeof day2 === 'function'){
    day2()
}
if(typeof day2 === 'string'){
    day2.toString()
}

let day3:string = day

// null undefined void never

let week:null = null
function getWeek():never {
    throw new Error("");
}

//函数类型

function getUser(age:number,name?:string) {
    console.log(name,age)
}
getUser(18)
getUser(18,'admin')

function getRole(param:object = {}) {
}

const param = {
    name : "admin",
    age : 18
}
param.name

//  interface 和 type
interface User {
    name:string
    age:number
}
type Role = {
    name:string
    age:number
}

let userAdmin:User = {
    name : "admin",
    age: 18
}

// enum
enum Color {
    red = "1",
    blue = '2',
    green = '3'
}
let color = Color.blue


export {}
