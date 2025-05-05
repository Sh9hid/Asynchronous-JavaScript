# Asynchronous JavaScript: Callbacks, Promises, and Async/Await

This repository demonstrates three approaches to handling asynchronous operations in JavaScript: **callbacks**, **Promises**, and **async/await**. Each method is implemented in a simple data-fetching example with error handling and timeout functionality.

---

## Table of Contents
1. [Theoretical Overview](#theoretical-overview)
   - [Callbacks](#callbacks)
   - [Promises](#promises)
   - [Async/Await](#asyncawait)
2. [Code Implementation](#code-implementation)
3. [Error Handling](#error-handling)
4. [Comparison Table](#comparison-table)
5. [Usage](#usage)

---

## Theoretical Overview

### Callbacks
**What they are**:  
Functions passed as arguments to other functions to execute after an asynchronous operation completes.  
**Key traits**:
- Foundational to JavaScript’s async model (e.g., `setTimeout`).
- Prone to "callback hell" (deep nesting).
- Manual error handling via `if (err)` checks.

### Promises
**What they are**:  
Objects representing the eventual result of an async operation.  
**Key traits**:
- Chainable with `.then()` and `.catch()`.
- Avoid callback nesting.
- Built-in error propagation.

### Async/Await
**What it is**:  
Syntactic sugar over Promises for writing async code in a synchronous style.  
**Key traits**:
- Uses `async` functions and `await` keywords.
- Errors handled with `try/catch`.
- Cleaner and more readable for sequential operations.

---

## Code Implementation

### 1. **Promise-Based Implementation**  
**File**: `promise-example.js`  
```javascript
document.getElementById("fetchBtn").addEventListener("click", () => {
  const outputDiv = document.getElementById("output");
  outputDiv.textContent = "Loading...";

  const fetchPromise = fetch("https://dummyjson.com/posts")
    .then(response => {
      if (!response.ok) throw new Error("Network error");
      return response.json();
    });

  const timeoutPromise = new Promise((_, reject) => {
    setTimeout(() => reject(new Error("Timeout")), 5000);
  });

  Promise.race([fetchPromise, timeoutPromise])
    .then(data => outputDiv.textContent = JSON.stringify(data))
    .catch(err => outputDiv.textContent = `Error: ${err.message}`));
});# Asynchronous JavaScript: Callbacks, Promises, and Async/Await

This repository demonstrates three approaches to handling asynchronous operations in JavaScript: **callbacks**, **Promises**, and **async/await**. Each method is implemented in a simple data-fetching example with error handling and timeout functionality.

---

## Table of Contents
1. [Theoretical Overview](#theoretical-overview)
   - [Callbacks](#callbacks)
   - [Promises](#promises)
   - [Async/Await](#asyncawait)
2. [Code Implementation](#code-implementation)


---

## Theoretical Overview

### Callbacks
**What they are**:  
Functions passed as arguments to other functions to execute after an asynchronous operation completes.  
**Key traits**:
- Foundational to JavaScript’s async model (e.g., `setTimeout`).
- Prone to "callback hell" (deep nesting).
- Manual error handling via `if (err)` checks.

### Promises
**What they are**:  
Objects representing the eventual result of an async operation.  
**Key traits**:
- Chainable with `.then()` and `.catch()`.
- Avoid callback nesting.
- Built-in error propagation.

### Async/Await
**What it is**:  
Syntactic sugar over Promises for writing async code in a synchronous style.  
**Key traits**:
- Uses `async` functions and `await` keywords.
- Errors handled with `try/catch`.
- Cleaner and more readable for sequential operations.

---

## Code Implementation

### 1. **Promise-Based Implementation**  
**File**: `promise-example.js`  
```javascript
document.getElementById("fetchBtn").addEventListener("click", () => {
  const outputDiv = document.getElementById("output");
  outputDiv.textContent = "Loading...";

  const fetchPromise = fetch("https://dummyjson.com/posts")
    .then(response => {
      if (!response.ok) throw new Error("Network error");
      return response.json();
    });

  const timeoutPromise = new Promise((_, reject) => {
    setTimeout(() => reject(new Error("Timeout")), 5000);
  });

  Promise.race([fetchPromise, timeoutPromise])
    .then(data => outputDiv.textContent = JSON.stringify(data))
    .catch(err => outputDiv.textContent = `Error: ${err.message}`));
});# Asynchronous JavaScript: Callbacks, Promises, and Async/Await

This repository demonstrates three approaches to handling asynchronous operations in JavaScript: **callbacks**, **Promises**, and **async/await**. Each method is implemented in a simple data-fetching example with error handling and timeout functionality.

---

## Table of Contents
1. [Theoretical Overview](#theoretical-overview)
   - [Callbacks](#callbacks)
   - [Promises](#promises)
   - [Async/Await](#asyncawait)
2. [Code Implementation](#code-implementation)
3. [Error Handling](#error-handling)
4. [Comparison Table](#comparison-table)
5. [Usage](#usage)

---

## Theoretical Overview

### Callbacks
**What they are**:  
Functions passed as arguments to other functions to execute after an asynchronous operation completes.  
**Key traits**:
- Foundational to JavaScript’s async model (e.g., `setTimeout`).
- Prone to "callback hell" (deep nesting).
- Manual error handling via `if (err)` checks.

### Promises
**What they are**:  
Objects representing the eventual result of an async operation.  
**Key traits**:
- Chainable with `.then()` and `.catch()`.
- Avoid callback nesting.
- Built-in error propagation.

### Async/Await
**What it is**:  
Syntactic sugar over Promises for writing async code in a synchronous style.  
**Key traits**:
- Uses `async` functions and `await` keywords.
- Errors handled with `try/catch`.
- Cleaner and more readable for sequential operations.

---

## Code Implementation

### 1. **Promise-Based Implementation**  
**File**: `promise-example.js`  
```javascript
document.getElementById("fetchBtn").addEventListener("click", () => {
  const outputDiv = document.getElementById("output");
  outputDiv.textContent = "Loading...";

  const fetchPromise = fetch("https://dummyjson.com/posts")
    .then(response => {
      if (!response.ok) throw new Error("Network error");
      return response.json();
    });

  const timeoutPromise = new Promise((_, reject) => {
    setTimeout(() => reject(new Error("Timeout")), 5000);
  });

  Promise.race([fetchPromise, timeoutPromise])
    .then(data => outputDiv.textContent = JSON.stringify(data))
    .catch(err => outputDiv.textContent = `Error: ${err.message}`));
});


### Error Handling

- Callbacks	
```javascript
// Manual checks (e.g., if (err))	Not used in modern implementations

```
- Promises
```javascript
	.catch() block	catch(err => handleError(err))
```
- Async/Await	
```javascript
try/catch block	try { await call(); } catch (err) {...}
// Timeout promise example
const timeoutPromise = new Promise((_, reject) => {
  setTimeout(() => reject(new Error("Timeout")), 5000);
});

```



You can find the link to the repository [here](https://github.com/Sh9hid/async-programming-in-js)..
