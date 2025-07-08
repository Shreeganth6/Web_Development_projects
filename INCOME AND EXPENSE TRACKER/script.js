// INCOME - Copy Amount Received to In Total
const amountReceived = document.querySelector('#amount-received');
const incomeTotal = document.querySelector('#income-total');

amountReceived.addEventListener('input', () => {
  incomeTotal.value = amountReceived.value;
});

// EXPENSE - Calculate Total = Quantity × Amount
const quantity = document.querySelector('#quantity');
const expenseAmount = document.querySelector('#expense-amount');
const expenseTotal = document.querySelector('#expense-total');

function updateExpenseTotal() {
  const qty = parseFloat(quantity.value) || 0;
  const amt = parseFloat(expenseAmount.value) || 0;
  expenseTotal.value = (qty * amt).toFixed(2);
}

quantity.addEventListener('input', updateExpenseTotal);
expenseAmount.addEventListener('input', updateExpenseTotal);
