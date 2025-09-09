// Mock data storage
const mockUsers = [
  { id: 1, name: 'John Doe', username: 'johndoe', email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', username: 'janesmith', email: 'jane@example.com' },
  { id: 3, name: 'Bob Johnson', username: 'bobjohnson', email: 'bob@example.com' }
];

let nextUserId = 4;

async function fetchUsers() {
  console.log('Fetching users...');
  
  // Simulate network delay (1.5 seconds)
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  console.log('Users fetched successfully!');
  return [...mockUsers]; // Return copy of mock data
}

async function createUser(userData) {
  console.log('Creating new user...', userData);
  
  // Simulate network delay (2 seconds)
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  const newUser = {
    id: nextUserId++,
    name: userData.name,
    username: userData.username,
    email: userData.email,
    createdAt: new Date().toISOString()
  };
  
  // Add to mock storage
  mockUsers.push(newUser);
  
  console.log('User created successfully!', newUser);
  return newUser;
}

async function fetchUserById(id) {
  console.log(`Fetching user with ID: ${id}...`);
  
  // Simulate network delay (1 second)
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  const user = mockUsers.find(user => user.id === id);
  if (!user) {
    throw new Error(`User with ID ${id} not found`);
  }
  
  console.log('User fetched successfully!');
  return user;
}

export { createUser, fetchUsers, fetchUserById };
