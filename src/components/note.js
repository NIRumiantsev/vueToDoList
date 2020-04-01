Vue.component('note',{
    props: [ 'notes' ],
    methods: {
        deleteNote() {
            this.$emit('delete_note');
        },
    },
    template: `
    <ul class="app__list">
         <li class="note app__note" v-for="note in notes">
            <h2 class="text text--note_title">{{ note.noteTitle }}</h2>
            <img src="images/close.png" alt="Delete this note" @click="deleteNote()" width="10px">
            <div class="note__list">
                <todo></todo>
            </div>
        </li>
    </ul>
    `
});