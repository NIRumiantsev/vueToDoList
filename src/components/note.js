Vue.component('note',{
    props: [ 'notes', 'todos', 'newTodo' ],
    methods: {
        deleteNote() {
            this.$emit('delete_note');
        },
        addTodo() {
            this.$emit('add_todo')
        }
    },
    template: `
    <ul class="app__list">
         <li class="note app__note" v-for="note in notes">
            <h2 class="text text--note_title">{{ note.noteTitle }}</h2>
            <img src="images/close.png" alt="Delete this note" @click="deleteNote()">
            <input type="text" placeholder="Add todo" class="input todo__input" v-model="newTodo.toDoText">
            <button class="button" @click="addTodo">Create</button>
            <div class="note__list">
                <todo @delete_todo="deleteTodo(index)" v-bind:todos="todos"></todo>
            </div>
        </li>
    </ul>
    `
});