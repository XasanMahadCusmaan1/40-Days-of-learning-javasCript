"use strict";

let user = {
  name: "Tapas",
  budget: 5000,
};

let expenses = [
  { id: 1, amount: 200, category: "Food", description: "Lunch" },
  { id: 2, amount: 500, category: "Shopping", description: "New Shoes" },
];

console.log("Welcome to your Expense Tracker app");

function createExpenseTracker(username, initialBudget) {
  let balance = initialBudget;
  console.log(`budget is :${balance}$`);

  return {
    addExpense(newAmount, newCategory, newDescription) {
      let nextId =
        expenses.length > 0 ? expenses[expenses.length - 1].id + 1 : 0;
      let newExpenses = {
        id: nextId,
        amount: newAmount,
        category: newCategory,
        description: newDescription,
      };
      expenses.push(newExpenses);
    },

    removeExpense(id) {
      let deletedExpense = expenses.findIndex((exp) => exp.id === id);
      return expenses.splice(deletedExpense, 1);
    },
    updateExpenses(id, newAmount, newCategory, newDescription) {
      let getUpdateExpense = expenses.find((exp) => exp.id === id);
      if (getUpdateExpense) {
        getUpdateExpense.amount = newAmount;
        getUpdateExpense.category = newCategory;
        getUpdateExpense.description = newDescription;
      } else {
        console.log(`this Expense Id ${id} doesn't Exist`);
      }
    },

    getTotalExpenses() {
      let totalExpense = expenses
        .map((exp) => exp.amount)
        .reduce((sum, amounts) => sum + amounts);
      console.log(`Total Expense: ${totalExpense}$`);
    },

    getExpenseCatigory(category) {
      let getCategory = expenses.filter(
        (exp) => exp.category.toLowerCase() === category.toLowerCase()
      );
      console.log("This is all the category request :", getCategory);
    },

    getHighestExpense() {
      let highestExpense = expenses.map((exp) => exp.amount);
      console.log("Highest Expense amount : ", Math.max(...highestExpense));
    },

    getLoswestExpense() {
      let lowestExpense = expenses.map((exp) => exp.amount);
      console.log("Lowest Expense amount : ", Math.min(...lowestExpense));
    },

    getUserInfo() {
      let copyUserInfo = structuredClone(username);
      console.log(copyUserInfo);
    },

    getAllExpenses() {
      let allExpenses = expenses.map((exp) => exp.amount);
      console.log("All Expenses", allExpenses);
    },

    updateUserData(username, newName, newBudget) {
      username.name = newName;
      username.budget = newBudget;
      console.log(username)
    },
  };
}
let expenseTrackerResult = createExpenseTracker(user, user.budget);
expenseTrackerResult.addExpense(100, "Delivery", "Pizza");
expenseTrackerResult.addExpense(700, "Cinnema", "See Tvseries");
expenseTrackerResult.addExpense(300, "Cinnema", "Money heist");
// expenseTrackerResult.removeExpense(4);
expenseTrackerResult.updateExpenses(2, 30, "Traveling", "To London");
expenseTrackerResult.getTotalExpenses();
expenseTrackerResult.getExpenseCatigory("Traveling");
expenseTrackerResult.getHighestExpense();
expenseTrackerResult.getLoswestExpense();
expenseTrackerResult.getUserInfo();
expenseTrackerResult.getAllExpenses();
expenseTrackerResult.updateUserData(user, "Hassan", 5000);

console.log(expenses);
