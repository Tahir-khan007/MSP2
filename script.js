// script.js
import {
  loadTransactionsFromStorage,
  addTransaction,
  getTransactions,
  calculateTotals,
  filterTransactions,
} from './src/financeTracker.js';

document.addEventListener('DOMContentLoaded', () => {
  const localStorageKey = 'transactions';
  loadTransactionsFromStorage(localStorageKey);

  // DOM references
  const transactionModal = document.getElementById('transactionModal');
  const addTransactionBtn = document.getElementById('addTransactionBtn');
  const filterSelect = document.getElementById('filterType');
  const tableBody = document.getElementById('transactionBody');
  const totalBalance = document.getElementById('total-balance');
  const totalIncome = document.getElementById('total-income');
  const totalExpenses = document.getElementById('total-expenses');
  const chartCanvas = document.getElementById('chart').getContext('2d');

  // Inputs inside modal
  const categoryInput = document.getElementById('category');
  const descriptionInput = document.getElementById('description');
  const typeSelect = document.getElementById('type');
  const amountInput = document.getElementById('amount');
  const dateInput = document.getElementById('date');
  const saveTransactionBtn = document.getElementById('saveTransaction');

  let pieChart;

  function renderTable(data) {
    tableBody.innerHTML = '';
    if (data.length === 0) {
      tableBody.innerHTML = `<tr><td colspan="5" style="text-align: center;">No records found</td></tr>`;
      return;
    }

    data.forEach(t => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${t.category}</td>
        <td>${t.description}</td>
        <td class="${t.type === 'Income' ? 'income' : 'expense'}">${t.type}</td>
        <td>£${parseFloat(t.amount).toFixed(2)}</td>
        <td>${t.date}</td>
      `;
      tableBody.appendChild(row);
    });
  }

  function renderStats(data) {
    const { totalIncome: income, totalExpenses: expenses, balance } = calculateTotals(data);
    totalBalance.textContent = `£${balance.toFixed(2)}`;
    totalIncome.textContent = `£${income.toFixed(2)}`;
    totalExpenses.textContent = `£${expenses.toFixed(2)}`;
  }

  function renderChart(data) {
    const { totalIncome: income, totalExpenses: expenses } = calculateTotals(data);
    const chartData = {
      labels: ['Income', 'Expenses'],
      datasets: [{
        data: [income, expenses],
        backgroundColor: ['#4caf50', '#f44336'],
      }]
    };

    if (pieChart) pieChart.destroy();

    pieChart = new Chart(chartCanvas, {
      type: 'pie',
      data: chartData,
      options: {
        responsive: true,
        maintainAspectRatio: false,
      },
    });
  }

  function refreshUI(filter = '') {
    const filteredData = filterTransactions(filter, getTransactions());
    renderStats(filteredData);
    renderTable(filteredData);
    renderChart(filteredData);
  }

  // Open modal on add button click
  addTransactionBtn.addEventListener('click', () => {
    // Reset inputs
    categoryInput.value = '';
    descriptionInput.value = '';
    typeSelect.value = 'Income';
    amountInput.value = '';
    dateInput.value = new Date().toISOString().split('T')[0];
    transactionModal.style.display = 'flex';
  });

  // Close modal on clicking outside modal-content or on save button
  transactionModal.addEventListener('click', (e) => {
    if (e.target === transactionModal) {
      transactionModal.style.display = 'none';
    }
  });

  // Save transaction on save button click
  saveTransactionBtn.addEventListener('click', () => {
    // Validate required fields
    if (!categoryInput.value || !descriptionInput.value || !amountInput.value) {
      alert('Please fill all fields');
      return;
    }
    const newTxn = {
      category: categoryInput.value.trim(),
      description: descriptionInput.value.trim(),
      type: typeSelect.value,
      amount: parseFloat(amountInput.value),
      date: dateInput.value,
    };

    addTransaction(newTxn);
    transactionModal.style.display = 'none';
    refreshUI(filterSelect.value);
  });

  // Filter select change
  filterSelect.addEventListener('change', () => {
    refreshUI(filterSelect.value);
  });

  // Initial UI render
  refreshUI();
});
