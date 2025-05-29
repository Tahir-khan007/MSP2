# 💰 Finance Tracker

A responsive web application to help users track their income and expenses, visualize their financial status with charts, and manage transactions easily through an intuitive interface.

## Project Overview

This Finance Tracker app allows users to add, view, and filter financial transactions, providing a clear overview of their total balance, income, and expenses. The app uses localStorage to persist data and Chart.js to visualize income versus expenses in a pie chart.

## The Why

The primary goal of this project is to provide users with a simple yet effective tool to manage their personal finances. By tracking income and expenses, users can better understand their spending habits and make informed financial decisions.

## User & Business Goals

- Enable users to easily add and categorize financial transactions.
- Provide clear visual summaries of financial data.
- Allow filtering of transactions by type (Income or Expense).
- Persist data locally for convenience without requiring backend setup.
- Offer a clean, user-friendly interface accessible on various devices.

## (UX) User Experience

Users can quickly add new transactions via a modal form, view recent transactions in a table, and filter them by type. The dashboard displays total balance, income, and expenses, along with a pie chart for visual comparison.

### User Stories

- #### First-time Users Goals:
  - Understand how to add and categorize transactions.
  - View an overview of their financial status.
  - Easily filter transactions to analyze income or expenses.

- #### Returning Users Goals:
  - Quickly add new transactions.
  - Review past transactions and financial summaries.
  - Use filters to focus on specific transaction types.

## Design

The design is clean and minimalistic, focusing on usability and clarity.

### Design Brief

- **Color**:
  - **Green (#4caf50)**: Represents income and positive balance.
  - **Red (#f44336)**: Represents expenses and outflows.
  - **Neutral tones**: For backgrounds and text to maintain readability.

- **Typography**:
  - Simple, readable fonts for easy scanning of data.

- **Layout**:
  - Responsive layout with clear sections for stats, transactions, and charts.
  - Modal form for adding transactions to keep the interface uncluttered.

## Features

### Existing Features

- **Dashboard Stats**: Displays total balance, total income, and total expenses.
- **Pie Chart**: Visualizes income vs expenses using Chart.js.
- **Transaction Table**: Lists recent transactions with category, description, type, amount, and date.
- **Add Transaction Modal**: Allows users to add new transactions with validation.
- **Filter Transactions**: Filter transactions by Income, Expense, or view all.
- **LocalStorage Persistence**: Saves transactions locally for data persistence across sessions.

### Future Features

- **Edit/Delete Transactions**: Allow users to modify or remove existing transactions.
- **Monthly/Yearly Reports**: Generate detailed financial reports over time.
- **User Authentication**: Enable multiple users with secure login.
- **Cloud Sync**: Sync data across devices via backend integration.

## Technologies

### Languages Used

- [HTML5](https://en.wikipedia.org/wiki/HTML5)
- [CSS3](https://en.wikipedia.org/wiki/CSS)
- [JavaScript (ES6 Modules)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

### Libraries & Tools

- [Chart.js](https://www.chartjs.org/) - For rendering pie charts.
- [Jest](https://jestjs.io/) - For unit testing JavaScript logic.

## Testing

### Testing Overview

- Unit tests cover core finance tracker logic including adding transactions, calculating totals, and filtering.
- Tests run using Jest with jsdom environment to simulate browser APIs.
- Tests ensure data integrity and correct calculations.

## Challenges & Learning

- Managing state and persistence with localStorage.
- Implementing dynamic UI updates with vanilla JavaScript.
- Integrating Chart.js for responsive and interactive charts.
- Writing comprehensive unit tests for core logic.

## Future Enhancements

- 🚀 Add transaction editing and deletion capabilities.
- 🚀 Implement detailed financial reports and analytics.
- 🚀 Add user authentication and cloud data sync.
- 🚀 Improve UI/UX with animations and accessibility features.

## Deployment

### Version Control & Deployment

- Developed using Git and GitHub.
- Hosted as a static site (can be deployed on GitHub Pages or any static hosting).

### Cloning Repository Locally

Clone the repository using the following command:

```bash
git clone https://github.com/Tahir-khan007/MSP2.git
```

### Forking Repository

1. Log in to GitHub and locate the repository.
2. Click the **Fork** button at the top-right.
3. This will create a copy of the project in your GitHub account.

## Credits

### Acknowledgements

Thanks to the Code Institute and all mentors for their guidance and support throughout this project.

### Resources

- [MDN Web Docs](https://developer.mozilla.org/)
- [Chart.js Documentation](https://www.chartjs.org/docs/latest/)
- [Jest Documentation](https://jestjs.io/docs/getting-started)
- [LocalStorage API](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
