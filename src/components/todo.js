Vue.component('todo',{
        props: [ 'todos' ],
        methods: {
            deleteTodo() {
                this.$emit('delete_todo');
            }
        },
        template: `
        <ul class="note__list">
            <li class="todo note__todo" v-for="todo in todos">
                <input type="checkbox" class="checkbox note__checkbox">
                <h2 class="text text--note_title">{{ todo.toDoText }}</h2>
                <img src="images/close.png" alt="Delete this note" @click="deleteNote()">
            </li>
        </ul>
       `
    }
);
