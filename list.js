var todos =["Buy New Turtle"];

var input = prompt("What would you like to do?");


while (input !== "quit") {
  if(input === "list") {
    listTodo()
  }
  else if(input === "new") {
    newTodo()
  }
  else if(input === "delete") {
    deleteTodo()
  }

input = prompt("What would you like to do?");
}
console.log("OK, YOU QUIT THE APP");




function listTodo() {
  console.log("******************")
  todos.forEach(function(listtodo, i){
      console.log(i + ": " + listtodo);
    });
  console.log("******************")
}

function newTodo() {
    var newTodo = prompt("Enter new todo");
      todos.push(newTodo);
}

function deleteTodo() {
  var deleteTodo = prompt("Enter index number")
    todos.splice(deleteTodo,1);
    console.log("Todo Deleted!")
}
