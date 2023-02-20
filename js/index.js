// map filter and reduce

// const users =[
//     {firstName:"akshay", lastNaem:"saini", age:26},
//     {firstName:"donald", lastNaem:"trup", age:75},
//     {firstName:"elon", lastNaem:"musk", age:50},
//     {firstName:"Torato", lastNaem:"faimly", age:26},
// ]

// const out = users.reduce(function(acc, user){
//     if(user.age<30){
//         return user.firstName;
//     }
//     return acc;
// },'')
// console.log(out) ;

// const output = users.filter(x=> x.age<30).map(x=>x.firstName);
// console.log(output);

// const output = users.reduce(function(acc, cur){
//     if(acc[cur.age]){
//         acc[cur.age]= ++acc[cur.age];
//     }else{
//         acc[cur.age] = 1;
//     }
//     return acc;
// },{})
// console.log(output);

// list the full Name
// const output = users.map(x => x.firstName +" "+x.lastNaem);
// console.log(output);

// const arr = [5,1,3,2,6];
// reduce 
// // to understand find the sum of array
// function findSum(arr){
//     let sum =0;
//     for(let i=0; i<arr.length; i++){
//         sum += arr[i];
//     }
//     return sum;
// }

// function findMax(arr){
//     let max =0;
//     for(let i=0; i<arr.length; i++){
//         if(arr[i]>max){
//             max = arr[i];
//         }
//     }
//     return max;
// }
// console.log(findMax(arr));

// const output = arr.reduce(function(max, cur){
//     if(cur>max){
//         max = cur;
//     }
//     return max;
// },0);

// console.log(output);
// console.log(findSum(arr));
// const output = arr.reduce(function(acc, cur){
//     acc+=cur;
//     return acc;
// },0)
// console.log(output);


// filter 

// function isOdd(x){
//     return x%2;
// }

// function isEven(x){
//     return x%2==0;
// }

// function GreaterThan4(x){
//     return x>4;
// }

// const output = arr.filter(GreaterThan4);
// console.log(output);

// map 

// double [10, 2, 6 , 4, 12]
// Triple [15, 3, 9, 6, 18]
// binary ["101","1","11","10","110"]
// function double(x){
//     return x*2;
// }

// function Triple(x){
//     return x*3;
// }

// function binary(x){
//     return x.toString(2);
// }

// const output = arr.map(binary);
// console.log(output);

// let lecture =10;
// let section =3;
// let title ='JavaScript';

// const course ={
    // lecture:10,
    // section:3,
    // title:'javaScript',
    // notes:{
    //     introduction:'Welcome to Js Course',
    // },
    // enroll(){
    //     console.log("your successfully enrolled");
    // }
// }
// course.enroll()
// console.log(course.title);
// course.price = 999;
// console.log(course);

// function createCourse(){
//     return{
//         lecture:10,
//         section:3,
//         title:'javaScript',
//         notes:{
//             introduction:'Welcome to Js Course',
//         },
//         enroll(){
//             console.log("your successfully enrolled");
//         }
//     }
// }

// const course = createCourse();
// course.enroll(); 

// function Course(title){
//     this.title = title;
//     this.enroll = function(){
//         console.log("You successfully enrolled");
//     }
// }

// const course = new Course('Java Script');
// // console.log(course);
// // course.enroll();
// // console.log(course.constructor);
// // console.log(Course.constructor);

// for(let key in course){
//     console.log(key, course[key]);
// }

// call back function is the function if you calling the function then it's called callback 
//  function
// setTimeout(function(){
//     console.log("timer");
// },5000)
// function x(y){
//     console.log("x");
//     y();
// }
// x(function(){
//     console.log("y");
// })
// function attachEventListner(){
//     let count =0;
//     document.getElementById("click").addEventListener("click",function xyz(){
//         console.log("button clikecd",++count);
//     });
// }
// attachEventListner();

// console.log("Start");
// setTimeout(function cb(){
//     console.log("callback");
// },3000)
// console.log("End");

