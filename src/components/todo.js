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
            }
        },
        template: `
        <ul class="note__list">
            <input type="text" placeholder="Add todo" class="input todo__input" v-model="newTodo.toDoText">
            <button class="button" @click="addTodo">Create</button>
            <li class="todo note__todo" v-for="todo in todos">
                <input type="checkbox" class="checkbox note__checkbox">
                <h2 class="text text--note_title">{{ todo.toDoText }}</h2>
                <img src="images/close.png" alt="Delete this note" @click="deleteTodo(todos.indexOf(todo))" width="10px">
            </li>
        </ul>
       `
    }
);
