
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
    },
        methods: {

            deleteNote(index) {
                this.notes.splice(index, 1);
            },

            addNote(){
                let note = { noteTitle: this.newNote.noteTitle};
                this.notes.push(note);
                this.newNote.noteTitle = '';
            },

        }
};

let app = new Vue(config);