// console.log("Start");

// setTimeout(function cbT(){
//     console.log("CB SetTimeOut");
// },5000)

// fetch("https://www.youtube.com").then(function cbF(){
//     console.log("CB Netflix");
// });
// console.log("End");

// let name = 'Yash Prasad'
// let age = 25
// let address = "Prestige Falcon City, Bangalore"

// console.log("My name is",name,", age is",age," address is",address);
// let arr =[];
// arr.push(1);
// // arr.shift(1);
// arr.unshift(2)
// arr.push(3);
// console.log(arr);

// let arr =[1,2,4,1,5,6];
// let secondLargest =0;
// let n = arr.length;
// for(let i=n-2; i>=0; i--){
//     if(arr[i]!=arr[n-1]){
//         secondLargest = arr[i];
//         break;
//     }
// }
// console.log(secondLargest);

// var isValid = function(s) {   
//     const stack = [];
    
//     for (let i = 0 ; i < s.length ; i++) {
//         let c = s.charAt(i);
//         switch(c) {
//             case '(': stack.push(')');
//                 break;
//             case '[': stack.push(']');
//                 break;
//             case '{': stack.push('}');
//                 break;
//             default:
//                 if (c !== stack.pop()) {
//                     return false;
//                 }
//         }
//     }
    
//     return stack.length === 0;
// };

// console.log(isValid("(){}[]"));

// const person ={
//     firstName:"Arvind",
//     lastName :"Kumar",
//     age :22,
//     hobbies :['Singing', 'music listening', 'watch tech videos','travel','riding'],
//     address :{
//         city:'Badaun',
//         street:"Surajpur Tappa Bais",
//         pinCode :243638
//     }
// }

// console.log(person.firstName, person.lastName, person.age, person.hobbies[3], person.address.city);

// const {firstName, lastName, address:{city}} = person;
// console.log(firstName);
// console.log(lastName);
// console.log(city);
// person.email = 'thakurarvindkr10@gmail.com'
// console.log(person);

// const todoS =[
//     {
//         id:1,
//         text:'take out the trash',
//         isCompleted:true
//     },
//     {
//         id:2,
//         text:'meeting at the boss',
//         isCompleted:true
//     },
//     {
//         id:3,
//         text:'Dentist appointment',
//         isCompleted:true
//     }
// ]

// const isCompleted =  todoS.filter(function(todo){
//     return todo.isCompleted==true;
// }).map(function(x){
//     return x.text;
// })

// console.log(isCompleted);


// console.log(todoS);
// console.log(todoS[1].text);
// const todoJSON = JSON.stringify(todoS);
// console.log(todoJSON);

// for(let i=0; i<todoS.length; i++){
//     console.log(todoS[i].id,todoS[i].text, todoS[i].isCompleted);
// }

// for(let todo of todoS){
//     console.log(todo.id,todo.text,todo.isCompleted);
// }

// todoS.forEach(function(todo){
//     console.log(todo.text);
// })

// const todoText = todoS.map(function(todo){
//     return todo.text;
// });

// console.log(todoText);

// const todoId = todoS.map(function(todo){
//     return todo.id;
// })

// console.log(todoId);

// const todoIsCompleted = todoS.map(function(todo){
//     return todo.isCompleted;
// })
// console.log(todoIsCompleted);

// const x =9;
// console.log(x>10?'red':'blue');

// constructor function
// function Person(firstName, lastName, age,dob){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//     this.dob = new Date(dob);
//     // this.getFullYear = function(){
//     //     return this.dob.getFullYear();
//     // }
//     // this.getFullName = function(){
//     //     return `${this.firstName} ${this.lastName}`
//     // }
// }

// Person.prototype.getFullYear = function(){
//         return this.dob.getFullYear();
// }
// Person.prototype.getFullName = function(){
//         return `${this.firstName} ${this.lastName}`
// }

