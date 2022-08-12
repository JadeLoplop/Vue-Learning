export default {
    template: `
        <button 
        :class="{
            'px-5 py-2 disabled:cursor-not-allowed': true,
            'bg-blue-600 hover:bg-gray-700': typee == 'primary',
            'bg-purple-200 hover:bg-gray-400': typee == 'secondary',
            'bg-gray-200 hover:bg-gray-400': typee == 'muted',
            'is-loading': processing
        }"
        :disabled="processing">
            <slot/>
        </button>
    `,

    props:{
        typee: {
            type: String,
            default: 'primary',
        },

        processing: {
            type: Boolean,
            default: false,
        }
    },
}