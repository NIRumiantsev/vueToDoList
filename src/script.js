
const config = {
    el: '#app',
    data() {
        if (Array.isArray(JSON.parse(localStorage.getItem("notes")))) {
            return {
                notes: JSON.parse(localStorage.getItem("notes")),
                newNote: {
                    noteTitle: ''
                }
            }
        } else {
            return {
                notes: [],
                newNote: {
                    noteTitle: ''
                }
            }
        }
    },
        methods: {

            deleteNote(index) {
                this.notes.splice(index, 1);
                localStorage.setItem("notes", JSON.stringify(this.notes));
            },

            addNote(){
                let note = { noteTitle: this.newNote.noteTitle};
                this.notes.push(note);
                this.newNote.noteTitle = '';
                localStorage.setItem("notes", JSON.stringify(this.notes));
            },
            displayEditOptions() {
                let checkboxes = document.getElementsByClassName('checkbox');
                let inputs = document.getElementsByClassName('note__input');
                let buttons = document.getElementsByClassName('button--todo');

                for (let checkbox of checkboxes) {
                    if (checkbox.classList.contains('checkbox--disabled')) {
                        checkbox.classList.remove('checkbox--disabled');
                    } else {
                        checkbox.classList.add('checkbox--disabled');
                    }
                }

                for (let input of inputs) {
                    if (input.classList.contains('input--disabled')) {
                        input.classList.remove('input--disabled');
                    } else {
                        input.classList.add('input--disabled');
                    }
                }

                for (let button of buttons) {
                    if (button.classList.contains('button--disabled')) {
                        button.classList.remove('button--disabled');
                    } else {
                        button.classList.add('button--disabled');
                    }
                }
            }
        }
    };

let app = new Vue(config);

