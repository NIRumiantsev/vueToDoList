Vue.component('todo',{
        data() {
          return {
              todos: [
                  {
                      toDoText: 'ssssss'
                  },
                  {
                      toDoText: 'saaaaas'
                  }
              ],
              newTodo: {
                  toDoText: ''
              }
          }
        },
        methods: {
            deleteTodo(index) {
                console.log(index);
                this.todos.splice(index, 1);
            },
            addTodo() {
                let todo = { toDoText: this.newTodo.toDoText};
                this.todos.push(todo);
                this.newTodo.toDoText = '';
            },
            checkCheckbox() {
                
            }

        },
        template: `
        <ul class="note__list">
            <div class="note__form">
                <input type="text" placeholder="Add todo" class="input" v-model="newTodo.toDoText">
                <button class="button button--todo" @click="addTodo">Add</button>
            </div>
            <li class="todo" v-for="todo in todos">
                <input type="checkbox">
                <h3>{{ todo.toDoText }}</h3> 
                <img src="images/close.png" alt="Delete this note" @click="deleteTodo(todos.indexOf(todo))" class="image--delete_note">
            </li>
        </ul>
       `
    }
);
