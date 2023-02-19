// Get expense form and list
const expenseForm = document.getElementById('expense-form');
const expenseList = document.getElementById('expense-list');

// Load expenses from local storage
let expenses = JSON.parse(localStorage.getItem('expenses')) || [];

// Create expense item
function createExpenseItem(expense) {
  const expenseItem = document.createElement('li');
  expenseItem.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
  expenseItem.innerHTML = `
    <div>
      <strong>${expense.name}</strong>
      <br>
      <span class="text-muted">${expense.category}</span>
    </div>
    <div>
      <span class="badge badge-primary badge-pill">${expense.amount} EGP</span>
      <button class="btn btn-danger btn-sm ml-3 delete-btn">Delete</button>
      <button class="btn btn-secondary btn-sm edit-btn ml-2">Edit</button>
    </div>
  `;

  // Add delete button event listener
  const deleteButton = expenseItem.querySelector('.delete-btn');
  deleteButton.addEventListener('click', () => {
    expenses = expenses.filter(e => e !== expense);
    localStorage.setItem('expenses', JSON.stringify(expenses));
    expenseItem.remove();
  });

  // Add edit button event listener
  const editButton = expenseItem.querySelector('.edit-btn');
  editButton.addEventListener('click', () => {
    expenses = expenses.filter(e => e !== expense);
    localStorage.setItem('expenses', JSON.stringify(expenses));
    document.getElementById('expense-name').value = expense.name;
    document.getElementById('expense-amount').value = expense.amount;
    document.getElementById('expense-category').value = expense.category;
  });

  return expenseItem;
}

// Render expenses
function renderExpenses() {
  expenseList.innerHTML = '';
  expenses.forEach(expense => {
    expenseList.appendChild(createExpenseItem(expense));
  });
}

// Add expense
expenseForm.addEventListener('submit', event => {
  event.preventDefault();

  const expenseName = document.getElementById('expense-name').value;
  const expenseAmount = document.getElementById('expense-amount').value;
  const expenseCategory = document.getElementById('expense-category').value;

  if (!expenseName || !expenseAmount || !expenseCategory) {
    return;
  }

  const expense = {
    name: expenseName,
    amount: expenseAmount,
    category: expenseCategory
  };
  expenses.push(expense);
  localStorage.setItem('expenses', JSON.stringify(expenses));
  expenseList.appendChild(createExpenseItem(expense));

  expenseForm.reset();
});

// Load and render expenses
window.addEventListener('load', () => {
  renderExpenses();
});
