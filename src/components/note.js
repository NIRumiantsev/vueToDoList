Vue.component('note',{
    props: [ 'notes' ],
    methods: {
        deleteNote(index) {
            this.$emit('delete_note', index);
        },

    },
    template: `
    <ul class="app__list">
         <li class="note" v-for="note in notes">
            <div class="note__header">
                <h2 class="text text--note_title">{{ note.noteTitle }}</h2>
                <div class="note__buttons">
                    <img src="images/close.png" alt="Delete this note" @click="deleteNote(notes.indexOf(note))" class="image--delete_note">
                </div>
            </div>
            <div class="note__list">
                <todo></todo>
            </div>
        </li>
    </ul>
    `
});