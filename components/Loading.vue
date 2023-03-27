<template>
    <svg class="spinner" :width="width" :height="height" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
        <circle class="path" fill="none" :stroke="color" stroke-width="6" stroke-linecap="round" cx="33" cy="33" r="30"></circle>
    </svg>
</template>

<script>
export default {

    props: {
        color: {
            type: String,
            default: '#000000'
        },
        width: {
            type: String,
            default: '100%'
        },
        height: {
            type: String,
            default: '100%'
        },
        centered: {
            type: Boolean,
            default: true
        },
        background: {
            type: Boolean,
            default: true
        }
    }

}
</script>

<style scoped>

.spinner {
    -webkit-animation: rotator 1.4s linear infinite;
    animation: rotator 1.4s linear infinite;
    opacity: 1;
}

@-webkit-keyframes rotator {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(270deg);
    }
}
@keyframes rotator {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(270deg);
    }
}

.path {
    stroke-dasharray: 187;
    stroke-dashoffset: 0;
    transform-origin: center;
    -webkit-animation: dash 1.4s ease-in-out infinite;
    animation: dash 1.4s ease-in-out infinite;
}

@-webkit-keyframes dash {
    0% {
        stroke-dashoffset: 187;
    }
    50% {
        stroke-dashoffset: 46.75;
        transform: rotate(135deg);
    }
    100% {
        stroke-dashoffset: 187;
        transform: rotate(450deg);
    }
}

@keyframes dash {
    0% {
        stroke-dashoffset: 187;
    }
    50% {
        stroke-dashoffset: 46.75;
        transform: rotate(135deg);
    }
    100% {
        stroke-dashoffset: 187;
        transform: rotate(450deg);
    }
}

</style>