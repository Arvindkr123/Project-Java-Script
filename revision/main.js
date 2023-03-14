// map function is used to transform the array and return the return the array
// let arr = [1,2,3,4,5,6,7,8]

// function double(x){
//     return x*2;
// }

// function triple(x){
//     return x*3;
// }

// function binary(x){
//     return x.toString(2);
// }

// let output = arr.map(binary);
// console.log(output);

// let arr = [1,2,3,4,5,6,7,8]
// let output = arr.map(x=>x*2);
// console.log(output);

// filter function
// let arr = [1,2,3,4,5,6,7,8] 
// function isOdd(x){
//     return x%2===1;
// }
// function isEven(x){
//     return x%2===0;
// }
// function isGreater4(x){
//     return x>4;
// }
// let output = arr.filter(isGreater4);
// console.log(output);

// reduce method
// let arr = [1, 2, 3, 4, 5, 6, 7, 8]
// function sum(arr) {
//     let total = 0;
//     arr.forEach((ele) => {
//         total += ele;
//     })
//     return total;
// }
// console.log(sum(arr));

// let output = arr.reduce((total, ele)=>{
//     total+=ele;
//     return total;
// },0)

// let output = arr.reduce((max, cur)=>{
//     if(cur>max){
//         max = cur; 
//     }
//     return max;
// },0)

// console.log(output);

// const users = [
//     {firstName : 'Akshay', lastName:'saini', age:22},
//     {firstName : 'donald', lastName:'trup', age:75},
//     {firstName : 'elon', lastName:'musk', age:50},
//     {firstName : 'deepika', lastName:'padukon', age:22},
// ]

// let output = users.reduce((acc, user)=>{
//     if(user.age<30){
//         acc.push(user.firstName);
//     }
//     return acc;
// },[])

// console.log(output);
// here we can use initially empty array if find age is less then 30 then we push into the array

// let output = users.filter(x=>x.age<30).map(x=>x.firstName);
// console.log(output);

// print the list of all full name
// let output = users.map(x=>x.firstName+" "+x.lastName);
// console.log(output);

// acc {22 : 2, 50 : 1, 75 : 1}

// let output = users.reduce(function(acc, cur){
//     if(acc[cur.age]){
//         acc[cur.age] = ++acc[cur.age];
//     }else{
//         acc[cur.age]=1;
//     }
//     return acc;
// },{});

// console.log(output);

// let arr = [1,1,1,2,2,3,3,3]
// let output = arr.reduce((acc, cur)=>{
//     if(acc[cur]){
//         acc[cur] = ++acc[cur];
//     }else{
//         acc[cur] = 1;
//     }
//     return acc;
// },{})

// // console.log(output);
// // const ans = Object.entries(output).map(([key,val])=>parseInt(key));
// const ans = Object.entries(output).map(([key,val])=>val);
// console.log(ans);

// let arr = [1,1,1,2,2,3,3,3];

// let frequencyMap = new Map();
// for (let i = 0; i < arr.length; i++) {
//   let num = arr[i];
//   if (frequencyMap.has(num)) {
//     frequencyMap.set(num, frequencyMap.get(num) + 1);
//   } else {
//     frequencyMap.set(num, 1);
//   }
// }

// console.log(frequencyMap); // Map(3) { 1 => 3, 2 => 2, 3 => 3 }

// let arr = [1,1,1,2,2,3,3,3];

// let frequencyCount = Object.entries(arr.reduce((acc, cur) => {
//   if (cur in acc) {
//     acc[cur]++;
//   } else {
//     acc[cur] = 1;
//   }
//   return acc;
// }, {})).map(([value, frequency]) => [parseInt(value), frequency]);

// console.log(frequencyCount);
