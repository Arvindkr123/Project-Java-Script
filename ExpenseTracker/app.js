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

let formValidation = () => {
    return new Promise((resolve, reject) => {
        if (expenseAmount.value === "" || description.value === "" || category.value === "") {
            console.log("failure");
            msg.innerHTML = `<h3 class="text-bg-danger">Task cannot be blank<h3>`;
            reject('Error: Task cannot be blank');
        } else {
            console.log("success");
            msg.innerHTML = "";
            acceptData().then(() => {
                createTasks();
                resolve();
            }).catch((error) => {
                console.error(error);
                reject(error);
            });
        };
    });
}


let acceptData = () => {
    return new Promise((resolve, reject) => {
        const payload = {
            ExpenseAmount: expenseAmount.value,
            Description: description.value,
            Category: category.value,
        };
        axios
            .post(url, payload)
            .then(async (response) => {
                console.log(response.data);
                try {
                    const res = await axios.get(url);
                    data = res.data;
                    localStorage.setItem("data", JSON.stringify(data));
                    resolve();
                } catch (error) {
                    console.error(error);
                    reject(error);
                }
            })
            .catch((error) => {
                console.error(error);
                reject(error);
            });
    });
};


let createTasks = () => {
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


let deleteTask = (e) => {
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
    axios.delete(`${url}/${itemId}`)
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.error(error);
        });
};



let editTask = (e) => {
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
    try {
        localStorage.setItem("data", JSON.stringify(data));
    } catch (error) {
        console.error(error);
    }
    axios.delete(`${url}/${itemId}`)
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.error(error);
        });

    // Update the item in the database
    const payload = {
        ExpenseAmount: expenseAmount.value,
        Description: description.value,
        Category: category.value,
    };
    const expenseId = listItem.id;
    axios.put(`${url}/${expenseId}`, payload)
        .then((response) => {
            console.log(response.data);
            data[expenseId] = payload;
            try {
                localStorage.setItem("data", JSON.stringify(data));
            } catch (error) {
                console.error(error);
            }
            createTasks();
        })
        .catch((error) => {
            console.error(error);
        });
};


let resetForm = () => {
    expenseAmount.value = "";
    description.value = "";
    category.value = "";
};

(async () => {
    try {
        data = JSON.parse(localStorage.getItem("data")) || [];
        console.log(data);
        await createTasks();
    } catch (error) {
        console.error(error);
    }
})();
