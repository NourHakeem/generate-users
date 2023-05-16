Write JavaScript code that performs the following tasks:

1. Declare an object named `myUsers` with a property named `userList` set to an empty array.

2. Implement an asynchronous arrow function named `myCoolFunction` that performs the following steps:
   - Use the `await` keyword to fetch data from "https://jsonplaceholder.typicode.com/users" using the `fetch` function.
   - Assign the response to a constant variable named `response`.
   - Use the `await` keyword to parse the response data as JSON and assign it to a constant variable named `jsonUserData`.
   - Return `jsonUserData` from the function.

3. Implement an asynchronous arrow function named `populateUserList` that performs the following steps:
   - Assign the result of calling the `myCoolFunction` function to a variable named `data` using the `await` keyword.
   - Assign the value of `data` to the `userList` property of the `myUsers` object.
   - Output the `myUsers` object to the console using `console.log`.

4. Select the HTML element with the ID "user-list" using `document.getElementById` and assign it to a constant variable named `userListElement`.

5. Inside the `populateUserList` function:
   - Clear the existing user list by setting the `innerHTML` property of `userListElement` to an empty string.

6. Use the `forEach` method to iterate over the elements in the `userList` array of `myUsers`:
   - For each user, create a new `li` element using the `document.createElement` method and assign it to a constant variable named `listItem`.
   - Set the `textContent` property of `listItem` to the `name` property of the current user.
   - Add the "user-item" class to `listItem` using the `classList.add` method.
   - Append `listItem` as a child to `userListElement` using the `appendChild` method.

7. Implement an arrow function named `clearUserList` that performs the following steps:
   - Clear the user list by setting the `innerHTML` property of `userListElement` to an empty string.
   - Clear the user data in the `myUsers` object by setting `myUsers.userList` to an empty array.

8. Attach a "click" event listener to the HTML element with the ID "populate-btn" using `document.getElementById`.
   - When clicked, invoke the `populateUserList` function.

9. Attach a "click" event listener to the HTML element with the ID "clear-btn" using `document.getElementById`.
   - When clicked, invoke the `clearUserList` function.

Ensure that the code follows the provided instructions and executes the expected operations.

Good luck with your coding!
