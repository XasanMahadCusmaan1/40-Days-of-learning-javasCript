// - [ ]  1. Split a Utility Library

// Create a small utility library(e.g., math functions like add, subtract,
// multiply, divide) in separate module files and import them into a main index.js
// file to perform operations.

import { add, subtract, multiply, divide } from "./calc.js";

console.log(add(12, 2));
console.log(subtract(12, 2));
console.log(multiply(12, 2));
console.log(divide(12, 2));

// - [ ]  2. Create a Feature-Based Module Structure

// Create a small blog app where:

// - post.js handles posts
// - user.js handles user info
// - main.js brings it together via import

import { doPost } from "./post.js";
import { user } from "./user.js";

console.log(doPost());
console.log(user);

// - [ ]  3. Use Named vs Default Exports

// Create modules with both named and default exports, and demonstrate:

// - How to import them correctly
// - How to rename named exports during import

// this how to import named exports and rename
import { add as addition } from "./calc.js";

// this is default imports and how to do their import
import defaultFunc from "./default.js";

defaultFunc();
console.log(addition(22, 10));

// - [x]  4. Mock an API Module

// Create api.js that exports functions like fetchUsers, createUser, etc.

// - Simulate network delays using setTimeout
// - Use these in a frontend to display mock data

import * as api from "./api.js";

// Function to display users in the DOM
function displayUsers(users, title = 'Users List') {
  const container = document.getElementById('users-container') || createUsersContainer();
  container.innerHTML = `<h2>${title}</h2>`;
  
  users.forEach(user => {
    const userDiv = document.createElement('div');
    userDiv.style.cssText = 'border: 1px solid #ccc; padding: 10px; margin: 10px 0; border-radius: 5px; background: #f9f9f9;';
    userDiv.innerHTML = `
      <h3>${user.name}</h3>
      <p><strong>Username:</strong> ${user.username}</p>
      <p><strong>Email:</strong> ${user.email}</p>
      <p><strong>ID:</strong> ${user.id}</p>
      ${user.createdAt ? `<p><strong>Created:</strong> ${new Date(user.createdAt).toLocaleString()}</p>` : ''}
    `;
    container.appendChild(userDiv);
  });
}

// Function to create users container
function createUsersContainer() {
  const container = document.createElement('div');
  container.id = 'users-container';
  container.style.cssText = 'margin: 20px 0;';
  document.body.appendChild(container);
  return container;
}

// Demo function to showcase the mock API
async function demoMockAPI() {
  try {
    // 1. Fetch all users initially
    const users = await api.fetchUsers();
    displayUsers(users, 'Initial Users List');
    
    // Wait 2 seconds before next operation
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // 2. Create a new user
    const newUser = await api.createUser({
      name: "Hassan",
      username: "hassan22",
      email: "xasanow@gmail.com",
    });
    
    // Display success message
    const successDiv = document.createElement('div');
    successDiv.style.cssText = 'background: #d4edda; color: #155724; padding: 10px; margin: 10px 0; border-radius: 5px;';
    successDiv.innerHTML = `<p><strong>✅ User Created Successfully!</strong><br>Name: ${newUser.name}<br>ID: ${newUser.id}</p>`;
    document.body.appendChild(successDiv);
    
    // Wait 2 seconds before fetching updated list
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // 3. Fetch updated users list
    const updatedUsers = await api.fetchUsers();
    displayUsers(updatedUsers, 'Updated Users List (After Creating Hassan)');
    
    // Wait 2 seconds before next operation
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // 4. Fetch single user by ID
    const singleUser = await api.fetchUserById(1);
    
    // Display single user
    const singleUserDiv = document.createElement('div');
    singleUserDiv.style.cssText = 'background: #e7f3ff; padding: 15px; margin: 10px 0; border-radius: 5px; border-left: 4px solid #007bff;';
    singleUserDiv.innerHTML = `
      <h3>Single User Fetch Result</h3>
      <p><strong>Name:</strong> ${singleUser.name}</p>
      <p><strong>Username:</strong> ${singleUser.username}</p>
      <p><strong>Email:</strong> ${singleUser.email}</p>
      <p><strong>ID:</strong> ${singleUser.id}</p>
    `;
    document.body.appendChild(singleUserDiv);
    
  } catch (error) {
    console.error('Error in demo:', error);
    
    const errorDiv = document.createElement('div');
    errorDiv.style.cssText = 'background: #f8d7da; color: #721c24; padding: 10px; margin: 10px 0; border-radius: 5px;';
    errorDiv.innerHTML = `<p><strong>❌ Error:</strong> ${error.message}</p>`;
    document.body.appendChild(errorDiv);
  }
}

// Start the demo when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  // Add a title for the demo
  const demoTitle = document.createElement('div');
  demoTitle.style.cssText = 'background: #007bff; color: white; padding: 15px; margin: 10px 0; border-radius: 5px; text-align: center;';
  demoTitle.innerHTML = '<h2>🚀 Mock API Demo - Task 4</h2><p>Watch the simulated network delays and data display!</p>';
  document.body.appendChild(demoTitle);
  
  demoMockAPI();
});



// - [ ]  5. Quiz App Modularized

// Modularize a quiz app:

// - questions.js: array of questions
// - quizLogic.js: handles quiz flow
// - ui.js: handles DOM updates
// - main.js: runs everything

