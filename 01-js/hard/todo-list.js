/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
  - `npm run test-todo-list`
*/

class Todo {
  constructor (){
   this.list = [];
  }
add(str) {
 this.list.push(str)
}

remove(index) {
  let r = this.list
  r.splice(index,1)
}

update(index, updatedTodo) {
  if(index <this.list.length) {
  this.list[index] = updatedTodo }
  
}

getAll() {
  return this.list ;
}

get(index) {
  if(index < this.list.length ) {
  return this.list[index]
  }
  return null
}

clear() {
  this.list = []
}

}

module.exports = Todo;
