let form = document.getElementById('form');
let expenseAmount = document.getElementById('expanseAmount');
let description = document.getElementById('description');
let category = document.getElementById('category');
let msg = document.querySelector('.msg');
let list = document.querySelector('#list');
let data = [];

form.addEventListener("submit", async (e) => {
    e.preventDefault();
    try {
        await formValidation();
    } catch (error) {
        console.error(error);
    }
});

let url = 'https://crudcrud.com/api/8957dda34ac4437d95359629798656a1/expanse'

let formValidation = async () => {
    if (expenseAmount.value === "" || description.value === "" || category.value === "") {
        console.log("failure");
        msg.innerHTML = `<h3 class="text-bg-danger">Task cannot be blank<h3>`;
        throw new Error('Error: Task cannot be blank');
    } else {
        console.log("success");
        msg.innerHTML = "";
        try {
            await acceptData();
            createTasks();
        } catch (error) {
            console.error(error);
            throw error;
        };
    }
}


let acceptData = async () => {
    const payload = {
        ExpenseAmount: expenseAmount.value,
        Description: description.value,
        Category: category.value,
    };
    try {
        const response = await axios.post(url, payload);
        console.log(response.data);
        const res = await axios.get(url);
        data = res.data;
        localStorage.setItem("data", JSON.stringify(data));
    } catch (error) {
        console.error(error);
        throw error;
    }
};


let createTasks = async () => {
    list.innerHTML = "";
    data.forEach((x, y) => {
        list.innerHTML += `
            <li id = ${y} class="list-group-item d-flex align-item-center justify-content-between">
                <span>${x._id}</span>
                <span>${x.ExpenseAmount}</span>
                <span>${x.Description}</span>
                <span>${x.Category}</span>
                <span><button class="btn btn-danger" onClick="deleteTask(this)">Delete Expense</button></span>
                <span><button class="btn btn-info" onClick="editTask(this);">Edit Expense</button></span>
            </li>
        `;
    });

    resetForm();
};


let deleteTask = async (e) => {
    // Remove the item from the DOM
    e.parentElement.parentElement.remove();

    // Get the item's ID
    const itemId = data[e.parentElement.parentElement.id]._id;

    // Remove the item from the data array
    data.splice(e.parentElement.parentElement.id, 1);

    // Update the local storage
    try {
        localStorage.setItem("data", JSON.stringify(data));
    } catch (error) {
        console.error(error);
    }

    // Delete the item from the database
    try {
        const response = await axios.delete(`${url}/${itemId}`);
        console.log(response);
    } catch (error) {
        console.error(error);
    }
};


let editTask = async (e) => {
    try {
        const listItem = e.parentElement.parentElement;
        const value1 = listItem.querySelector("span:nth-child(2)");
        const value2 = listItem.querySelector("span:nth-child(3)");
        const value3 = listItem.querySelector("span:nth-child(4)");

        expenseAmount.value = value1.innerHTML;
        description.value = value2.innerHTML;
        category.value = value3.innerHTML;

        // Remove the item from local storage and database
        const itemId = data[listItem.id]._id;
        console.log(listItem.id);
        data.splice(listItem.id, 1);
        e.parentElement.parentElement.remove();

        localStorage.setItem("data", JSON.stringify(data));
        await axios.delete(`${url}/${itemId}`);

        // Update the item in the database
        const payload = {
            ExpenseAmount: expenseAmount.value,
            Description: description.value,
            Category: category.value,
        };
        const expenseId = listItem.id;
        const response = await axios.put(`${url}/${expenseId}`, payload);
        console.log(response.data);
        data[expenseId] = payload;
        localStorage.setItem("data", JSON.stringify(data));
        createTasks();
    } catch (error) {
        console.error(error);
    }
};



let resetForm = () => {
    expenseAmount.value = "";
    description.value = "";
    category.value = "";
};

(async () => {
    try {
        // data = JSON.parse(localStorage.getItem("data")) || [];
        let response = await axios.get(url);
        data = response.data;
        console.log(data);
        createTasks();
    } catch (error) {
        console.error(error);
    }
})();
