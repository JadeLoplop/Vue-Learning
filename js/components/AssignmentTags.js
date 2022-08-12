import AppButton from "./AppButton.js"
export default {
    components: {
        AppButton
    },
    template: `
        <div class="flex gap-2">
            <app-button
                @click="$emit('update:modelValue', tag)"
                v-for="tag in tags" typee="secondary"
                class="border border-blue-800 rounded px-1 py-px text-xs text-black"
                :class="{
                    'border-green-500 text-green-500' : tag === modelValue
                }"
            >
                {{ tag }}
            </app-button>
        </div>
    `,

    props: {
        initialTags: Array,
        modelValue: String,
    },

    computed: {
        tags() {
            return ['all', ...new Set(this.initialTags)];
        }
    }
}