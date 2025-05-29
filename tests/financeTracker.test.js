/**
 * @jest-environment jsdom
 */

import {
  loadTransactionsFromStorage,
  saveTransactionsToStorage,
  addTransaction,
  getTransactions,
  calculateTotals,
  filterTransactions,
} from '../src/financeTracker.js';

describe('Finance Tracker Logic (TDD)', () => {
  beforeEach(() => {
    localStorage.clear();
    loadTransactionsFromStorage(); // Reset internal transactions state
  });

  it('should start with empty transactions if nothing saved', () => {
    const txns = getTransactions();
    expect(txns).toEqual([]);
  });

  it('should add a transaction and save it', () => {
    const newTxn = {
      category: 'Salary',
      description: 'Monthly Pay',
      type: 'Income',
      amount: 3000,
      date: '2025-05-01',
    };

    addTransaction(newTxn);

    const txns = getTransactions();
    expect(txns).toHaveLength(1);
    expect(txns[0]).toEqual(newTxn);

    const saved = JSON.parse(localStorage.getItem('transactions') || '[]');
    expect(saved).toHaveLength(1);
  });

  it('should calculate total income, expenses, and balance correctly', () => {
    const txns = [
      { category: 'Salary', description: 'Monthly Pay', type: 'Income', amount: 3000, date: '2025-05-01' },
      { category: 'Rent', description: 'House Rent', type: 'Expense', amount: 1000, date: '2025-05-02' },
      { category: 'Bonus', description: 'Yearly Bonus', type: 'Income', amount: 500, date: '2025-05-10' },
    ];

    localStorage.setItem('transactions', JSON.stringify(txns));
    loadTransactionsFromStorage();

    const totals = calculateTotals(getTransactions());
    expect(totals.totalIncome).toBe(3500);
    expect(totals.totalExpenses).toBe(1000);
    expect(totals.balance).toBe(2500);
  });

  it('should filter transactions by type', () => {
    const txns = [
      { category: 'Salary', description: 'Monthly Pay', type: 'Income', amount: 3000, date: '2025-05-01' },
      { category: 'Rent', description: 'House Rent', type: 'Expense', amount: 1000, date: '2025-05-02' },
      { category: 'Bonus', description: 'Yearly Bonus', type: 'Income', amount: 500, date: '2025-05-10' },
    ];

    localStorage.setItem('transactions', JSON.stringify(txns));
    loadTransactionsFromStorage();

    const incomes = filterTransactions('Income', getTransactions());
    expect(incomes).toHaveLength(2);
    expect(incomes.every(txn => txn.type === 'Income')).toBe(true);

    const expenses = filterTransactions('Expense', getTransactions());
    expect(expenses).toHaveLength(1);
    expect(expenses[0].type).toBe('Expense');

    const all = filterTransactions('All', getTransactions());
    expect(all).toHaveLength(3);
  });
});
