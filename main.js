const myform = document.querySelector("#my-form");
const descriptionInput = document.querySelector("#description");
const amountInput = document.querySelector("#expAmt");
const catInput = document.querySelector("#Category");
const msg = document.querySelector(".msg");

const list = document.querySelector('.list');

// listen for form submit
myform.addEventListener('submit', onSubmit);

function onSubmit(e){
    e.preventDefault();

    if(descriptionInput.value === '' || amountInput.value ===''){
        msg.classList.add('error');
        msg.innerHTML ='Please enter all fields';

        // remove after 3 seconds
        setTimeout(()=>msg.remove(),3000);
    }else{
        // create new items
        let li = document.createElement('li');
        let details = {
            amount :amountInput.value,
            desc : descriptionInput.value,
            category : catInput.value
        }
        li.classList="list-group-item";

        li.innerHTML =`
        <div id=${amountInput.value}>
            ${details.amount} - ${details.desc}- ${details.category}
            <button class="btn btn-primary delete" onclikc="deleteItem(${amountInput.value})">delete Expense</button>
            <button class="btn btn-primary edit" onclikc="editItem(${details.amount},${details.desc})">Edit Expense</button>
        </div>
        `
        list.appendChild(li);
    }
}

function deleteItem(amount){
    const toDelete = document.getElementById('expAmt').value;
    toDelete.style.display ='none';
}

function editItem(amount, desc){
    amountInput.value = amount;
    descriptionInput.value = desc;
    deleteItem(amount);
}