
const config = {
    el: '#app',
    data: {
        newNote: {
            noteTitle: ''
        },
        notes: [
            {
                noteTitle: 'sdsdsd'
            },
            {
                noteTitle: 'sdsdsd'
            }
        ],
        todos: [
            {
                toDoText: 'ssssss'
            },
            {
                toDoText: 'saaaaas'
            }
        ]
    },
        methods: {

            deleteNote(index) {
                this.notes.splice(index, 1);
            },

            addNote(){
                this.notes.push(this.newNote);
            },

            deleteTodo() {
                this.todos.splice(index, 1);
            },

            addTodo() {
                this.todos.push(this.newTodo);
            }

        }
};

let app = new Vue(config);

