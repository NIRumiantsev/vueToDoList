
const config = {
    el: '#app',
    data: {
        newNote: {
            noteTitle: ''
        },
        newTodo: {
            toDoText: ''
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
                this.notes.push(this.newTodo);
            }

        }
};

let app = new Vue(config);

