// Contact form validation
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

  if (!name || !email || !message) {
    alert("All fields are required.");
    return;
  }

  if (!emailRegex.test(email)) {
    alert("Enter a valid email address.");
    return;
  }

  alert("Message submitted successfully!");
  this.reset();
});

// To-Do List
function addTodo() {
  const input = document.getElementById("todoInput");
  const task = input.value.trim();

  if (task === "") {
    alert("Please enter a task.");
    return;
  }

  const li = document.createElement("li");
  li.innerHTML = `${task} <button onclick="removeTodo(this)">Remove</button>`;

  document.getElementById("todoList").appendChild(li);
  input.value = "";
}

function removeTodo(button) {
  const li = button.parentElement;
  li.remove();
}

 
