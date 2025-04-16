"use strict";

// Initialize user with name and budget
let user = {
  name: "Tapas",
  budget: 5000,
};

console.log("Welcome to your Expense Tracker app");

/**
 * Factory function to create an expense tracker instance.
 * Encapsulates user data, balance, and expense list.
 *
 * @param {Object} username - User object containing name and other info.
 * @param {number} initialBudget - User's starting budget.
 * @returns {Object} An object exposing methods to manage expenses and user info.
 */
function createExpenseTracker(username, initialBudget) {
  // Set initial balance based on user's budget
  let balance = initialBudget;
  console.log(`Initial budget : ${balance}$`);

  // Clone user object to prevent external mutations
  let userInfoCopy = structuredClone(username);

  // Initialize expense list with sample data
  let expenses = [
    { id: 1, amount: 200, category: "Food", description: "Lunch" },
    { id: 2, amount: 500, category: "Shopping", description: "New Shoes" },
  ];
  console.log(expenses);

  // Return an object exposing various methods to interact with the tracker
  return {
    /**
     * Adds a new expense to the tracker.
     * Deducts the expense amount from the balance.
     *
     * @param {number} newAmount - The amount for the new expense.
     * @param {string} newCategory - The category of the new expense.
     * @param {string} newDescription - A description for the new expense.
     */
    newExpense(newAmount, newCategory, newDescription) {
      // Generate next expense ID
      let nextId =
        expenses.length > 0 ? expenses[expenses.length - 1].id + 1 : 1;
      // Create new expense object
      let newExpenses = {
        id: nextId,
        amount: newAmount,
        category: newCategory,
        description: newDescription,
      };
      // Add new expense to the list
      expenses.push(newExpenses);
      // Update balance after adding expense
      balance -= newAmount;
      console.log(
        `Your initial budget was reduced by: ${newAmount}$ and now is ${balance}$`
      );
    },

    /**
     * Removes an expense from the tracker by its ID.
     * Adds back the removed expense amount to the balance.
     *
     * @param {number} id - The ID of the expense to remove.
     */
    removeExpense(id) {
      // Find index of expense with the provided ID
      let deletedExpense = expenses.findIndex((exp) => exp.id === id);
      if (deletedExpense > -1) {
        // Add expense amount back to balance
        balance += expenses[deletedExpense].amount;
        console.log(
          `Your initial budget was increased by: ${expenses[deletedExpense].amount}$ and now is ${balance}$`
        );
        // Remove expense from the list
        expenses.splice(deletedExpense, 1);
      } else {
        console.warn(`Expense with ID ${id} was not found`);
      }
    },

    /**
     * Updates an existing expense and adjusts the balance accordingly.
     * If the expense amount is decreased, the balance increases by the difference;
     * if increased, the balance is decreased by the extra amount.
     *
     * @param {number} id - The ID of the expense to update.
     * @param {number} newAmount - The new amount for the expense.
     * @param {string} newCategory - The new category for the expense.
     * @param {string} newDescription - The new description for the expense.
     */
    updateExpense(id, newAmount, newCategory, newDescription) {
      // Find expense with the given ID
      let getUpdateExpense = expenses.find((exp) => exp.id === id);

      // Check if expense exists
      if (!getUpdateExpense) {
        console.warn(`Expense with ID ${id} was not found`);
        return;
      }

      // Store original expense amount before updating
      let oldAmount = getUpdateExpense.amount;

      // Update expense with new data
      getUpdateExpense.amount = newAmount;
      getUpdateExpense.category = newCategory;
      getUpdateExpense.description = newDescription;

      // Adjust balance based on change in expense amount
      if (oldAmount > newAmount) {
        // When new amount is lower, add back the difference
        balance += oldAmount - newAmount;
        console.log(`Your balance was increased by ${oldAmount - newAmount}$`);
      } else if (oldAmount < newAmount) {
        // When new amount is higher, subtract the extra amount
        balance -= newAmount - oldAmount;
        console.log(`Your balance was decreased by ${newAmount - oldAmount}$`);
      } else if (oldAmount === newAmount) {
        // If amount remains the same, only update other details
        console.log(
          "Expense details updated, but the amount remains the same."
        );
      }
    },

    /**
     * Calculates and logs the total of all expense amounts.
     */
    getTotalExpenses() {
      let totalExpense = expenses
        .map((exp) => exp.amount)
        .reduce((sum, amounts) => sum + amounts, 0);
      console.log(`Total Expense: ${totalExpense}$`);
    },

    /**
     * Filters and logs expenses that match a given category.
     * The search is case-insensitive.
     *
     * @param {string} category - The category to filter expenses by.
     */
    getExpenseCategory(category) {
      let getCategory = expenses.filter(
        (exp) => exp.category.toLowerCase() === category.toLowerCase()
      );
      console.log("Expenses in the requested category:", getCategory);
    },

    /**
     * Finds and logs the highest expense amount.
     */
    getHighestExpense() {
      if (expenses.length === 0) {
        console.warn(`There are no expenses to track`);
        return;
      }
      let highestExpense = Math.max(...expenses.map((exp) => exp.amount));
      console.log("Highest Expense amount:", highestExpense);
    },

    /**
     * Finds and logs the lowest expense amount.
     */
    getLowestExpense() {
      if (expenses.length === 0) {
        console.warn(`There are no expenses to track`);
        return;
      }
      let lowestExpense = Math.min(...expenses.map((exp) => exp.amount));
      console.log("Lowest Expense amount:", lowestExpense);
    },

    /**
     * Logs all expense amounts in the tracker.
     * (Currently returns only amounts; consider returning complete expense objects if needed.)
     */
    getAllExpenses() {
      let allExpenses = expenses.map((exp) => exp.amount);
      console.log("All Expenses:", allExpenses);
    },

    /**
     * Logs the stored user information.
     */
    getUserInfo() {
      console.log("User Information:", userInfoCopy);
    },
    /**
     * Updates the user's name and budget in the tracker.
     *
     * @param {string} newName - The new name for the user.
     * @param {number} newBudget - The new budget amount for the user.
     **/

    updateUserData(newName, newBudget) {
      userInfoCopy.name = newName;
      userInfoCopy.budget = newBudget;
      console.log("Edited User Information:", userInfoCopy);
    },
  };
}

let expenseTrackerResult = createExpenseTracker(user, user.budget);
expenseTrackerResult.newExpense(700, "Delivery", "Pizza");
expenseTrackerResult.newExpense(300, "Cinnema", "See Tv Series");
expenseTrackerResult.updateExpense(2, 600, "Traveling", "To London");
expenseTrackerResult.removeExpense(1);
expenseTrackerResult.getExpenseCategory("Traveling");
expenseTrackerResult.getHighestExpense();
expenseTrackerResult.getLowestExpense();
expenseTrackerResult.getAllExpenses();
expenseTrackerResult.getTotalExpenses();
expenseTrackerResult.updateUserData("Hassan", 8000);
expenseTrackerResult.getUserInfo();
