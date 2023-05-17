console.log('Hello World');
//Let, const
let ag;
ag = 31

const score = 10

const username= "john";
const age =30;
const rate = 4.5;
const isCool = true;
const a = null;
const b = undefined;
let z;

console.log(typeof z)

console.log("My name is" + username + " and I am" + age);
console.log(`My name is ${username} and I am ${age}`);

console.log(age);

const s ="Hello World"

console.log(s.Length); //属性没有括号
console.log(s.toUpperCase());
console.log(s.substring(0,5).toUpperCase());
console.log(s.split(''));

const c = "echonology, computers, it, code";
console.log(c.split(", "));

const numbers = new Array(1,2,3,4,5);

console.log(numbers);

const fruits = ["apples", "oranges", "pears", 10, true];//Array中可以有different type

console.log(fruits);

fruits[3] = "grapes";

fruits.unshift("strawberries"); //头部添加
fruits.push("mangos");  //尾部添加

fruits.pop(); //尾部删除

console.log(Array. isArray('hello'));

console.log(fruits.indexOf("organes")); //索引目录

console.log(fruits[1]); //start from 0


const person = {
    firstName: "John",
    lastName: "Doe",
    age:30,
    hobbies: ["music", "movies", "sports"],
    adress:{
        street: "50 main st",
        city:"Boston",
        state:"MA",
    },
};//属性
console.log(person.firstName, person.lastName);
console.log(person.hobbies[1])
console.log(person.adress.city);

const {
    firstName, 
    lastName, 
    adress:{city},
} = person;  
//解构赋值（destructuring assignment）
console.log(city);

person.email = "john@gmail.com";

console.log(person)

//对象数组
const todos = [
    {
        id: 1,
        text: "Take out trash",
        isCompleted: true,
    },
    {
        id: 2,
        text:"Meeting with boss",
        isCompleted: true,
    },
    {
        id: 3,
        text: "Dentist appt",
        isCompleted: false,
    },
];

console.log(todos[1].text);  //索引

const todoJSON = JSON.stringify(todos)

console.log(todoJSON) //转换为JSON格式

//第一种for循环
for (let i = 0; i < todos.length; i++) {
    console.log(todos[i].text);
}

//第二种for循环
for (let todo of todos) {
    console.log(todo.id);
}
//todo是数组中的每一项

const x = 10;

if (x === 10){
    console.log("x is 10");
} else if (x > 10) {
    console. log("x is greater than 10");
} else {
    console.log("x is less than 10");
}

const g = 4;
const y = 10;

if (g >5 || y > 10) {
    console.log("g is more than 5 or y is more than 10");
}

const color = x > 10 ? "red" : "blue";

console.log(color);

//switch条件语句
switch(color) {
    case "red":
        console.log("color is red");
        break;
    case "blue":
        console.log("color is blue");
        break;
    default:
        console.log("color is Not red or blue")
}

//循环
for (let i = 0; i <= 10; i++) {
    console.log('For Loop Number: ${i}');
}

//while
let i = 0;
while(i < 10) {
    console.log('While Loop Number: ${i}');
    i++
}