// const p1 = new Person("Arvind", "Kumar", 22, "10-03-1999");
// // console.log(`My name is ${p1.firstName} and dob is ${p1.dob.getFullYear()}`);
// // console.log(`My name is ${p1.firstName} and dob is ${p1.dob.getUTCDay()}`);
// console.log(p1.getFullYear());
// console.log(p1.getFullName());

// const myForm = document.getElementById('my-form');
// console.log(myForm);

// const list  = document.querySelector('.list-group');
// console.log(list);
// list.remove();
// list.firstElementChild.textContent = "hello";
// list.lastElementChild.textContent = "Hello Ram"
// let n = list.length;
// list.children[1].textContent = "hello";
// list.children[2].textContent = "hey there"
// list.lastElementChild.innerHTML = `<h1> hello Guys</h1>`
// list.lastElementChild.style.backgroundColor ="yellow";

// console.log(btn);
// btn.style.backgroundColor = "black";

// const btn = document.querySelector('.btn');
// btn.addEventListener("mouseout", (e)=>{
//     e.preventDefault();
//     // console.log("click");
//     // console.log(e.target);
//     // console.log(e.currentTarget);
//     // console.log(e.target.className);
//     // console.log(e.target.id);
//     // console.log(e.target.name);
//     // document.getElementById('my-form').style.backgroundColor ="#ccc";
//     // document.body.classList.add("bg-danger");
//     document.querySelector('.list-group').lastElementChild.innerHTML=
//     `<h1>Hello</h1>`;
//     document.querySelector('.list-group').firstElementChild.innerHTML=
//     `<h1>Hello</h1>`;
// })

const myForm = document.getElementById('my-form');
const name = document.getElementById('name');
const email = document.getElementById('email')
const list = document.querySelector('.list-group');
const msg = document.querySelector('.msg');

myForm.addEventListener("submit", onSubmit);
function onSubmit(e){
    e.preventDefault();
    // if(name.value==='' || email.value===''){
    //     alert('please enter all fields');
    // }else{
    //     // console.log();
    //     alert('Success');
    // }

    if(name.value===''|| email.value===''){
        msg.innerHTML=`<h3>please enter all fields</h3>`;
        msg.classList.add('bg-danger');
        setTimeout(()=>{
            msg.remove();
        },3000)
    }else{
        // console.log('success');
        const li = document.createElement('li');
        li.classList.add('list-group-item');
        li.appendChild(document.createTextNode(`${name.value} ${email.value}`));

        list.appendChild(li);

        // clear all fields
        name.value ='';
        email.value ='';
    }
}

// function Person(firstName, lastName, age, sex) {
//     this.age = age;
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.sex = sex;
//     this.printFullName = () => {
//       console.log(this.firstName, this.lastName);
//     };
// }

// Person.prototype.findegligibleOrNot = function findegligibleOrNot(minAge) {
//     // console.log(this.age);
//     if (this.age > minAge) {
//     //   this.printFullName();
//       console.log("ELIGIBLE");
//     } else {
//     //   this.printFullName();
//       console.log("NOT ELIGIBLE");
//     }
// };

// function createNewStudents(){
//     const person1 = new Person("yash", "prasad", 10, "M");
//     const person2 = new Person("vaibhav", "prasad", 20, "M");
    
//     person1.printFullName();
//     person1.findegligibleOrNot(18);
//     person2.printFullName();
//     person2.findegligibleOrNot(18);
// }

// createNewStudents();

// async function readInput() {
//     let inputString = '';
//     var output=[];
//     process.stdin.on('data', inputStdin => {
//         inputString += inputStdin;
//         const inputArr = inputString.split(/(?:\r\n|\r|\n)/g)
//         const argumentsArr = inputArr[0].split(',');
//         createNewStudents()
//         process.exit();
        
//     })
// }
// readInput();

// class Student {
//     constructor(firstName, lastName , rollNumber , age) {
//         //complete this function to initialize the object
//         this.firstName =firstName;
//         this.lastName = lastName;
//         this.rollNumber = rollNumber;
//         this.age = age;
//     }
    
