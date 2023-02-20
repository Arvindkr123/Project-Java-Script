$(document).ready(function() {

  // retrieve expenses from local storage or create an empty array
  let expenses = JSON.parse(localStorage.getItem('expenses')) || [];

  // function to add expense to the list and to local storage
  function addExpense(expense) {
    expenses.push(expense);
    localStorage.setItem('expenses', JSON.stringify(expenses));
    updateList();
  }

  // function to update the list of expenses
  function updateList() {
    $('#expenseList').empty();
    let total = 0;
    expenses.forEach(function(expense, index) {
      total += expense.amount;
      let listItem = $('<li>').addClass('list-group-item d-flex justify-content-between align-items-center')
        .append($('<span>').text(expense.name))
        .append($('<span>').text('$' + expense.amount.toFixed(2)))
        .append($('<span>').addClass('badge badge-primary badge-pill mr-auto').text(expense.category))
        .append($('<button>').addClass('btn btn-danger btn-sm ml-3 delete').attr('data-index', index).text('Delete'))
        .append($('<button>').addClass('btn btn-info btn-sm ml-1 edit').attr('data-index', index).text('Edit'));
      $('#expenseList').append(listItem);
    });
    $('#totalExpenses').text('$' + total.toFixed(2));
  }

  // event listener for adding expenses
  $('#expenseForm').submit(function(event) {
    event.preventDefault();
    let name = $('#expenseName').val();
    let amount = parseFloat($('#expenseAmount').val());
    let category = $('#expenseCategory').val();
    let expense = {
      name: name,
      amount: amount,
      category: category
    };
    addExpense(expense);
    $('#expenseForm')[0].reset();
  });

  // event listener for deleting expenses
  $(document).on('click', '.delete', function() {
    let index = $(this).data('index');
    expenses.splice(index, 1);
    localStorage.setItem('expenses', JSON.stringify(expenses));
    updateList();
  });

  // event listener for editing expenses
  $(document).on('click', '.edit', function() {
    let index = $(this).data('index');
    let expense = expenses[index];
    $('#expenseName').val(expense.name);
    $('#expenseAmount').val(expense.amount);
    $('#expenseCategory').val(expense.category);
    expenses.splice(index, 1);
    localStorage.setItem('expenses', JSON.stringify(expenses));
    updateList();
  });

  // initialize the list of expenses on page load
  updateList();

});
