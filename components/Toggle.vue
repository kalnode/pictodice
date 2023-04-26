<template>
    <div
    :class="[ classes, 'cursor-pointer' ]"
    :tabindex="disabled ? undefined : 0"
    :aria-checked="modelValue"
    :aria-describedby="describedby"
    :aria-labelledby="labelledby"
    role="switch"
    v-bind="aria"
    @keypress.space.prevent="toggleSwitch()"
    @click="toggleSwitch()">

        <label for="checkbox_actual" class="relative flex justify-between w-full pointer-events-none">
            <input
            type="checkbox"
            id="checkbox_actual"
            :value="modelValue"
            :disabled="disabled"
            v-bind="$attrs"
            tabindex=-1
            @change="switched($event.target.checked)"
            class="sr-only" />
            <!-- TODO: Any reason to maintain "checked", like this :checked="modelValue", sinve we have a dynamic 2-way value (modelValue) ??? -->

            <span class="label">{{ label }}</span>

            <div class="relative h-8 w-14">
                <span :class="modelValue ? 'bg-green-500' : 'bg-gray-300'" class="relative h-full flex inset-0 rounded-full transition"></span>
                <span :class="modelValue ? 'start-6' : 'start-0'" class="absolute inset-y-0 m-1 h-6 w-6 rounded-full bg-white transition-all"></span>
            </div>
        </label>

    </div>
</template>
<script>
export default {
    inheritAttrs: false
}
</script>
<script setup>
import { ref } from "vue"

const emit = defineEmits()

const props = defineProps({
    label: String,
    disabled: Boolean,
    modelValue: {
        type: [String, Number, Boolean],
        required: true,
        default: false
    },
    classes: {
        type: Object,
        required: false,
        default: () => ({})
    },
    labelledby: {
        type: String,
        required: false
    },
    describedby: {
        type: String,
        required: false
    },
    aria: {
        required: false,
        type: Object,
        default: () => ({})
    },
})

function toggleSwitch() {
    switched(!props.modelValue)
}

function switched(checkedValue) {
    emit('update:modelValue', checkedValue) // Updates v-model on instance. e.g. <Toggle v-model="store.antialiasing" />
}

</script>