//     printFullName() {
//         //complete this function to print the full Name of the student object invoking the method
//         console.log(`${this.firstName} ${this.lastName}`);
//     }
    
//     minorOrMajor(){
//        //If age greater than 18 print Major
//        if(this.age>18){
//            console.log("Major");
//        }else{
//            console.log("Minor");
//        }
//        //if age less than 18 print Minor
//        //Complete this function
//     }
// }
// function createNewStudents(){
//     //create 2 object Yash and Ram with initial values as mentioned in question
//     const yash = new Student('yash', 'prasad', 12, 27);
//     const ram =  new Student('ram', 'prasad', 14, 15);

//     //Print yash's full name by invoking printFullName()   
//     yash.printFullName();
//     //Print whether yash is minor or major by invoking minorOrMajor function
//     yash.minorOrMajor();
//    //Print Rams's full name by invoking printFullName()  
//     ram.printFullName();
//     //Print whether Ram is minor or major by invoking minorOrMajor function
//     ram.minorOrMajor();
// }
// createNewStudents();

// "use strict"
// class User{
    
//     // static count=0;
//     //initialize a  static variable
//     static count=0;
//     constructor(username, email, password) {
//         //Complete the constructor function and
//         //  also keep a count of total users created
//         this.username = username;
//         this.email = email;
//         this.password = password;
//         User.count++;
//     }
    
//     // const count=0; 
//     // register(){
//     //     count+=1;
//     //     // console.log(this.username+' is now registered');
//     // }
//     printNumberOfUsers(){
//         //console log the total number of users in the same format as in outpu
//         console.log("currentnumberofusers =",User.count);
//     }
// }

// function createNewStudents(){
//     const yash = new User("yash", "yash@gmail.com", '100000xbasbcjsa');
//     yash.printNumberOfUsers();
//     const user2 = new User("vaibhav", "vaibhav@gmail.com", '2cs0');
//     user2.printNumberOfUsers();
//     yash.printNumberOfUsers();
// }
// createNewStudents();

// class User{
//     static count = 0;
//     constructor(username, email, password) {
//       this.username = username;
//       this.email = email;
//       this.password = password;
//       User.count++
//     }
//     printNumberOfUsers(){
//         console.log("currentnumberofusers =", User.count)
//     }
// }

// class Member extends User {
//   constructor(username, email, password, memberpackage) {
      
//     super(username, email, password);     // complete the super function only. Do not make any other changes
    
//     this.membershipactivetilldate = new Date(2023, 2, 3)//assume user has joined ur platform on 3rd March
//     this.package = memberpackage;
//   }
  
//     //Based on the package bought, increase the membershipactivetilldate
//     //Monthly membership increases the va1idity by 1 month
//     //Yearly membership increases the va1idity by 1 year
//   purchaseMembership(membershippackagename) {
      
//     //   Complete this function
//     if (membershippackagename === "MONTHLYPACKAGE") {
//     this.membershipactivetilldate.setMonth(this.membershipactivetilldate.getMonth()+1);
//     }   
//     else if (membershippackagename === "YEARLYPACKAGE") {
//     this.membershipactivetilldate.setFullYear(this.membershipactivetilldate.getFullYear()+1);
//     }
    
//     this.package = membershippackagename;
 
//   }

//   subscriptionActiveTill() {
//     console.log(
//       this.username +
//         " is subscribed to " +
//         this.package +
//         " uptill " +
//         this.membershipactivetilldate.toDateString()
//     );
//   }

// }

// function createNewStudents(username, email, password, membershippackagename){
//     const mike = new Member(username, email, password);  
//     mike.purchaseMembership(membershippackagename);
//     mike.subscriptionActiveTill();
// }

// createNewStudents('Arvind','thakurarvindkr10@gmail.com',12345, 'MONTHLY');


// const list = document.querySelector('.list-group');
// list.firstElementChild.innerHTML = `<h1 style="color:green">hello<h1>`;
// list.children[1].style.backgroundColor='yellow';