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

// var button = document.getElementById('button').addEventListener
// ('click', function(e){
// console.log("Button clicked");
// document.getElementById('header-title').textContent = "Changed header";
// document.querySelector('#main').style.backgroundColor = "#f4f4f4";
// console.log(e.target.id);
// console.log(e.target.className);
// console.log(e.target.classList);
// var output = document.querySelector('.output');
// output.innerHTML = `<h3> ${e.target.id} </h3>`;
// // console.log(e.type);
// console.log(e.clientX);
// console.log(e.clientY);

// console.log(e.offsetX);
// console.log(e.offsetY);
// console.log(e.altKey);
// console.log(e.shiftKey);
// console.log(e.ctrlKey);
// })

// var button = document.getElementById('button')
// //button.addEventListener('click', runEvent);
// // button.addEventListener('dblclick', runEvent);
// // button.addEventListener('mousedown', runEvent);
// // button.addEventListener('mouseup', runEvent);
// var box = document.getElementById('box');
// // box.addEventListener('mouseenter', runEvent);
// // box.addEventListener('mouseleave', runEvent);
// // box.addEventListener('mouseover', runEvent);
// // box.addEventListener('mouseout', runEvent);
// // box.addEventListener('mousemove', runEvent);
// var Iteminput = document.querySelector('input[type="text"]');
// var form = document.querySelector('.form-inline');
// var output = document.querySelector('.output');
// var select = document.querySelector('select');

// // Iteminput.addEventListener('keydown', runEvent);
// // Iteminput.addEventListener('keyup', runEvent);
// // Iteminput.addEventListener('keypress', runEvent);
// // Iteminput.addEventListener('focus', runEvent);
// // Iteminput.addEventListener('blur', runEvent);
// // Iteminput.addEventListener('cut', runEvent);
// // Iteminput.addEventListener('paste', runEvent);
// // Iteminput.addEventListener('input', runEvent);
// // select.addEventListener('change', runEvent);
// // select.addEventListener('input', runEvent);

// form.addEventListener('submit', runEvent);
// function runEvent(e){
//     e.preventDefault();
//     console.log("Event Type", e.type);
//     // console.log(e.target.value);
//     // output.innerHTML = `<h3>${e.target.value}</h3>`
//     // output.classList.add('mt-5')
//     // output.innerHTML = `
//     //                 <h3>offset X ${e.offsetX}</h3>
//     //                 <h3>offset Y ${e.offsetY}</h3>
//     // `;
//     // box.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`
//     // // document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`;
// }

// part 3 dom manipulation
var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');
// form submit event
form.addEventListener('submit', addItem);
// delete the item
itemList.addEventListener('click', removeItem);
// filter event
filter.addEventListener('keyup', filterItem);

// add item function
function addItem(e) {
    e.preventDefault();

    var newItem = document.getElementById('item').value;

    // Create new li element
    var li = document.createElement('li');
    // Add class
    li.className = 'list-group-item';
    // Add text node with input value
    li.appendChild(document.createTextNode(newItem));

    // add edit button
    var editbtn = document.createElement('button');
    editbtn.type = "button";
    editbtn.className = "btn btn-danger btn-sm float-right editBtn ml-2";
    editbtn.appendChild(document.createTextNode('Edit'));
    li.appendChild(editbtn);

    // Create del button element
    var deleteBtn = document.createElement('button');

    // Add classes to del button
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

    // Append text node
    deleteBtn.appendChild(document.createTextNode('X'));

    // Append button to li
    li.appendChild(deleteBtn);

    

    
    // Append li to list
    itemList.appendChild(li);


}
// remove li
function removeItem(e) {
    if (e.target.classList.contains('delete')) {
        if (confirm('Are you sure')) {
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

// filter item
function filterItem(e) {
    // convert to lowercase
    // console.log(e.target);
    var text = e.target.value.toLowerCase();
    // console.log(text);

    var items = itemList.getElementsByTagName('li');
    // console.log(items);
    Array.from(items).forEach((item) => {
        var itemName = item.firstChild.textContent;
        if (itemName.toLocaleLowerCase().indexOf(text) != -1) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    })
}

