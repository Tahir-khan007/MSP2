# 💰 Finance Tracker

A responsive web application to help users track their income and expenses, visualize their financial status with charts, and manage transactions easily through an intuitive interface.

![Finance Tracker Hero](./assets/homepage-screenshot.png)
*Hero page introducing users to the Finance Tracker application*

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

### User Stories with Screenshots

#### First-time Users Goals:

**User Story 1**: *"As a first-time user, I want to understand what this application does so that I can decide if it meets my needs."*

![Homepage Screenshot](./assets/homepage-screenshot.png)
*The hero page clearly explains the application's purpose and features, allowing new users to understand the value proposition immediately.*

**User Story 2**: *"As a first-time user, I want to see a clean dashboard overview so that I can quickly understand my financial status."*

![Dashboard Overview](./assets/dashboard-screenshot.png)
*The main dashboard provides an immediate overview with total balance, income, and expenses prominently displayed, along with a visual pie chart comparison.*

**User Story 3**: *"As a first-time user, I want to easily add my first transaction so that I can start tracking my finances."*

![Add Transaction Modal](./assets/add-transaction-screenshot.png)
*The "Add Transaction" button opens an intuitive modal form with clear fields for category, description, type, amount, and date, making it simple for new users to add their first transaction.*

#### Returning Users Goals:

**User Story 4**: *"As a returning user, I want to quickly view my recent transactions so that I can review my spending patterns."*

![Transactions Table](./assets/transactions-table-screenshot.png)
*The transactions table displays all recent transactions with clear categorization, type indicators (green for income, red for expenses), and easy-to-scan information.*

**User Story 5**: *"As a returning user, I want to filter my transactions by type so that I can analyze my income or expenses separately."*

![Filter Transactions](./assets/filter-screenshot.png)
*The filter dropdown allows users to quickly switch between viewing all transactions, just income, or just expenses, helping with focused financial analysis.*

**User Story 6**: *"As a returning user, I want to see visual representations of my financial data so that I can understand my spending habits at a glance."*

![Financial Charts](./assets/chart-screenshot.png)
*The pie chart provides an immediate visual comparison between income and expenses, making it easy to understand financial balance.*

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

- **Hero Landing Page**: Introduces new users to the application with clear value proposition
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

The Finance Tracker application has been thoroughly tested using both automated unit tests and manual testing procedures to ensure reliability and user experience.

### Automated Testing

#### Unit Tests with Jest

All core business logic has been tested using Jest with the jsdom environment. Tests cover:

**Test Suite: Finance Tracker Logic (TDD)**

1. **Empty State Test**
   - **Test**: `should start with empty transactions if nothing saved`
   - **Purpose**: Ensures application starts with clean state when no data exists
   - **Result**: ✅ PASS

2. **Add Transaction Test**
   - **Test**: `should add a transaction and save it`
   - **Purpose**: Verifies transactions are properly added and persisted to localStorage
   - **Result**: ✅ PASS

3. **Financial Calculations Test**
   - **Test**: `should calculate total income, expenses, and balance correctly`
   - **Purpose**: Ensures accurate financial calculations across multiple transactions
   - **Test Data**: 
     - Income: £3000 (Salary) + £500 (Bonus) = £3500
     - Expenses: £1000 (Rent)
     - Expected Balance: £2500
   - **Result**: ✅ PASS

4. **Transaction Filtering Test**
   - **Test**: `should filter transactions by type`
   - **Purpose**: Verifies filtering functionality works correctly for Income, Expense, and All categories
   - **Result**: ✅ PASS

#### Running Tests

```bash
npm test
```

All tests use the `@jest-environment jsdom` configuration to simulate browser localStorage APIs.

### Manual Testing

#### Browser Compatibility Testing
- ✅ Chrome (Latest)
- ✅ Firefox (Latest)
- ✅ Safari (Latest)
- ✅ Edge (Latest)

#### Responsive Design Testing
- ✅ Desktop (1920x1080)
- ✅ Tablet (768x1024)
- ✅ Mobile (375x667)

#### User Interface Testing

**Add Transaction Functionality**
- ✅ Modal opens when "Add Transaction" button is clicked
- ✅ Form validation prevents empty submissions
- ✅ Date field defaults to current date
- ✅ Modal closes after successful submission
- ✅ Transaction appears immediately in table

**Filter Functionality**
- ✅ "All" shows all transactions
- ✅ "Income" shows only income transactions
- ✅ "Expense" shows only expense transactions
- ✅ Stats update correctly with filters

**Data Persistence**
- ✅ Transactions persist after page refresh
- ✅ Data stored correctly in localStorage
- ✅ Application handles corrupted localStorage gracefully

### Code Validation

#### HTML Validation
- ✅ W3C HTML Validator - No errors found
- ✅ Semantic HTML structure implemented
- ✅ Proper accessibility attributes

#### CSS Validation
- ✅ W3C CSS Validator - No errors found
- ✅ Responsive design principles followed
- ✅ Cross-browser compatible styles

#### JavaScript Validation
- ✅ ESLint - Code follows ES6+ standards
- ✅ No console errors in production
- ✅ Proper error handling implemented

### Performance Testing
- ✅ Page load time under 2 seconds
- ✅ Chart rendering performance optimized
- ✅ Efficient DOM manipulation

### Accessibility Testing
- ✅ Keyboard navigation support
- ✅ Screen reader compatibility
- ✅ Color contrast meets WCAG guidelines
- ✅ Focus indicators visible

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

### Live Demo

The application is deployed and accessible at: [Finance Tracker Demo](https://tahir-khan007.github.io/MSP2/)

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
- [W3C HTML Validator](https://validator.w3.org/)
- [W3C CSS Validator](https://jigsaw.w3.org/css-validator/)