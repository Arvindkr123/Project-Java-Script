// console.log(document);
// console.table(document);
// console.dir(document.titleLine)
// document.title = "DOM Manipulation"
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// document.all[12].textContent = "Hello Item List"

// console.log(document.forms[0]);
// console.log(document.links);
// console.log(document.images);

// console.log(document.getElementById('header-title'));
// const headTitle = document.getElementById('header-title');
// headTitle.textContent="hello";
// headTitle.innerText = "GoodBye";
// console.log(headTitle.textContent);
// console.log(headTitle.innerText);
// headTitle.innerHTML = `<h3>hello</h3>`
// headTitle.style.borderBottom = 'solid 3px black';
// document.getElementById('main-header').style.borderBottom="6px solid black";
// get element by classesname
// var items = document.getElementsByClassName('list-group-item');
// console.log(items[1]);
// items[1].textContent = "hello2";
// items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'yellow';
// for(let i=0;i<items.length; i++){
//     items[i].style.backgroundColor = 'yellow';
// }

// let li = document.getElementsByTagName('li');
// console.log(li);
// for(let i=0;i<li.length; i++){
//     li[i].style.backgroundColor = 'yellow';
// }

// const header = document.querySelector('#main-header');
// header.style.borderBottom = "5px solid black";

// const input = document.querySelector('input');
// input.value = "hello World";

// var submit  = document.querySelector('input[type="submit"]');
// submit.value = "SEND";

// var item = document.querySelector('.list-group-item');
// item.style.backgroundColor = 'red';

// var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.classList.add('text-light');
// lastItem.style.backgroundColor = 'blue';

// var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.backgroundColor = 'yellow';

// var thirdItem = document.querySelector('.list-group-item:nth-child(3)');
// thirdItem.classList.add('text-white');
// thirdItem.style.backgroundColor ='black';

// var title = document.querySelectorAll('.titles');
// console.log(title);
// title[0].textContent = "hello";
// title[1].textContent = "hello";

// var odd = document.querySelectorAll('li:nth-child(odd)');
// var even = document.querySelectorAll('li:nth-child(even)');
// // console.log(odd);
// for(let i=0; i<odd.length; i++){
//     odd[i].style.backgroundColor = 'green';
//     even[i].style.backgroundColor = 'yellow';
// }

//  Traversing DOM     //
// const itemList = document.querySelector('#items');
// itemList.parentNode.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentNode.parentNode.parentNode);
// itemList.parentNode.parentNode.parentNode.style.backgroundColor='yellow';

// child nodes
// console.log(itemList.childNodes);
// console.log(itemList.children[0]);
// itemList.children[0].style.backgroundColor = 'yellow';
// console.log(itemList.firstChild);
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = "hello one";

// console.log(itemList.lastElementChild);
// itemList.lastElementChild.classList.add('text-white');
// itemList.lastElementChild.style.backgroundColor = 'purple';

// console.log(itemList.nextSibling);
// console.log(itemList.nextElementSibling);
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.backgroundColor ='green';

// create element
// var newDiv = document.createElement('div');
// newDiv.className = 'hello';
// newDiv.id = 'hello1';
// newDiv.setAttribute('title','hello Div');
// // console.log(newDiv);

// var newDivText = document.createTextNode('Hello World');
// newDiv.appendChild(newDivText);
// console.log(newDiv);

// var cnt = document.querySelector('.cnt');
// var h1 = document.querySelector('#header-title');
// cnt.insertBefore(newDiv, h1)

