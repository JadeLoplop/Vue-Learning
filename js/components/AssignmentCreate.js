import AppButton from "./AppButton.js"

export default{
    components:{
        AppButton
    },
    template: `
        <form @submit.prevent="add">
            <div class="border border-gray-600 text-black flex">
                <input v-model="newAssignment" placeholder="Enter new assignment" class="p-2"/>
                <app-button type="submit" :typee="primary">Add</app-button>
            </div>
        </form>
    `,

    data() {
        return {
            newAssignment: '',
        }
    },

    methods: {

        add(){
            this.$emit('add', this.newAssignment);

            this.newAssignment = '';
        }
    }
}