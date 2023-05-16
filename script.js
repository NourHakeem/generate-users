const myUsers = {
  userList: [],
};

const myCoolFunction = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const jsonUserData = await response.json();
  return jsonUserData;
};

const populateUserList = async () => {
  const data = await myCoolFunction();
  myUsers.userList = data;
  console.log(myUsers);

  const userListElement = document.getElementById("user-list");
  userListElement.innerHTML = ""; // Clear existing user list

  myUsers.userList.forEach((user) => {
    const listItem = document.createElement("li");
    listItem.textContent = user.name;
    listItem.classList.add("user-item");
    userListElement.appendChild(listItem);
  });
};

const clearUserList = () => {
  const userListElement = document.getElementById("user-list");
  userListElement.innerHTML = ""; // Clear user list
  myUsers.userList = []; // Clear user data in the object
};

document
  .getElementById("populate-btn")
  .addEventListener("click", populateUserList);
document.getElementById("clear-btn").addEventListener("click", clearUserList);
