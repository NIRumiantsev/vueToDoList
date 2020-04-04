Vue.component('todo',{
        props: [ 'index' ],
        data() {
            console.log(this.index);
          const todos = JSON.parse(localStorage.getItem(`todos${this.index}`));
          if (Array.isArray(todos)) {
              for (let i = 0; i < todos.length; i += 1) {
                  if (todos[i].toDoText == false) {
                      todos.splice(i, 1);
                      localStorage.setItem(`todos${this.index}`, JSON.stringify(todos));
                  }
              }
              return {
                  todos: JSON.parse(localStorage.getItem(`todos${this.index}`)),
                  newTodo: {
                      toDoText: ''
                  }
              }
          } else {
              return {
                  todos: [],
                  newTodo: {
                      toDoText: ''
                  }
              }
          }
        },
        methods: {
            addTodo() {
                let todo = { toDoText: this.newTodo.toDoText};
                this.todos.push(todo);
                this.newTodo.toDoText = '';
                localStorage.setItem(`todos${this.index}`, JSON.stringify(this.todos));
            },
            addCheckbox() {
                let checkboxes = document.getElementsByClassName('checkbox');
                for (let checkbox of checkboxes) {
                    checkbox.classList.remove('checkbox--disabled');
                }
            },
        },
        template: `
        <ul class="note__list" >
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
