let transactions = [];

export function loadTransactionsFromStorage(key = 'transactions') {
  const saved = localStorage.getItem(key);
  transactions = saved ? JSON.parse(saved) : [];
  return transactions;
}

export function saveTransactionsToStorage(key = 'transactions') {
  localStorage.setItem(key, JSON.stringify(transactions));
}

export function getTransactions() {
  return transactions;
}

export function addTransaction(txn) {
  transactions.push(txn);
  saveTransactionsToStorage();
}

export function calculateTotals(data = transactions) {
  const totalIncome = data
    .filter(t => t.type === 'Income')
    .reduce((sum, t) => sum + parseFloat(t.amount), 0);

  const totalExpenses = data
    .filter(t => t.type === 'Expense')
    .reduce((sum, t) => sum + parseFloat(t.amount), 0);

  return {
    totalIncome,
    totalExpenses,
    balance: totalIncome - totalExpenses,
  };
}

export function filterTransactions(type, data = transactions) {
  if (!type || type.toLowerCase() === 'all') return data;
  return data.filter(t => t.type === type);
}
