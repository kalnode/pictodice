<script setup>
import { usePictodiceAppStore } from '~/stores/app'
const store = usePictodiceAppStore()

const emit = defineEmits()

const props = defineProps({
    shade: String // TODO: make this tyoescript ['dark', 'light']
})

function setColor(value) {
    //$colorMode.preference = color+'-dark'
    emit("update:modelValue", value)
    emit('close')
}
</script>
<template>
    <div>
        <ul v-if="!shade || shade == 'light'">
            <li v-for="color of store.colorModes.light" :key="'light-'+color"
            :class="{
                //preferred: !$colorMode.unknown && color === $colorMode.preference,
                //selected: !$colorMode.unknown && color === $colorMode.value,
            }">
                <div @click="setColor('light-'+color)" class="btnapp">
                    Light {{ color }}
                    <!-- <component :is="`icon-${color}`" /> -->
                </div>
            </li>
        </ul>
        <ul v-if="!shade || shade == 'dark'">
            <li v-for="color of store.colorModes.dark" :key="'dark-'+color"
            :class="{
                //preferred: !$colorMode.unknown && color === $colorMode.preference,
                //selected: !$colorMode.unknown && color === $colorMode.value,
            }">
                <div @click="setColor('dark-'+color)" class="btnapp">
                    Dark {{ color }}
                    <!-- <component :is="`icon-${color}`" /> -->
                </div>
            </li>
        </ul>
        <!--
        <p>
            {{ $colorMode.value }}

            <ColorScheme placeholder="..." tag="span">
                Color mode: <b>{{ $colorMode.preference }}</b>
                <span v-if="$colorMode.preference === 'system'">&nbsp;(<i>{{ $colorMode.value }}</i> mode detected)</span>
            </ColorScheme>
        </p>
        -->
    </div>
</template>

<style scoped>
ul {
    list-style: none;
    padding: 0;
    margin: 0;
}
ul li {
    display: inline-block;
    padding: 5px;
}
p {
    margin: 0;
    padding-top: 5px;
    padding-bottom: 20px;
}
.feather {
    position: relative;
    top: 0px;
    cursor: pointer;
    padding: 7px;
    background-color: var(--bg-secondary);
    border: 2px solid var(--border-color);
    margin: 0;
    border-radius: 5px;
    transition: all 0.1s ease;
}
.feather:hover {
    top: -3px;
}
.preferred .feather {
    border-color: var(--color-primary);
    top: -3px;
}
.selected .feather {
    color: var(--color-primary);
}
</style>
