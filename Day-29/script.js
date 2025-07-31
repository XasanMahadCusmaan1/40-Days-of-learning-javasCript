// 1. What are Objects?
// 2. What are Classes?
// 3. What are Functions?
// 3. How Can you practically think of Classes and Objects?
// 4. What is OOP?
// 5. Why OOP is Important in programming?
// 6. Real-World Use Cases of OOP
// 7. Five key OOP principles:
// a. Abstraction
// b. Encapsulation
// c. Inheritance
// d. Polymorphism
// e. Composition

/*
city
    -> houses
        -> roof
        -> doors
        -> windows
    -> cars
        -> model
        -> brand
        -> color
        -> wheels
    -> people
    -> hospitals
    -> roads

    */

// Game Development => Objects like Player, Enemy, Weapon help structure gameplay logic.

// E-commerce Website => User, Product, Cart, Order objects each have roles.

// Mobile Apps => Components like Screen, Button, Notification are objects.

// Banking Software => Customer, Account, Transaction manage real-world banking processes.

// Vehicle Management System => Vehicles are objects with types (Truck, Bike) that inherit from a base Vehicle

// Abstraction

// Abstraction is the process of hiding the internal complexities of how something works and only exposing what’s necessary for the user to interact with.

// Encapsulation

// Encapsulation is the bundling of data and methods that operate on that data into a single unit, usually a class — and restricting direct access to some of the object’s components.

// Inheritance

// Inheritance allows one class (child) to reuse the properties and methods of another class (parent), reducing duplication and promoting reusability.

// Polymorphism

// Polymorphism means “many forms” — it allows objects of different classes to be treated as if they are of the same type, but behave differently based on their class-specific implementations.

// Composition

// Composition is a design principle where one class contains or is composed of one or more objects of other classes to reuse their functionality, instead of inheriting from them.

// has-a

// Abstraction    ── Hide complexity, expose interface
// Encapsulation  ── Bundle + protect state
// Inheritance    ── Share logic across classes
// Polymorphism   ── Same method, different behaviors
// Composition.   ── Build by combining units

// {
//     "name": "tom",
//     "isCat": () => {
//         return true
//     }
// }

// TASK SOLUTIONS

// - [ ]  1. Identify Real-Life Objects with OOP Concepts

// Pick any 3 real-life objects (e.g., smartphone, bicycle, school), and for each:

// - List at least 3 properties (attributes).
// - List at least 3 behaviors (methods).
// - Write which OOP principle each property or behavior best represents and why.

// --- Smartphone ---

// Properties:
// - color (Encapsulation: color is bundled inside the smartphone object)
// - size (Encapsulation: size is part of the object’s data)
// - brand (Abstraction: users see the brand, but don’t know how it’s set inside)

// Behaviors:
// - call() (Polymorphism: different phones can make calls in different ways)
// - setAlarm() (Abstraction: user sets an alarm without knowing how it works inside)
// - playVideo() (Polymorphism: different phones play videos differently)

// - [ ]  2. Draw a Diagram of an OOP Modeled System

// Create a diagram (hand-drawn or digital) of a system like:

// - A library system (Books, Members, Staff, etc.)
// - Or a fast-food restaurant system (Orders, Menus, Employee)
// In the diagram Show classes/objects
// - Arrows to represent relationships like inheritance or composition
// - Indicate which class encapsulates what data and methods

// - [ ]  3. Explain OOP Principles with Human Analogies

// Write your own analogy (non-code) to explain each of the 5 OOP principles:

// - Abstraction :- e.g house showing only a beutifull house but not
//   the complexity for building the house like arangin woods and so on.
// - Encapsulation :- e.g your payment card not showing the password to the other
//   people when paying the money.
// - Inheritance :- e.g me i inherited my father for the taller character.
// - Polymorphism :- e.g computer becouse there are more different shapes and colors
//   computers in the world e.g apple , windows but still as they are computers they are same
// - Composition :- e.g cooking food adding some onion some vegitables
//   then it will tranform delicious dinner or lunch.

// It must be unique (not from the class), and explain how that analogy relates to programming.

// - [ ]  4. Compare OOP vs Functional Thinking

// Choose a simple system (e.g., a To-Do app or Alarm Clock) and:

// - Describe how you’d design it using OOP (with objects)
// - Describe how you’d design it using Functional Programming (with functions)

// You don’t have to write code — just use words and bullets.

// i choose To-Do app

// in OOP programming with objects :-

// To-Do app for Task:
//   Properties:-
//    - title
//    - completed
//   Methods :-
//    -edit(),toggleComplete();

// To-Do app
//   Properties:-
//    -list task of objects
//   Methods:-
//    - addTask():
//    - removeTask():
//    - editTask():

// in functional programming :-

// - Example structure:
//   - Data: Array of tasks (each task is a simple object with title and completed)
//   - Functions:
//     - addTask(tasks, newTask): returns a new array with the new task added
//     - removeTask(tasks, taskId): returns a new array without the removed task
//     - editTask(tasks, taskId, newTitle): returns a new array with the updated task


// - [ ]  5. Object vs Class vs Function – Explain Like a Teacher

// Imagine you’re teaching a 10-year-old:

// - What is a Class? :- is a blue print like structring the houses
//   before building as same.
// - What is an Object? :- is like a garache you can store car and 
//   its info like the car color name and so on.
// - What is a Function? :- is a reusible code wich make the 
//   programming life easier.

// Use simple language, drawings, or emojis if needed.