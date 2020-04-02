Vue.component('todo',{
        data() {
          return {
              todos: [],
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
            addCheckbox() {
                let checkboxes = document.getElementsByClassName('checkbox');
                for (let checkbox of checkboxes) {
                    checkbox.classList.remove('checkbox--disabled');
                }
            },
        },
        template: `
        <ul class="note__list">
            <div class="note__form">
                <input type="text" placeholder="Add todo" class="input note__input input--disabled" v-model="newTodo.toDoText">
                <button class="button button--todo button--disabled" @mouseup="addTodo"  @click="addCheckbox">Add</button>
            </div>
            <li class="todo" v-for="todo in todos">
                <input type="checkbox" class="checkbox checkbox--disabled">
                <h3 class="text text--todo">{{ todo.toDoText }}</h3> 
            </li>
        </ul>
       `
    }
);
